# petemag.com

Source for [petemag.com](https://petemag.com), the portfolio of Peter Magulak. Built with [Astro](https://astro.build), hosted on GitHub Pages.

- **Edit a project:** `src/content/work/<slug>.md` (or `apps/`, `illustration/`)
- **Add images:** `public/images/<section>/<slug>/`
- **Change site-wide info:** `src/data/site.ts`
- **Map of everything:** [`CLAUDE.md`](CLAUDE.md)

## Run locally

```
npm install
npm run dev
```

Then open http://localhost:4321/petemag/

## Deploy

Push to `main`. GitHub Actions builds the site and publishes it to https://peteweejp.github.io/petemag/.

One-time setup: in the GitHub repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
