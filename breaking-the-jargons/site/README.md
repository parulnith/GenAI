# Breaking the Jargons: hub site

The landing page for the platform: the name, the one-line promise, Pip, the world cards (Geography, Coding, Shikshak AI, Science coming soon) and the grade picker.

This is plain HTML, CSS and JavaScript with no build step.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
cd breaking-the-jargons/site
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy on Vercel

Import the repo in Vercel and set **Root Directory** to `breaking-the-jargons/site`. There is no build command and no output directory.

## What is not here yet

- `/api/pip` (the Claude-backed guide). Milestone 2 in the brief. Pip is a static illustration until then.
- Shikshak AI has no public link yet. Its repo is private, so the card shows a badge instead of a button.
