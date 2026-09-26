# Changelog

Plain-language log of meaningful changes. Newest first. Git has the details; this says *what* and *why*.

## 2026-09-26
- Motion: nav hover bar now grows outward from the center; page text fades up in a staggered sequence on load (home, case studies, resume, contact). CSS only; off for reduced-motion users.
- Nav hover: orange (#F9700E) bar under the link, text turns charcoal. Orange kept off text for AA contrast.
- Home: equal spacing between "Creative Director", the name and the tagline (one `--home-stack` token, leading trimmed with `text-box`).
- Home: role line now reads "Creative Director" and sits above the name.
- Navigation now Inter Bold (700) to stand out more; home tagline ("Idea guy. User Experience…") now Inter 400 instead of Archivo Black. Inter 500 no longer loaded.
- Body font changed from PT Sans to Inter (400); navigation now Inter Medium (500) at 14px, up from 12px. Contrast re-checked: every text/background pair passes WCAG AA.
- Display font changed from Playfair Display to Archivo Black (400) for all headings, the home name and tagline, tile labels and the wordmark. Fake bold disabled site-wide.
- Home: swapped the portrait for the beanie photo (converted from PNG to JPEG, 1.4 MB → 268 KB).
- Home: added Pete's portrait (`public/images/home/portrait.jpg`) with descriptive alt text; crop anchored on the face.
- Deploy: moved to `upload-pages-artifact` v5.0.0 and `deploy-pages` v5.0.1, which pin their own internal actions, as required by the repo's new "require SHA pinning" setting.
- Security: commits now use a private GitHub noreply email; deploy actions pinned to exact versions; Dependabot added; build blocks photos with GPS location data. Guide: backup/restore and new-Mac setup (section 6), fine-grained token renewal steps. Cutover checklist: domain verification and registrar lock.
- Expanded `.gitignore` (logs, env files, editor clutter). Planning docs are now kept on Pete's Mac only, not on GitHub.
- Guide: how to check, stop and troubleshoot the local preview (Astro 7 can run it in the background); fix for `ERR_CONNECTION_REFUSED`.
- Code review and cleanup (see decisions.md, "Code review hardening"):
  - **Security:** Content Security Policy on every page; stricter content validation (no `javascript:` links, no image paths outside `images/`); external links use `noreferrer`; deploys use `npm ci` and a type check.
  - **Fixed:** internal links and canonical URLs disagreed (every click caused a redirect); the home canonical; broken `og:image` when an image wasn't added yet; every case study sharing the same meta description; tile backgrounds all downloading at once (now lazy-loaded images); images without dimensions causing the page to jump while loading; the lightbox's invalid empty image tag.
  - **Accessibility:** skip-to-content link, visible keyboard focus, darker grey text and tile overlay for contrast, reduced-motion support, tile links now announce the project title, "current page" nav state.
  - **Humans and AI agents:** added `llms.txt`, `llms-full.txt`, `robots.txt`, schema.org structured data, section headings on grids, and trailing-slash forwarding for old links.
  - Kept the Astro 7 upgrade and added the `check` tooling.
- Added `docs/how-to-edit.md`, a step-by-step guide to adding images, editing copy, fonts/colors, previewing and publishing. Linked from README, docs index and CLAUDE.md.
- First deploy to GitHub Pages: https://peteweejp.github.io/petemag/

## 2026-09-25
- Applied the design baseline decisions: plain-text wordmark, client-logo slots on tiles, per-image click to zoom (lightbox), era field removed, no share button.
- Moved the original home into a switchable variant (`HomeSplit`) ahead of the home redesign.
- Scaffolded the Astro project: layouts, tile grid, case-study template, Home, Resume, Contact, 404.
- Migrated all 32 pages from the Squarespace audit into markdown (25 Work, 3 Apps, 4 Illustration), with image checklists and TODOs where the original copy was unreadable.
- Added the GitHub Pages deploy workflow (preview at peteweejp.github.io/petemag, set to noindex).
- Created docs: decisions, brand voice (skeleton), SEO, design.
