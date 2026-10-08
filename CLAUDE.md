# Project brief: kids' learning platform (working name: Breaking the Jargons)

## Vision

A self-study platform for kids from grade 1 to grade 10 that makes every subject easy to understand through interactive "worlds" (simulations, games, 3D exploration) instead of textbook jargon. Think Brilliant.org, but for school-age kids learning on their own.

It is being built first for my son, who is the first tester, and then shared with other families and schools. Design everything so new subjects can be added without rebuilding the site.

## The guide: Pip

Pip is one named guide character shared across every world (working concept: a small paper plane with eyes that can fold into different shapes per subject).

What makes Pip different from a chatbot:

- **Pip shows, not just tells.** Pip is powered by Claude with tool use. Each world exposes actions Pip can take (fly the plane to a place, change a simulation setting, highlight something, replay a step). When a kid asks a question, Pip answers out loud *and* acts in the world.
- **Pip asks before it tells.** For self-learners: ask "What do you think will happen?" first, give hints when stuck, never hand over homework answers.
- **Grade-aware.** A grade setting (1–10) changes vocabulary and depth for every answer.
- **Remembers the journey.** Pip links new things to places/topics the child has already explored. Progress is stored in the browser (localStorage); no personal data collected in v1.
- **A learning guide, not a friend replacement.** Warm and encouraging, always focused on learning, nudges kids to share discoveries with parents and teachers.

## Worlds (existing projects to bring in)

| World | Existing repo | Live | Pip features |
|---|---|---|---|
| Geography | github.com/parulnith/earth-explorer (single-file CesiumJS game, GitHub Pages) | parulnith.github.io/earth-explorer | "Ask" tab next to Facts/Quiz in the explore panel; reuse existing `listen()` (speech in) and `say()` (speech out); tools: fly to a wonder, switch camera view. Later: Spanish practice on landing in Madrid. |
| Coding | github.com/parulnith/story-code-quest (React + TS + Vite, canvas grid) | story-code-quest.vercel.app | **Story → level generator**: kid names any story, Pip generates a new level in the existing `Level` format (`src/game/levels.ts`, `src/game/types.ts`); validate it is solvable before showing. **Debugging buddy**: on failure, replay and pause on the step that went wrong with a hint question. |
| Science | github.com/parulnith/GenAI (browser experiments and simulations) | — | "What if" questions change simulation parameters; predict-then-see loop. |
| History (later) | — | — | Meet a character from a place and time, voiced by Pip-powered Claude, clearly framed as a story. |

## Architecture

- **Site:** one hub site (landing page + world picker + grade setting) that links to or embeds each world. Keep each world as its own app; the hub shouldn't force a rewrite.
- **Hosting:** Vercel (story-code-quest is already there). Custom domain to be connected once registered.
- **Claude API:** never put the API key in browser code. Add a small serverless function (e.g. Vercel function `/api/pip`) that:
  - holds `ANTHROPIC_API_KEY` as an environment variable,
  - adds Pip's system prompt (grade level, current world, current place/level context, kid-safety rules),
  - defines the world's tools and returns Claude's text + tool calls to the page,
  - rate-limits per visitor.
- **Model:** a fast, low-cost model (e.g. Claude Haiku) for Pip's answers; check current model names in the Claude docs.
- **Kid safety (in the system prompt and the function):** short answers (2–3 sentences, read aloud), age-appropriate language, stay on the current world's topic and gently redirect anything else, no collection of personal info, encourage involving a parent or teacher.

## First milestone (build this first)

1. Hub landing page for the domain: name, one-line promise, Pip, three world cards (Geography, Coding, Science "coming soon"), grade picker.
2. `/api/pip` serverless function with the safety system prompt.
3. Pip "Ask" tab in Earth Explorer with one tool: `fly_to(wonder_id)`, so "Take me somewhere really cold" or "Show me the oldest wonder" flies the plane there while Pip explains.
4. Deploy, then connect the custom domain.

Next: story → level generator in Story Code Quest.

## Why this matters

This is the product for the Claude for Startups application (claude.com/programs/startups). The application needs a website on the company domain, an email on that domain, and a short description. The key point for the application: Claude runs *inside* the product (Pip), not only in how it was built.
