# Breaking the Jargons: site

Technology as an equaliser. Every child in India, Class 1 to 10, in a village or a city, picks a dream (space scientist, doctor, engineer, computer engineer, artist, writer) and follows a path of small steps with Mitthu, a parrot guide. Each path shows an Indian who did it first and something India achieved, to motivate them. The site works in English and Hindi.

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

- `#start`: first visit. Choose English or Hindi, then your class.
- `#home`: "What do you want to become?" with the six dream cards.
- `#path`: the chosen dream's own page: the steps, the next puzzle to do, skills earned, an Indian role model, a "Try this at home" activity for the child's age, and an "India did it" fact.
- `#ask`: ask Mitthu a question (English or Hindi) or pick an idea; puzzles play here.
- `#grown-ups`: for parents and teachers, including how Mitthu uses Claude.

## Class levels

Every path step has different puzzles for each level, and every path has a no-phone "Try this at home" activity per level:

- Little Explorer: Class 1 to 3 (`puzzles-little.js`)
- Young Builder: Class 4 to 7 (puzzles in `worlds.js`; Class 4 gets the simpler `young` explanation, Class 5 to 7 the `older` one)
- Future Maker: Class 8 to 10 (`puzzles-future.js`)

## Files

- `worlds.js`: paths, worlds and the Class 4 to 7 puzzles, all in English (`en`) and Hindi (`hi`).
- `puzzles-little.js`, `puzzles-future.js`: the Class 1 to 3 and Class 8 to 10 puzzles.
- `app.js`: interface text in both languages (the `UI` object), screens, puzzles, stars, badges and path progress.
- `index.html`: the page, plus the drawings (Mitthu, path icons, interface icons) as an SVG sprite.
- `styles.css`: the look. The design is a child's copybook: ruled paper, royal-blue ink, dream cards like stickers, and each path drawn as a numbered trail.
- `shikshak/` and `api/shikshak.js`: a web version of Shikshak AI (Hindi tutor) built on Claude. Not linked right now; it needs a Claude API key and a host that runs serverless functions.

## How a puzzle works

Each puzzle has:

- `starter`: the question, and `keywords` (English and Hindi) to match typed questions.
- `level`: `little` or `future` (Class 4 to 7 puzzles leave it out).
- `think`: Mitthu's "what do you think?" question.
- `choices`: three, one with `correct: true`; every other choice has a `nudge` (Mitthu's hint).
- `explain` for Class 1 to 3 and 8 to 10 puzzles, or `young` and `older` for Class 4 to 7 puzzles.

A path step lists puzzle ids per level: `{ little: [...], young: [...], future: [...] }`. Solving the child's level's puzzles earns the step's skill. A step with no puzzles points to a world.

## Saved data

Language, class, chosen path and solved puzzles are stored in the browser's localStorage only. Nothing is sent anywhere.

## Next, once Claude credits are available

- Replace the preview puzzle matcher with a `/api/pip` call so Mitthu can answer any question in the child's words and language, at their age level, and create new puzzles for each path.
- Add Mitthu tools inside the live worlds (for example `fly_to` in Earth Explorer).
- More Indian languages.
