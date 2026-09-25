# Decisions

Settled decisions, newest first. Add new ones at the top. To reverse a decision, add a new entry rather than deleting the old one.

### 2026-09-25: Style and design baseline (answers to open design questions)
- **Wordmark:** the script "Peter Magulak" logo is retired. For now the header uses the name in the display serif, bold and uppercase.
- **Fonts:** keep Playfair Display + PT Sans for now.
- **Color:** stay neutral (white, light grey, charcoal). The project imagery supplies the color.
- **Client logos:** come back as image files on the tiles (`logo.png` per project), falling back to text until they're added.
- **Tiles:** keep hover-only titles, as on the current site.
- **Click to zoom:** set per image with `zoom: true`, for long screenshots whose text would otherwise be unreadable.
- **Share button:** removed.
- **Project dates/era:** not shown, and the field was removed. Résumé dates stay.
- **Home:** will be redesigned. The original split layout is kept as `HomeSplit` so it can be switched back from `site.ts`.
- **Illustration:** the Lebowski and Johnny Cash pieces stay as they are.

### 2026-09-25: Page titles clarified where they were generic or duplicated
Migration is as-is, with one exception: the audit flagged titles that don't name the client or are duplicated ("Digital Redesign" ×2, "Augmented Reality App" ×2, "Website and Mobile App", "SFT Campaign"). The new titles name the client (for example "Bausch + Lomb Digital Redesign"). This helps SEO and clarity. To revert, edit `title:` in the content file.

### 2026-09-25: URLs stay flat, matching Squarespace
Detail pages live at the site root (`/paradise`), not under `/work/`. Existing links and search rankings carry over at cutover. Slugs not confirmed against the live site are marked `slugVerified: false`.

### 2026-09-25: Preview on github.io first, domain later
The site deploys to `peteweejp.github.io/petemag/` with `noindex` while Squarespace stays live on petemag.com. Cutover steps are in `seo.md`.

### 2026-09-25: Contact is email + LinkedIn, no form
GitHub Pages can't process forms, and Pete chose not to add a third-party form service. The Contact page links to pete@petemag.com and LinkedIn.

### 2026-09-25: Migrate as-is first, redesign second
Rebuild the current structure (Work / Apps / Illustration, same pages and order) before curating or recategorizing. Curation ideas from the audit are parked, not rejected.

### 2026-09-25: Visual direction to be chosen from mockups
Pete wants to see 2–3 directions before committing. Until then, `tokens.css` approximates the current site, with the baseline choices above. See `design/README.md`.

### 2026-09-25: Astro, hosted on GitHub Pages
Content as markdown files (one per project), static HTML output for SEO, free hosting, no server. React components can be added later for interactive pieces if needed.
