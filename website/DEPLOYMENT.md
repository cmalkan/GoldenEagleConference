# Website Deployment

This website is a Vite + React build and can be deployed using GitHub Pages or Netlify.

## Build locally

```bash
cd website
npm ci || npm install
npm run build
```

## Base path support

The build supports custom subpath deployments using `VITE_BASE_PATH`.

```bash
VITE_BASE_PATH=/GoldenEagleConference/ npm run build
```

## GitHub Pages workflow

The workflow in `.github/workflows/deploy-website.yml` builds from `website/` and publishes `website/dist`.
