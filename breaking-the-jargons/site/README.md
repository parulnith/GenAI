# Breaking the Jargons: site

A learning site for children in India, Class 1 to 10, from big cities to villages. Children pick a dream (space scientist, doctor, engineer, computer engineer, artist, writer), follow a path of puzzles with Pip, and earn stars, badges and skills.

This is plain HTML, CSS and JavaScript with no build step and no API key needed. Pip currently answers from a set of example puzzles (preview mode). Live Claude answers come later.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
cd breaking-the-jargons/site
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Files

- `index.html`: the page. Sections: hero and class picker, dream paths, Ask Pip, interests, worlds, languages, how it works, for grown-ups, built with Claude.
- `worlds.js`: all the content. Dream paths, worlds, interests, languages and puzzles live here. **To add a subject, a path or a puzzle, edit only this file.**
- `app.js`: renders everything from `worlds.js` and runs the puzzle conversation, stars, badges and path progress.
- `styles.css`: the look.
- `shikshak/` and `api/shikshak.js`: a web version of Shikshak AI (Hindi tutor) built on Claude. Not linked from the site right now. It needs a Claude API key and a host that runs serverless functions.

## How a puzzle works

Each puzzle in `worlds.js` has:

- `starter`: the question a child might ask, and `keywords` to match typed questions.
- `think`: Pip's "what do you think?" question.
- `choices`: one with `correct: true`; every other choice has a `nudge` (the hint Pip gives).
- `young` and `older`: the explanation for Class 1 to 4 and Class 5 to 10.
- `action`: what Pip will do inside the world when it's live.

A dream path step lists puzzle ids. Solving all of a step's puzzles earns its skill. A step with no puzzles points to a world instead.

## Saved data

Class, interests, chosen path and solved puzzles are stored in the browser's localStorage only. Nothing is sent anywhere.

## Hosting

The site is static files, so any static host works, and you can connect your own domain to it.

## Next, once Claude credits are available

- Replace the preview puzzle matcher with a `/api/pip` call so Pip can answer any question, in the child's words and language, and generate new puzzles for each path.
- Add Pip tools inside the live worlds (for example `fly_to` in Earth Explorer).
- English Club and Bhasha Bridge (translation), using Claude's support for Indian languages.
