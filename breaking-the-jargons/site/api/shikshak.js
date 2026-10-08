// Shikshak AI backend: Claude vision for lesson analysis, and Claude for the Study Buddy chat.
// Runs as a Vercel serverless function. ANTHROPIC_API_KEY is read from the environment and never sent to the browser.

const MODEL = "claude-haiku-5-5";
const API_URL = "https://api.anthropic.com/v1/messages";
const MAX_BODY_CHARS = 4_000_000; // Roughly 3 MB of base64 image data.
const MAX_CHAT_MESSAGES = 20;
const MAX_CHAT_CHARS = 1000;
const RATE_LIMIT = 30; // Requests per visitor per hour.
const RATE_WINDOW_MS = 60 * 60 * 1000;

// In-memory, per instance. Good enough for a family-sized launch; move to a shared store before wider sharing.
const hits = new Map();

const ANALYSE_SYSTEM = `You are a friendly, encouraging, and expert Hindi-to-English tutor for primary school children.
Your task is to analyse one or more photos of pages from a Hindi poem, story, or lesson.
The photos are pages of the SAME chapter, given in reading order. Read the Hindi text accurately from ALL pages and combine it into one continuous lesson.
Provide:
1. A line-by-line translation covering ALL pages. One entry per visible line (do not merge lines). Keep the order.
2. A short, engaging synopsis of the complete content, suitable for a child.
3. 5 to 8 difficult Hindi words from the text, with simple English meanings.
Use vocabulary a child in the given grade would understand. Tone: cheerful, educational, simple.
If the photo does not contain Hindi text, say so in the synopsis and leave the other lists empty.

Return ONLY valid JSON with this shape, and no markdown or text outside it:
{
  "lines": [{"hindi": "...", "english_meaning": "..."}],
  "synopsis": "...",
  "difficult_words": [{"hindi_word": "...", "english_meaning": "..."}]
}`;

const SAFETY_RULES = `Safety and tone rules (always follow):
- You are talking to a primary school child. Use short, simple, kind sentences.
- Stay on the lesson and Hindi learning. If asked about anything else, gently guide back to the lesson.
- Never ask for or repeat personal information (name, school, address, phone, photos of people). If a child shares personal details, say kindly not to share them and encourage them to tell a parent or teacher.
- Encourage the child to ask a parent or teacher when they want to dig deeper.`;

const CHAT_SYSTEM = `You are Shikshak, a friendly Study Buddy for a primary school student who is learning a Hindi lesson.
Answer questions about the lesson text, the meaning of words, and Hindi grammar. Keep answers to 2 to 3 short sentences.
Be kind and supportive.

${SAFETY_RULES}`;

function clientKey(req) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = (typeof forwarded === "string" ? forwarded.split(",")[0] : req.socket?.remoteAddress) || "unknown";
  return ip.trim();
}

function overRateLimit(key) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

function extractJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
}

function cleanText(value, max) {
  return typeof value === "string" ? value.slice(0, max) : "";
}

async function callClaude({ system, messages, maxTokens }) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set");

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({ model: MODEL, max_tokens: maxTokens, system, messages }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Claude API ${response.status}: ${detail.slice(0, 300)}`);
  }
  const data = await response.json();
  return data.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("");
}

async function analyse(body, res) {
  const grade = Number(body.grade) || 5;
  const images = Array.isArray(body.images) ? body.images.slice(0, 5) : [];
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];

  const content = [];
  images.forEach((image, index) => {
    if (!image || !allowed.includes(image.media_type) || typeof image.data !== "string") return;
    if (images.length > 1) content.push({ type: "text", text: `Page ${index + 1} of ${images.length}` });
    content.push({ type: "image", source: { type: "base64", media_type: image.media_type, data: image.data } });
  });

  if (content.length === 0) {
    res.status(400).json({ error: "Please add at least one photo (JPG, PNG, WebP or GIF)." });
    return;
  }

  content.push({ type: "text", text: `The child is in Grade ${grade}. Return the JSON now.` });

  const text = await callClaude({
    system: ANALYSE_SYSTEM,
    messages: [{ role: "user", content }],
    maxTokens: 4000,
  });

  const parsed = extractJson(text);
  if (!parsed) {
    res.status(502).json({ error: "Shikshak could not read that page. Try a clearer photo." });
    return;
  }

  res.status(200).json({
    lines: Array.isArray(parsed.lines) ? parsed.lines : [],
    synopsis: typeof parsed.synopsis === "string" ? parsed.synopsis : "",
    difficult_words: Array.isArray(parsed.difficult_words) ? parsed.difficult_words : [],
  });
}

async function chat(body, res) {
  const grade = Number(body.grade) || 5;
  const lesson = body.lesson && typeof body.lesson === "object" ? body.lesson : {};
  const lessonJson = JSON.stringify({
    lines: Array.isArray(lesson.lines) ? lesson.lines.slice(0, 80) : [],
    synopsis: cleanText(lesson.synopsis, 2000),
    difficult_words: Array.isArray(lesson.difficult_words) ? lesson.difficult_words.slice(0, 20) : [],
  });

  const history = (Array.isArray(body.messages) ? body.messages : [])
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_CHAT_MESSAGES)
    .map((m) => ({ role: m.role, content: cleanText(m.content, MAX_CHAT_CHARS) }));

  if (history.length === 0 || history[history.length - 1].role !== "user") {
    res.status(400).json({ error: "Send a question to start the chat." });
    return;
  }

  const reply = await callClaude({
    system: `${CHAT_SYSTEM}\n\nThe child is in Grade ${grade}. Lesson data (JSON): ${lessonJson}`,
    messages: history,
    maxTokens: 400,
  });

  res.status(200).json({ reply: reply.trim() || "Hmm, let's try that again. What would you like to know?" });
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Use POST." });
    return;
  }

  if (overRateLimit(clientKey(req))) {
    res.status(429).json({ error: "You have asked a lot today. Take a break and try again soon!" });
    return;
  }

  const body = req.body || {};
  if (JSON.stringify(body).length > MAX_BODY_CHARS) {
    res.status(413).json({ error: "That photo is too big. Try a smaller one." });
    return;
  }

  try {
    if (body.action === "analyse") return await analyse(body, res);
    if (body.action === "chat") return await chat(body, res);
    res.status(400).json({ error: "Unknown action." });
  } catch (err) {
    console.error("shikshak api error:", err.message);
    res.status(500).json({ error: "Shikshak is taking a nap. Please try again in a minute." });
  }
};
