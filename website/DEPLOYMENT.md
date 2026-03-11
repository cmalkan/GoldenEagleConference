# Website Deployment

This website is a static site and can be deployed directly from the `website/` folder.

## Local preview

```bash
cd website
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

## Netlify deployment

A root `netlify.toml` is included and publishes the `website/` directory directly.

- No Node build step is required.
- SPA fallback redirect is included for route handling.

## Registration links

The homepage includes:

- Eventbrite registration button
- Luma registration button
- Eventbrite checkout button (currently points to Eventbrite registration page)
- Agenda copy button
