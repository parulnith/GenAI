# Project brief: kids' learning platform (working name: Breaking the Jargons)

## Vision

**Technology as an equaliser.** Where a child lives should not decide what they become. A child in a village should have the same chance to become a scientist, a doctor or an engineer as a child in a big city.

Breaking the Jargons is a self-study platform for children in India, Class 1 to 10, including rural India and children without a good school nearby. Each child picks a dream and follows a clear path of small steps towards it, with Pip as their guide. Subjects are taught through interactive worlds and puzzles instead of textbook jargon.

It is being built first for my son, who is the first tester, and then shared with other families and schools. Design everything so new paths, subjects and languages can be added without rebuilding the site.

## Design principles

- **Paths, not interests.** The dream path is the centre of the product. Kids don't browse "what they like"; they choose what they want to become, and the path carries them.
- **Simple for kids.** One thing per screen, big buttons, one clear next step. Avoid long pages and too many choices.
- **English and Hindi everywhere.** Every piece of text exists in both languages, with a toggle on every screen. More Indian languages later (Tamil, Bengali, Telugu, Marathi, Kannada, Gujarati, Malayalam, Punjabi, Odia).
- **Indian connection to motivate.** Every path shows an Indian who did it first ("So can you!") and something India achieved ("India did it").
- **Age-wise content.** Content changes with the child's class (see Age levels).
- **Works anywhere.** Runs in a phone's web browser, with no sign-up and no app to install. Light pages. Offline, no-phone activities are part of every path.
- **Appeals to kids and adults.** Playful and warm for children; a separate, calmer page for parents and teachers.

## Dream paths

Six paths today. Each path has steps; each step is a few puzzles and earns a skill. The last step opens a world.

| Path | Indian role model | India did it |
|---|---|---|
| Space Scientist | Kalpana Chawla (Karnal, Haryana) | Chandrayaan-3, first landing near the Moon's south pole (2023) |
| Doctor | Anandibai Joshi (medical degree, 1886) | India declared polio-free (2014) |
| Engineer | A. P. J. Abdul Kalam (sold newspapers in Rameswaram) | Chenab Bridge, world's highest railway arch bridge |
| Computer Engineer | Raj Reddy (born in a village in Andhra Pradesh, Turing Award) | UPI, phone payments from malls to village shops |
| Artist | Raja Ravi Varma (Kerala) | Warli painting, Maharashtra |
| Writer | Rabindranath Tagore (Nobel Prize, 1913) | Tagore wrote the anthems of India and Bangladesh |

Facts and role-model lines must be checked by a teacher before children use the site. Prefer Indian role models from small towns and villages.

## Age levels

- **Explanations:** Class 1 to 4 get simple words; Class 5 to 10 get fuller explanations with real terms.
- **At-home activity per path, three levels, no phone needed:**
  - Little Explorer: Class 1 to 3
  - Young Builder: Class 4 to 7
  - Future Maker: Class 8 to 10

## The guide: Pip

Pip is one named guide character shared across every path and world: a small paper plane with eyes and a smile.

What makes Pip different from a chatbot:

- **Pip shows, not just tells.** Pip is powered by Claude with tool use. Each world exposes actions Pip can take (fly the plane to a place, change a simulation setting, highlight something, replay a step). When a kid asks a question, Pip answers *and* acts in the world.
- **Pip asks before it tells.** Ask "What do you think?" first, give a hint for each wrong guess, never hand over homework answers.
- **Class-aware and bilingual.** Answers match the child's class and language (English, Hindi, or a mix).
- **Follows the path.** Pip links each new puzzle to the dream the child chose, and remembers progress (stored in the browser; no personal data collected in v1).
- **Makes them feel good about solving.** Stars, badges (New Explorer, Curious Explorer, Super Solver, Jargon Breaker), skills earned, a small celebration, and "Tell a grown-up what you found out!"
- **A learning guide, not a friend replacement.** Warm, encouraging, always focused on learning.

## Worlds

