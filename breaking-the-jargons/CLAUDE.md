# Project brief: kids' learning platform (working name: Breaking the Jargons)

## Vision

**Technology as an equaliser.** Where a child lives should not decide what they become. A child in a village should have the same chance to become a scientist, a doctor or an engineer as a child in a big city.

Breaking the Jargons is a self-study platform for children in India, Class 1 to 10, including rural India and children without a good school nearby. Each child picks a dream and follows a clear path of small steps towards it, with Mitthu the parrot as their guide. Subjects are taught through interactive worlds and puzzles instead of textbook jargon.

It is being built first for my son, who is the first tester, and then shared with other families and schools. Design everything so new paths, subjects and languages can be added without rebuilding the site.

## Design principles

- **Paths, not interests.** The dream path is the centre of the product. Kids don't browse "what they like"; they choose what they want to become, and the path carries them.
- **Simple for kids.** One thing per screen, big buttons, one clear next step. Avoid long pages and too many choices.
- **English and Hindi everywhere.** Every piece of text exists in both languages, with a toggle on every screen. More Indian languages later (Tamil, Bengali, Telugu, Marathi, Kannada, Gujarati, Malayalam, Punjabi, Odia).
- **Indian connection to motivate.** Every path shows an Indian who did it first ("So can you!") and something India achieved ("India did it").
- **Class-wise content.** Every step has different puzzles for each class level (see Class levels), not just different wording.
- **Works anywhere.** Runs in a phone's web browser, with no sign-up and no app to install. Light pages. Offline, no-phone activities are part of every path.
- **Appeals to kids and adults.** Playful and warm for children; a separate, calmer page for parents and teachers.
- **Crafted, not generic.** The look is a child's school copybook: ruled paper, royal-blue ink, hand-drawn SVG icons (no emoji as decoration), dream cards like stickers, each path drawn as a numbered trail. Fonts: Baloo 2 (headings), Mukta (body), Kalam (Mitthu's handwriting); all cover English and Hindi.

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

## Class levels

Every path step has its own puzzles for each level, and each path has a no-phone "Try this at home" activity per level:

- **Little Explorer, Class 1 to 3:** everyday things, short words (where the Sun goes at night, the thirsty crow, which shape is strongest).
- **Young Builder, Class 4 to 7:** the core puzzles (why the sky is blue, Mohenjo-daro, loops in code). Class 4 gets simpler explanations.
- **Future Maker, Class 8 to 10:** real terms and reasons (why astronauts float, binary numbers, how vaccines work, refraction).

## The guide: Mitthu

Mitthu (मिट्ठू) is one guide character shared across every path and world: a green parrot perched on a pencil. Almost every Indian child knows the name, and a talking parrot that asks questions back, in English and Hindi, fits a guide that teaches by asking. (Pip, the earlier paper plane, was too generic to stick.)

What makes Mitthu different from a chatbot:

- **Mitthu shows, not just tells.** Mitthu is powered by Claude with tool use. Each world exposes actions Mitthu can take (fly the plane to a place, change a simulation setting, highlight something, replay a step). When a kid asks a question, Mitthu answers *and* acts in the world.
- **Mitthu asks before it tells.** Ask "What do you think?" first, give a hint for each wrong guess, never hand over homework answers.
- **Class-aware and bilingual.** Answers match the child's class and language (English, Hindi, or a mix).
- **Follows the path.** Mitthu links each new puzzle to the dream the child chose, and remembers progress (stored in the browser; no personal data collected in v1).
- **Makes them feel good about solving.** Stars, badges (New Explorer, Curious Explorer, Super Solver, Jargon Breaker), skills earned, a small celebration, and "Tell a grown-up what you found out!"
- **A learning guide, not a friend replacement.** Warm, encouraging, always focused on learning.

## Worlds

