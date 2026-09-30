# Changelog

Plain-language log of meaningful changes. Newest first. Git has the details; this says *what* and *why*.

## 2026-09-29
- Scary Face Pancakes: Snapchat video label is now "Snapchat filter video".
- Scary Face Pancakes: new case-study copy from Pete's markdown; role "Creative Direction & Digital Strategy Lead"; search description written from the copy.
- Scary Face Pancakes: reordered (social media video, then Snapchat filter video), removed the phone slot, added 5 images (laptop, zoomable landing page, activity book, pumpkin cutout book, Snapchat filter). New `caption: ""` hides an item's label (used for the laptop).
- Scary Face Pancakes: two Vimeo videos embedded (the Scary Face video at the top; the Snapchat filter video in place of the empty Snapchat image slot).
- Covers for PTGL and Latte Lovers (23 of 25 Work tiles now have one; still missing: Cheesecake Stuffed French Toast, Fresh Market).
- Favicon: Pete's "pm" mark (favicon.ico 32px, 192px PNG, 180px Apple touch icon on white) replaces the placeholder.

## 2026-09-28
- Home: the NYC stock clip is replaced by Pete's 30-second work reel (4:5, 1080x1350 WebM/MP4, 720x900 MP4 for phones), centered crop. Same pause button and reduced-motion handling. NYC clip kept in MySite-originals.
- Cheesecake Stuffed French Toast: copy replaced with Pete's revised markdown; role now "Creative Direction & Strategy Lead".
- Fresh Market: homepage hero video moved above the homepage image; the Instagram story ad is now a GIF-style loop (720px square, ~0.6 MB, pause/play button, paused for reduced motion and off screen). New media `type: loop`.
- Fresh Market: new case-study copy from Pete's markdown; three Vimeo videos (drone film, homepage hero, Instagram story) and five images (homepage and What's New page zoomable, mobile, Instagram stickers, email at actual size). Empty "food photo spread" slot removed.
- Case-study text column: body 14px (was 15.2), section headings 16px (was 18), sub-headings 14px (was 15.2), table 12.6px (was 13.6).
- New per-image `actualSize: true`: shows an image at its real width instead of filling the column. Used for the SFT email (600px).
- Cheesecake Stuffed French Toast: new case-study copy from Pete's markdown ("Unwrapping the Unexpected"), search description and skills; 5 images added (ugly sweater, homepage and landing page as zoomable full pages, display ad, email). WebP metadata stripped; unused dark AHA logo moved to originals.

