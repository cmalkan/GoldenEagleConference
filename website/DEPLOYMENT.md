# Website Deployment

This website is a Vite + React build and can be deployed using GitHub Pages or Netlify.

## Build locally

```bash
cd website
npm ci || npm install
npm run build
```

## Environment variables

Copy `.env.example` to `.env` for local testing and set the values you want to publish:

- `VITE_EVENTBRITE_URL`: Eventbrite registration page URL.
- `VITE_LUMA_URL`: Luma registration page URL.
- `VITE_EVENTBRITE_EVENT_ID`: Optional numeric Eventbrite Event ID for popup checkout widget.
- `VITE_BASE_PATH`: Optional subpath for static hosting.

## Base path support

The build supports custom subpath deployments using `VITE_BASE_PATH`.

```bash
VITE_BASE_PATH=/GoldenEagleConference/ npm run build
```

## GitHub Pages workflow

The workflow in `.github/workflows/deploy-website.yml` builds from `website/` and publishes `website/dist`.

## Netlify deployment

A root `netlify.toml` is included with:

- build base: `website`
- build command: `npm ci || npm install && npm run build`
- publish dir: `website/dist`
- SPA redirect to `/index.html`

In Netlify site settings, configure any needed `VITE_*` environment variables before deploying.