| World | Status | Notes |
|---|---|---|
| Earth Explorer (Geography) | Live: parulnith.github.io/earth-explorer (repo parulnith/earth-explorer) | Single-file CesiumJS game. Pip "Ask" tab, reuse `listen()` / `say()`; tool `fly_to(wonder_id)`. |
| Story Code Quest (Coding) | Live: story-code-quest.vercel.app (repo parulnith/story-code-quest) | React + TS + Vite. Story → level generator in the existing `Level` format, validated as solvable; debugging buddy that replays to the wrong step. |
| Science Lab | Coming soon | "What if" experiments; predict-then-see. Final step of the Space, Doctor and Engineer paths. |
| Time Travellers (History) | Coming soon | Mohenjo-daro and more; meet people from long ago, clearly framed as a story. |
| English Club | Coming soon | Learn English step by step, with Pip explaining in Hindi when needed. |
| Bhasha Bridge (Translation) | Coming soon | English ↔ Indian languages. Final step of the Writer path. |
| Pattern Park (Maths), Art Studio | Coming soon | Art Studio is the final step of the Artist path. |
| Shikshak AI (Hindi tutor) | Parked | Web version built in `site/shikshak/` with `site/api/shikshak.js` (Claude vision), not linked. Original Android app: parulnith/ShikshAIk. |

## Current site (`breaking-the-jargons/site/`)

Static HTML, CSS and JavaScript, no build step, no API key needed. Screens, one at a time, by URL hash:

- `#start`: first visit. Choose English or हिंदी, then your class.
- `#home`: "What do you want to become?" with the six dream cards.
- `#path`: the chosen dream's own page: level badge, role model, progress, steps (only the next step shows its puzzles), "Try this at home", "India did it".
- `#ask`: ask Pip (English or Hindi) or tap an idea; the puzzle conversation plays here.
- `#grown-ups`: for parents and teachers, and how Pip uses Claude.

Content lives in `site/worlds.js` (paths, worlds, puzzles, all `{ en, hi }`); interface text is the `UI` object in `site/app.js`. To add a path or puzzle, edit `worlds.js` only. See `site/README.md`.

**Preview mode:** until Claude credits are available, Pip answers from 18 example puzzles matched by English and Hindi keywords. The site says so ("Preview"). Do not claim live Claude answers until `/api/pip` is connected.

## Architecture

- **Hosting:** the site is static, so any static host works; connect the custom domain there. Not tied to Vercel. When Pip goes live, the API function needs a host that runs serverless functions (for example Vercel, Netlify or Cloudflare).
- **Claude API:** never put the API key in browser code. A small serverless function `/api/pip` that:
  - holds `ANTHROPIC_API_KEY` as an environment variable,
  - adds Pip's system prompt (language, class, chosen path, current world and context, kid-safety rules),
  - defines the world's tools and returns Claude's text + tool calls to the page,
  - rate-limits per visitor (use a shared store, not memory, before wide sharing).
- **Model:** a fast, low-cost model (Claude Haiku) for Pip's answers; check current model names in the Claude docs.
- **Kid safety (in the system prompt and the function):** short answers (2–3 sentences, can be read aloud), age-appropriate language, stay on the subject and gently redirect anything else, never ask for or keep personal information, encourage involving a parent or teacher.

## Milestones

Done:

1. Hub site with dream paths, Ask Pip puzzles, stars and badges, age levels, English and Hindi, Indian connection, and a page for parents and teachers (preview mode, no API key).

Next, once Claude credits are available:

2. `/api/pip` serverless function with the safety system prompt; Pip answers any question in the child's language and level, and creates new puzzles for each path.
3. Pip "Ask" tab in Earth Explorer with one tool: `fly_to(wonder_id)`.
4. Story → level generator in Story Code Quest.
5. Choose a host, deploy, connect the custom domain.
6. More Indian languages; English Club and Bhasha Bridge.

## Why this matters

This is the product for the Claude for Startups application (claude.com/programs/startups). The application needs a website on the company domain, an email on that domain, and a short description. The key point for the application: Claude runs *inside* the product (Pip), helping close the gap for children who don't have good schools nearby, not only in how it was built.
