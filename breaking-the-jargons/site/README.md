# Breaking the Jargons: site

Technology as an equaliser. Every child in India, Class 1 to 10, in a village or a city, picks a dream (space scientist, doctor, engineer, computer engineer, artist, writer) and follows a path of small steps with Pip. Each path shows an Indian who did it first and something India achieved, to motivate them. The site works in English and Hindi.

This is plain HTML, CSS and JavaScript with no build step and no API key needed. Pip currently answers from a set of example puzzles (preview mode). Live Claude answers come later.

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
- `#ask`: ask Pip a question (English or Hindi) or pick an idea; puzzles play here.
- `#grown-ups`: for parents and teachers, including how Pip uses Claude.

## Age levels

- Explanations: Class 1 to 4 get the simpler `young` text, Class 5 to 10 get `older`.
- At-home activities: Little Explorer (Class 1 to 3), Young Builder (Class 4 to 7), Future Maker (Class 8 to 10). They need no phone.

## Files

- `worlds.js`: all content, in English (`en`) and Hindi (`hi`): paths, worlds and puzzles. **To add a path or a puzzle, edit only this file.**
- `app.js`: interface text in both languages (the `UI` object), screens, puzzles, stars, badges and path progress.
- `index.html`, `styles.css`: the page and its look.
- `shikshak/` and `api/shikshak.js`: a web version of Shikshak AI (Hindi tutor) built on Claude. Not linked right now; it needs a Claude API key and a host that runs serverless functions.

## How a puzzle works

Each puzzle in `worlds.js` has:

- `starter`: the question, and `keywords` (English and Hindi) to match typed questions.
- `think`: Pip's "what do you think?" question.
- `choices`: one with `correct: true`; every other choice has a `nudge` (Pip's hint).
- `young` and `older`: the explanation for Class 1 to 4 and Class 5 to 10.

A path step lists puzzle ids. Solving all of them earns the step's skill. A step with no puzzles points to a world.

## Saved data

Language, class, chosen path and solved puzzles are stored in the browser's localStorage only. Nothing is sent anywhere.

## Next, once Claude credits are available

- Replace the preview puzzle matcher with a `/api/pip` call so Pip can answer any question in the child's words and language, at their age level, and create new puzzles for each path.
- Add Pip tools inside the live worlds (for example `fly_to` in Earth Explorer).
- More Indian languages.
