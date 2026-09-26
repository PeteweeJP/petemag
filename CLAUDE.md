# petemag.com rebuild

Portfolio site for Peter Magulak (Creative Director, Experience Design). Rebuilding the Squarespace site at petemag.com as a static **Astro** site deployed to **GitHub Pages** from `github.com/PeteweeJP/petemag`.

**Status:** scaffold stage. The current site is migrated as-is; the visual design direction isn't chosen yet. See `docs/decisions.md` for what's settled and `CHANGELOG.md` for what changed.

## Where things are

| If the task is about… | Go to |
|---|---|
| How Pete edits images, copy, fonts and publishes (his reference guide) | `docs/how-to-edit.md`. Keep it current when workflows change |
| What the old site looked like / what's on each page | `docs/reference/petemag-site-overview.md` (source of truth for migrated content) |
| Why something was decided | `docs/decisions.md` |
| Tone of copy | `docs/brand-voice.md` |
| Titles, meta descriptions, URLs, domain cutover | `docs/seo.md` |
| Visual direction, fonts, colors | `docs/design/README.md`, then `src/styles/tokens.css` |
| Editing a case study's text, role, links or image list | `src/content/<work\|apps\|illustration>/<slug>.md` |
| Content fields (frontmatter schema) | `src/content.config.ts`, explained in `src/content/README.md` |
| Adding image files | `public/images/<section>/<slug>/` (see `public/images/README.md`) |
| Name, tagline, nav, email, LinkedIn, indexing on/off | `src/data/site.ts` |
| Home page (switchable designs) | `src/components/home/` (see its README); pick one in `src/data/site.ts` → `home` |
| Resume page | `src/pages/resume.md` |
| Contact page | `src/pages/contact.astro` |
| Page structure / markup | `src/pages/`, `src/layouts/`, `src/components/` (see `src/README.md`) |
| Styles | `src/styles/tokens.css` (values), `src/styles/global.css` (layout) |
| Build/deploy, URL format, security policy (CSP) | `astro.config.mjs`, `.github/workflows/deploy.yml` |
| What search engines and AI agents see (meta, JSON-LD, robots.txt, llms.txt) | `docs/seo.md`; code in `src/lib/schema.ts`, `src/lib/llms.ts`, `src/pages/*.txt.ts` |

## Conventions

- **Planning docs are local-only** (in `.gitignore`): `docs/reference/`, `docs/design/`, `docs/decisions.md`, `docs/brand-voice.md`, `docs/seo.md`. Read and update them as usual, but they won't appear in commits or on GitHub. Never `git add -f` them.
- **Case-study format:** Pete wants every case study in the Comcast Business format. When he sends new copy, structure it from `src/content/work/_case-study-template.md` (headline, Executive Summary, Skill Matrix table, Key Initiatives, Workflow steps). Role goes in frontmatter (it shows above the title, never repeated in the body). Any JSON-LD he pastes goes into `seoDescription` + `keywords`, not onto the page. Keep his wording and only fix grammar. Say what you changed.
- **Content lives in markdown, not components.** Never hard-code project copy in `.astro` files.
- **URLs are flat** (`/paradise`, not `/work/paradise`) to match live Squarespace URLs. The file name is the slug. Don't rename a content file without updating `docs/seo.md`.
- **Always link through `url()`** from `src/lib/url.ts`. The site runs under `/petemag/` during preview, and hard-coded `/` links will break. Use `pagePath(Astro.url)` for the current page's clean path.
- **Security policy (CSP):** every page only loads scripts, styles, fonts, frames and images from sources listed in `astro.config.mjs` → `security.csp`. Adding a third-party embed or font service means adding its domain there, or it will silently fail on the live site (the CSP isn't enforced in `npm run dev`; test with `npm run build && npm run preview`). Don't use inline `style="…"` attributes or `is:inline` scripts; the CSP blocks them. (The JSON-LD `<script type="application/ld+json">` in `BaseLayout` is data, not code, and is the one allowed exception.)
- **Security setup:**
  - Commits in this repo are signed as `Peter Magulak <268468626+PeteweeJP@users.noreply.github.com>` (repo-local git config) so no personal email or Mac name leaks. Don't change it.
  - GitHub Actions are pinned to commit SHAs (version in a comment); Dependabot proposes updates. Keep them pinned.
  - `src/integrations/image-privacy.mjs` fails the build if a JPEG has GPS data.
  - `src/integrations/csp-guard.mjs` fails the build if any page has an inline `style=""` attribute (markdown table alignment `| :--- |` is the usual cause).
  - Pushing uses Pete's fine-grained token (petemag repo only) from macOS Keychain. If a push fails on authentication, don't retry in a loop: have Pete follow "Renewing the token" in `docs/how-to-edit.md`.
- **Content is validated** by `src/content.config.ts`: links must be http(s), image paths must start with `images/`, Vimeo IDs must be numbers. Keep those rules when editing the schema.
- **Change styles through tokens** in `tokens.css` first. Add new CSS to `global.css` only for new layouts.
- Unknown or unreadable copy is marked `<!-- TODO … -->` in content files. Don't invent facts; ask Pete.
- After meaningful changes, add a line to `CHANGELOG.md`. Record decisions in `docs/decisions.md`.
- Every folder with a `README.md` explains itself. Keep those short and current when you change the folder.

## Commands

Requires Node 22.12+ (Pete's Mac has Node 24 at /usr/local/bin).

```
npm install      # first time only
npm run dev      # local preview at http://localhost:4321/petemag (Astro 7 may detach it to the background;
                 # manage with `npx astro dev status | stop | logs`)
npm run build    # production build into dist/
npm run check    # type and content check (CI runs this before every deploy)
```

Don't delete `.astro/` while the dev server is running: it holds the content cache and the server's status file, so pages 404 and `astro dev status` loses track. If you must, restart the server afterwards (`kill` its pid, then `npm run dev`).

Pushing to `main` builds and deploys automatically via GitHub Actions.
