# Project brief: kids' learning platform (working name: Breaking the Jargons)

## Vision

**Technology as an equaliser.** Where a child lives should not decide what they become. A child in a village should have the same chance to become a scientist, a doctor or an engineer as a child in a big city.

Breaking the Jargons is a self-study platform for children in India, Class 5 to 10, including rural India and children without a good school nearby. Each child picks a dream and follows a real path towards it: lessons with a big idea, an example from India, an interactive animation, videos and links from trusted sites, a no-phone activity, check-yourself puzzles and a final project. Mitthu the parrot is their guide. Along the way children notice which lessons they love, so they discover what they enjoy and build real skills: something a chatbot alone can't give them.

It is being built first for my son, who is the first tester, and then shared with other families and schools. Design everything so new paths, subjects and languages can be added without rebuilding the site.

## Design principles

- **Paths, not interests.** The dream path is the centre of the product. Kids choose what they want to become, and the path carries them. After each lesson they say whether they enjoyed it; loved lessons show up on the home page under "What you enjoy", so discovery happens by doing.
- **Rigorous, not a quiz.** Every path is a proper course: three lessons, each with real explanation, examples, an animation or activity, links to learn more, and puzzles; then a project.
- **Simple for kids.** One thing per screen, big buttons, one clear next step. Avoid long pages and too many choices.
- **English and Hindi everywhere.** Every piece of text exists in both languages, with a toggle on every screen. More Indian languages later (Tamil, Bengali, Telugu, Marathi, Kannada, Gujarati, Malayalam, Punjabi, Odia).
- **Indian connection to motivate.** Every path shows an Indian who did it first ("So can you!") and something India achieved ("India did it").
- **Class-wise content.** Every step has different puzzles for each class level (see Class levels), not just different wording.
- **Works anywhere.** Runs in a phone's web browser, with no sign-up and no app to install. Light pages. Offline, no-phone activities are part of every path.
- **Appeals to kids and adults.** Playful and warm for children; a separate, calmer page for parents and teachers.
- **Crafted, not generic.** The look is a child's school copybook: ruled paper, royal-blue ink, hand-drawn SVG icons (no emoji as decoration), dream cards like stickers, each path drawn as a numbered trail. Fonts: Baloo 2 (headings), Mukta (body), Kalam (Mitthu's handwriting); all cover English and Hindi.

## Dream paths

Twelve paths today (`site/paths.js`): Space Scientist, Doctor, Engineer, Computer Engineer, Artist, Writer, Farmer and Agri Scientist, Teacher, Pilot, Nature Scientist, Musician, Sportsperson.

Each path has: what the work is like, a day in the life, "this might be you if...", an Indian role model ("So can you!"), an "India did it" fact, three lessons (each earns a skill), a final project for each level, and "Where this leads" (subjects to focus on, the stream after Class 10, and the route after that).

Each lesson has: the big idea, an example from India, "go deeper" (open for Class 8 to 10), an optional Claude-made animation, links to free trusted sites (NASA, ISRO, ePathshala, NCERT, DIKSHA, Khan Academy, PhET, Scratch, StoryWeaver and others), a no-phone "Try it yourself" activity, puzzles for the child's level, and "Did you enjoy this?".

Facts, links and role-model lines must be checked by a teacher before children use the site. Prefer Indian role models from small towns and villages.

## Class levels

Class 5 onwards. Every lesson has its own puzzles for each level, and every project is written per level:

- **Young Builder, Class 5 to 7:** the core puzzles (why the sky is blue, levers, loops in code). Class 5 gets simpler explanations.
- **Future Maker, Class 8 to 10:** real terms and reasons (why astronauts float, binary numbers, how vaccines work, photosynthesis).

## The guide: Mitthu

Mitthu (मिट्ठू) is one guide character shared across every path and world: a green parrot perched on a pencil. Almost every Indian child knows the name, and a talking parrot that asks questions back, in English and Hindi, fits a guide that teaches by asking. (Pip, the earlier paper plane, was too generic to stick.)

