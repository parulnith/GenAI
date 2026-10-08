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

## Pages

- `/` the hub: world cards and grade picker.
- `/shikshak/` Shikshak AI, a web version of the Hindi tutor. Visitors add up to 5 photos of a lesson and get line-by-line translations, a synopsis, difficult words, text-to-speech and a Study Buddy chat.

## Hosting

The hub and the Shikshak page are static files: `index.html`, `styles.css`, `app.js`, `shikshak/`. Any static host works, and you can connect your own domain to it.

Shikshak's photo analysis and chat also need `api/shikshak.js` running on a server, because the Claude API key must stay off the browser. A static-only host can't run that file, so Shikshak needs a host that runs serverless functions (for example Vercel, Netlify or Cloudflare). The function reads one environment variable:

- `ANTHROPIC_API_KEY`: your Claude API key. It is read only on the server and is never sent to the browser.

## Serverless API

`api/shikshak.js` handles two actions, both through `POST /api/shikshak`:

- `analyse`: takes page images and the grade, and returns the lesson as JSON. Uses Claude Haiku 5.5 with vision.
- `chat`: takes the lesson and the conversation so far, and returns the Study Buddy's reply.

It rate-limits each visitor to 30 requests an hour. The limit is kept in memory per server instance, so it resets on redeploy and isn't shared between instances. Move it to a shared store before wider sharing.

## What is not here yet

- Pip, the Claude-backed guide on the hub. Milestone 2 in the brief: a general `/api/pip` with tools for the worlds. Pip is a static illustration until then.
- Earth Explorer and Story Code Quest are linked from the hub, not built into it.
