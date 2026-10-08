# Breaking the Jargons: site

Technology as an equaliser. Every child in India, Class 5 to 10, in a village or a city, picks one of twelve dreams (space scientist, doctor, engineer, computer engineer, artist, writer, farmer, teacher, pilot, nature scientist, musician, sportsperson) and follows a real path towards it with Mitthu, a parrot guide: lessons, animations, videos and links, activities, puzzles and a project. Each path shows an Indian who did it first and something India achieved, to motivate them. The site works in English and Hindi.

This is plain HTML, CSS and JavaScript with no build step and no API key needed. Mitthu currently answers from a set of example puzzles (preview mode). Live Claude answers come later.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
cd breaking-the-jargons/site
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Screens

One screen at a time, chosen by the URL hash:

- `#home`: opens first. "What do you want to become?" with twelve dream cards, plus "What you enjoy" once a lesson has been loved.
- `#start`: after a path is picked, choose your class (5 to 10).
- `#path`: the dream's page: a journey of three lessons and a final project, what the work is like, a day in the life, "this might be you if...", an Indian role model, "India did it", and where this leads (subjects, stream, route).
- `#learn`: one lesson: the big idea, an example from India, go deeper, an animation made with Claude, watch-and-explore links, a no-phone activity, check-yourself puzzles, and "Did you enjoy this?".
- `#ask`: ask Mitthu a question (English or Hindi) or pick an idea; puzzles play here. Some offer **Show me!**, which opens the matching animation.
- `#grown-ups`: About. The problem, what we built, how Mitthu uses Claude (step by step, with an example tool call), where we are and what's next, safety, and contact.
- `#privacy`: what is and isn't collected, in plain words.

## Class levels

- Young Builder: Class 5 to 7 (puzzles in `worlds.js`; Class 5 gets the simpler `young` explanation, Class 6 and 7 the `older` one)
- Future Maker: Class 8 to 10 (`puzzles-future.js`)

## Files

- `paths.js`: the twelve dream paths and their lessons (see below), in English (`en`) and Hindi (`hi`).
- `worlds.js`: worlds, languages and the Class 5 to 7 puzzles.
- `puzzles-future.js`: the Class 8 to 10 puzzles.
- `animations.js`: thirteen interactive animations made with Claude, and which puzzles they belong to. Each has a title, a hint and a `mount(host, tr)` function that returns a cleanup function.
- `app.js`: interface text in both languages (the `UI` object), screens, lessons, puzzles and progress.
- `index.html`: the page, plus the drawings (Mitthu, path icons, interface icons) as an SVG sprite.
- `styles.css`: the look. The design is a child's copybook: ruled paper, royal-blue ink, dream cards like stickers, and each path drawn as a numbered trail.
- `shikshak/` and `api/shikshak.js`: a web version of Shikshak AI (Hindi tutor) built on Claude. Not linked right now; it needs a Claude API key and a host that runs serverless functions.

## How a path works

A path has `title`, `dream`, `job`, `day` (3), `signs` (3), `hero`, `india`, `modules` (3 lessons), `project` (`young` and `future`) and `next` (`subjects`, `stream`, `route`).

A lesson (module) has `title`, `skill`, `big`, `example`, `deeper`, an optional `animation` id, `links` (`{kind: "watch" | "explore" | "read", title, url}`), `tryIt`, and `puzzles: { young: [...], future: [...] }`. Solving the child's level's puzzles earns the skill.

## How a puzzle works

Each puzzle has:

- `starter`: the question, and `keywords` (English and Hindi) to match typed questions.
- `level`: `future` (Class 5 to 7 puzzles leave it out).
- `think`: Mitthu's "what do you think?" question.
- `choices`: three, one with `correct: true`; every other choice has a `nudge` (Mitthu's hint).
- `explain` for Class 8 to 10 puzzles, or `young` and `older` for Class 5 to 7 puzzles.

## Hosting

Live at https://breakingthejargons.com, served by GitHub Pages. The workflow `.github/workflows/deploy-site.yml` copies `index.html`, `styles.css`, `app.js`, `worlds.js`, `paths.js`, `puzzles-future.js` and `animations.js` and deploys them on every push to `main` that touches this folder. It can also be run by hand from the Actions tab. `shikshak/`, `api/` and this README are not published.

One-time setup:

1. Repo **Settings → Pages**: Source **GitHub Actions**, Custom domain `breakingthejargons.com`.
2. DNS at the domain registrar: four `A` records for `@` (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and a `CNAME` record for `www` pointing to `parulnith.github.io`.
3. When the domain shows as verified, tick **Enforce HTTPS**.

## Memory

Nothing is saved between visits for now. Language, class, path, solved puzzles and enjoyed lessons are kept in memory while the page is open and reset on reload; old saved keys are cleared on load. Nothing is sent anywhere. Memory will be added later.

## Next, once Claude credits are available

- Replace the preview puzzle matcher with a `/api/pip` call so Mitthu can answer any question in the child's words and language, at their age level, and create new puzzles for each path.
- Add Mitthu tools inside the live worlds (for example `fly_to` in Earth Explorer).
- Animations on demand: when a child asks to see something, Claude writes a small interactive animation and the page runs it in a sandboxed iframe (`sandbox="allow-scripts"`, so it has no access to the page, plus a content security policy that blocks network requests).
- More Indian languages.