## 2026-09-27
- Tile logos switched off for now (`tileLogos: false` in site.ts): tiles show client names in text. The 8 trimmed logos and the equal-weight sizing are kept for later.
- Tile logos sized for equal visual weight: each gets roughly the same area (width = 21% of tile × √aspect), relative to the tile, so wide wordmarks and compact badges look balanced at every screen size.
- Images: 11 covers (3 Apps: Ben & Jerry's AR, Facebook Canvas, IHOP AR; new for AHA, Bausch + Lomb, IHOP Contest, Ecommerce, Menu Photoshoot; replaced gen.video, Double Dipped, Holiday), 8 client logos on tiles (trimmed; AHA pending a light version), and 21 Menu Photoshoot dishes (WebP, EXIF stripped) with labels. Privacy check now also covers WebP metadata.
- SFT Campaign: the "social posts" image is display-ad slides; label and description updated.
- Case studies: a small eyebrow-style label above each image and video (from its description, or an optional shorter `caption`), marked up as a figure caption.
- All Vimeo embeds: title, byline and avatar overlays hidden. New per-video `loop: true` option (silent autoplay loop, motion-safe); tried on the SFT unwrap animation and rolled back to click-to-play at Pete's request.
- SFT Campaign: first media slot is now the "unwrap" animation on Vimeo (246280134) instead of the gift-wrap image.
- Work covers: 16 tile images added (converted from PNG to JPEG, about 14 MB down to 1.6 MB; originals in MySite-originals/work-covers).
- Tiles: the photo zooms to 106% on hover or keyboard focus, inside a fixed frame. Off for reduced motion.

## 2026-09-26
- Tiles (Work, Apps, Illustration, and the grids under case studies): animate in, staggered, as they scroll into view. The tiles stay in place (a solid grid); inside each, the photo fades up from dark and settles from a slight zoom, then the client name rises in. Animate once; off for reduced motion; failsafe shows them if the script doesn't run.
- Fix: contact form was rejected as "reCaptcha (Pro)". hCaptcha's reCAPTCHA-compatibility field is now off (`recaptchacompat=off`) and stripped before sending.
- Fix: contact form showed an error on send. JavaScript submissions no longer include the no-JS `redirect` field (it made Web3Forms redirect, which the browser blocks) and are sent as JSON; errors now show Web3Forms' reason.
- Contact: form (name, email, message) via Web3Forms with hCaptcha and a honeypot; sends in place with accessible status messages; /thanks page for no-JavaScript. Connected to Pete's Web3Forms key. CSP opened only to hCaptcha and api.web3forms.com.
- Home (tablet/phone): nav links stack one per line instead of wrapping.
- Home: portrait replaced by a looping background video (NYC at night, stock): cropped, crossfaded to loop seamlessly, WebM 2 MB / MP4 3 MB, poster first frame. Pause/play button (WCAG 2.2.2); no autoplay for reduced motion or data saver; pause remembered per browser.
- Resume: Pete's portrait added; also added to structured data (Person.image).
- Checks: privacy check now covers videos (location data); audit fails files over 8 MB and raw .mov files.
- Comcast Business Enterprise: new case-study copy from drafts (role Creative Director, User Journey Scope, search description, skills).
- Comcast Business headline: "Small Business Design Leadership & Web Ecosystem Optimization".
- Added Claude routines: skills `/publish-drafts`, `/add-images`, `/release`, and a read-only `petemag-reviewer` agent.
- Added `npm run audit` (scripts/audit.mjs): titles, descriptions, h1s, alt text, links, JSON-LD, canonicals, AA contrast, accent use, local-only files. Runs in CI after the build.
- Fixed: auto meta descriptions had become "Role: …" on 27 pages (caught by the new audit); they now use the first real sentence.
- Case-study heading now mirrors the tile: eyebrow = tile subtitle (SMALL BUSINESS, PARADISE PANCAKES…), big title = client (Comcast Business, IHOP…). Role moved into the copy as a "Role:" line (above Core Domain on Comcast); browser/search titles unchanged. Added subtitles to 9 tiles that lacked one. Drafts gained an "Eyebrow:" line.
- Comcast Business tile: added "Small Business" subtitle, matching Enterprise and Mobile.
- Sticky, compacting header on every page with a header (Work, Apps, Illustration, Resume, Contact, case studies, 404); reading bar stays on case studies only.
- Tablet/phone (≤900px): hamburger menu. Circle reveal from the button, staggered large links, icon morphs to ✕; Esc closes; page behind is locked and inert. Plain links without JavaScript.
- Shortened three project titles to fit search results: Empire State Building Redesign & Concepts; U.S. Army C.O.R.E. OPS Website & App; Ben & Jerry's Website & Digital Activations.
- Page titles shortened to "{Page} — Peter Magulak" (was "— The Portfolio of Peter Magulak").
- Case-study pages: fixed header that compacts from 120px to 64px after 80px of scrolling, with a 3px orange reading-progress bar under it.
- Added a local-only `drafts/` folder: one pre-filled copy file per case study (28), plus a template and README. Set a file to `Status: ready` and ask Claude to publish. Included in the backup zip.
- Contact (and 404) centered with the same max width and columns as case studies.
- Added `src/content/work/_case-study-template.md`: the Comcast Business structure as the standard for all case studies.
- Case studies: role now sits above the title in an `<hgroup>` (with a hidden "Role:" label for screen readers and agents); layout capped at 1680px and centered on wide screens. Comcast: removed the Client / Brand line.
- Comcast Business case study: role now "Creative Director"; new structured copy (summary, skill matrix, initiatives, workflow) replacing the audit paraphrase. Case-study text now styles headings, lists, numbered steps and tables; text column widened to ~30%.
- Case studies can list `keywords` (fed into structured data and llms-full.txt); llms-full.txt now keeps list and table structure.
- Home tagline reduced from 16px to 14px.
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
