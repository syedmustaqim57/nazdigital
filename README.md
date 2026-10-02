# Naz Digital website

Static site (HTML, CSS, vanilla JS). No build step.

## Deploy to GitHub Pages
1. Push this folder's contents to a GitHub repo.
2. Settings > Pages > Deploy from branch > `main` / root.
3. Custom domain (naz.tech): add it under Pages and create the DNS records GitHub lists.

All paths are relative, so it works from a repo subpath too.

## Before you launch
- Replace social `href="#"` links in `index.html` (footer).
- Update the `og:url` and canonical URL if the domain changes. Add an `og:image` (1200x630) at `assets/images/og.jpg`.
- Portfolio cards are labelled "Sample project". Swap in real work when you have it.
- Contact form: it opens the visitor's email app (mailto). To use Formspree, set the form's `action` to your Formspree URL and remove the `data-mailto` attribute.