| World | Status | Notes |
|---|---|---|
| Earth Explorer (Geography) | Live: parulnith.github.io/earth-explorer (repo parulnith/earth-explorer) | Single-file CesiumJS game. Mitthu "Ask" tab, reuse `listen()` / `say()`; tool `fly_to(wonder_id)`. |
| Story Code Quest (Coding) | Live: story-code-quest.vercel.app (repo parulnith/story-code-quest) | React + TS + Vite. Story → level generator in the existing `Level` format, validated as solvable; debugging buddy that replays to the wrong step. |
| Science Lab | Coming soon | "What if" experiments; predict-then-see. Final step of the Space, Doctor and Engineer paths. |
| Time Travellers (History) | Coming soon | Mohenjo-daro and more; meet people from long ago, clearly framed as a story. |
| English Club | Coming soon | Learn English step by step, with Mitthu explaining in Hindi when needed. |
| Bhasha Bridge (Translation) | Coming soon | English ↔ Indian languages. Final step of the Writer path. |
| Pattern Park (Maths), Art Studio | Coming soon | Art Studio is the final step of the Artist path. |
| Shikshak AI (Hindi tutor) | Parked | Web version built in `site/shikshak/` with `site/api/shikshak.js` (Claude vision), not linked. Original Android app: parulnith/ShikshAIk. |

## Current site (`breaking-the-jargons/site/`)

Static HTML, CSS and JavaScript, no build step, no API key needed. Screens, one at a time, by URL hash:

- `#start`: first visit. Choose English or हिंदी, then your class.
- `#home`: "What do you want to become?" with the six dream cards.
- `#path`: the chosen dream's own page: level badge, role model, progress, steps (only the next step shows its puzzles), "Try this at home", "India did it".
- `#ask`: ask Mitthu (English or Hindi) or tap an idea; the puzzle conversation plays here.
- `#grown-ups`: for parents and teachers, and how Mitthu uses Claude.

Content lives in `site/worlds.js` (paths, worlds, Class 4 to 7 puzzles), `site/puzzles-little.js` (Class 1 to 3) and `site/puzzles-future.js` (Class 8 to 10), all `{ en, hi }`; interface text is the `UI` object in `site/app.js`. Drawings (Mitthu, icons) are an SVG sprite in `site/index.html`. Adding a path or puzzle needs only the content files. See `site/README.md`.

**Preview mode:** until Claude credits are available, Mitthu answers from 53 example puzzles (16 + 18 + 19 across the three levels) matched by English and Hindi keywords. The site says so ("Preview"). Do not claim live Claude answers until `/api/pip` is connected.

## Architecture

- **Hosting:** GitHub Pages at **https://breakingthejargons.com**. The workflow `.github/workflows/deploy-site.yml` publishes the site's public files from `breaking-the-jargons/site` on every push to `main` that touches the site (the parked Shikshak page and API are left out). When Mitthu goes live, the `/api/pip` function needs a host that runs serverless functions (for example Vercel, Netlify or Cloudflare); GitHub Pages can't run it.
- **Claude API:** never put the API key in browser code. A small serverless function `/api/pip` that:
  - holds `ANTHROPIC_API_KEY` as an environment variable,
  - adds Mitthu's system prompt (language, class, chosen path, current world and context, kid-safety rules),
  - defines the world's tools and returns Claude's text + tool calls to the page,
  - rate-limits per visitor (use a shared store, not memory, before wide sharing).
- **Model:** a fast, low-cost model (Claude Haiku) for Mitthu's answers; check current model names in the Claude docs.
- **Kid safety (in the system prompt and the function):** short answers (2–3 sentences, can be read aloud), age-appropriate language, stay on the subject and gently redirect anything else, never ask for or keep personal information, encourage involving a parent or teacher.

## Milestones

Done:

1. Hub site with dream paths, Ask Mitthu puzzles, stars and badges, class-wise puzzles and activities, English and Hindi, Indian connection, and a page for parents and teachers (preview mode, no API key).

Next, once Claude credits are available:

2. `/api/pip` serverless function with the safety system prompt; Mitthu answers any question in the child's language and level, and creates new puzzles for each path.
3. Mitthu "Ask" tab in Earth Explorer with one tool: `fly_to(wonder_id)`.
4. Story → level generator in Story Code Quest.
5. Go live on breakingthejargons.com (GitHub Pages workflow added; needs the PR merged, Pages set to GitHub Actions with the custom domain, and DNS records at the registrar).
6. More Indian languages; English Club and Bhasha Bridge.

## Contact

Company email: info@breakingthejargons.com (shown on the parents and teachers page and in the footer).

## Why this matters

This is the product for the Claude for Startups application (claude.com/programs/startups). The application needs a website on the company domain, an email on that domain, and a short description. The key point for the application: Claude runs *inside* the product (Mitthu), helping close the gap for children who don't have good schools nearby, not only in how it was built.