What makes Mitthu different from a chatbot:

- **Mitthu shows, not just tells.** Mitthu is powered by Claude with tool use. Each world exposes actions Mitthu can take (fly the plane to a place, change a simulation setting, highlight something, replay a step). When a kid asks a question, Mitthu answers *and* acts in the world.
- **Mitthu asks before it tells.** Ask "What do you think?" first, give a hint for each wrong guess, never hand over homework answers.
- **Class-aware and bilingual.** Answers match the child's class and language (English, Hindi, or a mix).
- **Follows the path.** Mitthu links each new puzzle to the dream the child chose. No personal data is collected, and for now nothing is saved between visits (memory comes later).
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

- `#home`: opens first. "What do you want to become?" with the twelve dream cards, plus "What you enjoy" once a child has loved a lesson.
- `#start`: after picking a path, choose your class (5 to 10).
- `#path`: the dream's own page: the journey of three lessons and a final project, what the work is like, signs it might be you, role model, India did it, where this leads.
- `#learn`: one lesson (see Dream paths), with Next lesson or the project at the end.
- `#ask`: ask Mitthu (English or Hindi) or tap an idea; puzzles play here, with **Show me!** animations.
- `#grown-ups`: About, for parents, teachers, partners and the Claude for Startups reviewers: the problem, what we built, how Mitthu uses Claude (flow plus an example `fly_to` tool call), why Claude, status and next steps, safety, contact.
- `#privacy`: privacy in plain words.

**No memory between visits (for now).** Language, class, path, solved puzzles and enjoyed lessons live in memory only; reloading starts fresh, and old saved keys are cleared on load. Memory will be added later.

**Animations:** 13 interactive animations made with Claude (`site/animations.js`): Moon phases, day and night, sky colour, float or sink, paint mixing, Newton's cannon (orbits), lever, binary bit cards, heartbeat, sound waves (with audio), plant growth, story builder, water cycle. Lessons show them with a "Made with Claude" tag.

Content: `site/paths.js` (paths and lessons), `site/worlds.js` (worlds, languages, Class 5 to 7 puzzles), `site/puzzles-future.js` (Class 8 to 10 puzzles), all `{ en, hi }`; interface text is the `UI` object in `site/app.js`. Drawings (Mitthu, icons) are an SVG sprite in `site/index.html`. Adding a path, lesson or puzzle needs only the content files. See `site/README.md`.

**Preview mode:** until Claude credits are available, Mitthu answers from 43 example puzzles (22 Class 5 to 7, 21 Class 8 to 10) matched by English and Hindi keywords. The site says so ("Preview"). Do not claim live Claude answers until `/api/pip` is connected.

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

1. Hub site with 12 dream paths, 36 lessons, 13 animations, Ask Mitthu puzzles, class-wise content for Class 5 to 10, English and Hindi, Indian connection, and a page for parents and teachers (preview mode, no API key).
2. Live on breakingthejargons.com via GitHub Pages.

Next, once Claude credits are available:

3. `/api/pip` serverless function with the safety system prompt; Mitthu answers any question in the child's language and level, and creates new puzzles for each path.
4. Mitthu "Ask" tab in Earth Explorer with one tool: `fly_to(wonder_id)`.
5. Story → level generator in Story Code Quest.
6. Memory between visits (saved progress and what the child enjoys), with a privacy update first.
6. More Indian languages; English Club and Bhasha Bridge.
7. **Animations on demand:** a child asks to see something and Claude writes a small interactive animation on the spot, run in a sandboxed iframe (scripts only, no access to the page, and a content security policy that blocks network requests). The hand-made animations show the target experience.

## Contact

Company email: info@breakingthejargons.com (shown on the parents and teachers page and in the footer).

## Why this matters

This is the product for the Claude for Startups application (claude.com/programs/startups). The application needs a website on the company domain, an email on that domain, and a short description. The key point for the application: Claude runs *inside* the product (Mitthu), helping close the gap for children who don't have good schools nearby, not only in how it was built.
