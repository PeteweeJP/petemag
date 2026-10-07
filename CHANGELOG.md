# Changelog

Plain-language log of meaningful changes. Newest first. Git has the details; this says *what* and *why*.

## 2026-10-05
- Comcast Business Public Sector: tile photo from Pete's U.S. Capitol cover image. Every tile now has a photo.
- IHOP Fresh Market: tile photo from Pete's strawberry cover image.
- Expo TV tile label now "Expo TV" (matches the page eyebrow). IHOP Cheesecake Stuffed French Toast: tile photo from Pete's new cover image.
- Case-study headings: the eyebrow is now the client (e.g. COMCAST BUSINESS) and the big title is the project headline (e.g. "Public Sector Web Redesign & Lead Generation Funnel Strategy"), so every page has a unique, descriptive h1. Headlines approved by Pete (client name dropped, ~60 characters max; new AR headlines so IHOP and Ben & Jerry's don't share one); moved from the copy to a new `headline` field. Expo's client is now "Expo TV". Title size 22–30px. Template, drafts, publish-drafts skill, CLAUDE.md, content README and decisions updated.
- The Landing Page screenshot moved from Comcast Business Mobile to Comcast Business (Small Business), right under SB Homepage; both pages' images renumbered.
- 404 links: fixed a stray underline under the orange hover bar (the links weren't picking up the nav's no-underline rule).
- 404 page redesigned: case-study-style "Page Not Found" heading with a short explanation, the main sections as large links (orange hover bar like the nav) and the Work tiles below. Squarespace's /landing and /prints-flatiron pages were not moved over and now land here.
- Names aligned: Contest title "IHOP Eat Up Every Moment Contest" (was "My IHOP Moment Contest Campaign"); tile lines "Menu Photography" (was "Menu Photoshoot") and "UX & E-Commerce" for Xfinity Mobile (was "Product Launches").
- Speed: images now come in phone/tablet sizes (640/960/1200px WebP copies made at build; desktop and zoom still get the originals); the first image on each case study loads immediately; videos are click-to-play stills (the ~1 MB player loads only when pressed); fonts are served from the site instead of Google (CSP tightened). Holiday's square Pancakes video gets a square frame.
- Cleanup: removed 8 empty "Website" links, 26 references to logo files that don't exist (tiles keep their text names), and an unused style. All page addresses marked verified.
- Image labels: all 230 in Title Case; short labels added to the Ben & Jerry's AR and Facebook Canvas videos. Search descriptions: three brought into the 140–160 range; added for the four illustration galleries. Skills added for Fresh Market, Scary Face and the illustration galleries (from each page's own Core Domain).
- 18 Squarespace case-study addresses (e.g. /ddft, /euem, /aha) now forward to the new descriptive addresses, so old links and search results keep working after the domain switch. Listed in docs/seo.md.
- Comcast Business Global Design System: tile photo cropped from the primary-button-on-gradient spec.
- Comcast Business (Small Business): "SB Homepage" (Internet for Small Business page) added as the first image; the other three move down one.
- Comcast Business (Small Business): three screens replace the five empty slots: Wireless Connect desktop, Wireless Connect mobile (a 10,000px-tall phone screenshot split into four side-by-side columns) and Dedicated Internet. Enterprise: Business Internet (06), Unified Communications (07) and Sports & Entertainment (09) replaced with Pete's updated screens. Originals and replaced files in MySite-originals/2026-10-05-images.
- Tiles: the screen-reader link name no longer repeats the client when the title already includes it (was "IHOP Ecommerce Redesign (IHOP)").
- Page titles made consistent: every IHOP case study now starts with "IHOP" (e.g. "IHOP Paradise Pancakes Campaign"), "Scary Face Pancake" → "Pancakes" to match its copy, Cheesecake Stuffed French Toast drops "Campaign" to stay within 60 characters, and "Comcast Business" → "Comcast Business Small Business" to match its siblings. URLs unchanged.
- Case-study copy made consistent across all 30 pages: section headings unnumbered and identical (Executive Summary, Technical & Professional Scope, Key Initiatives & Strategic Impact, Workflows & Governance); initiatives lettered A/B/C; table row labels unified; "IHOP —"-style dashes dropped from headlines; curly apostrophes made straight; "UI/UX" → "UX/UI", "Twitter/X" → "Twitter". Template, CLAUDE.md and content README updated.
- Roles trimmed to their short form on 11 case studies (the parenthetical skill lists stay in each page's Role & Focus table row).
- Pete's case-study copy on the last seven pages with audit placeholders: Expo TV, Latte Lover's, Paradise, IHOP Contest (Eat Up Every Moment), Menu Photography, Ben & Jerry's and Xfinity Mobile (first copy and role). Roles updated to match; search descriptions and skills added; drafts marked published.
- Illustration: tile photos for Lebowski, Marvel, Misc and Movie Posters, each a side-by-side strip of that gallery's posters.

## 2026-10-04
- ExpoTV: nine images (homepage, three promo banners, P&G ad, logo construction and three color variants). IHOP Contest: the three contest phases (enter, voting closed, winners).
- Ben & Jerry's: four games (Flipped Out, Pint Defenders, board designer, Perfect Mooove). Latte Lover's: homepage, landing page, mobile, banner ads and a hearts social-ad loop; "combo module" and "email" placeholders removed (no files). Paradise: 10 images (mockups, homepage, landing page, three heroes, Breakfastarian page, two Snapchat filters) and two GIF loops. Originals in MySite-originals/2026-10-04-images.
- Videos: Latte Lover's web video (Vimeo 241584180) at the top of its page; Paradise Pancakes Facebook Live (196482789) fills the empty video slot; Sprinkle Mountain (225452359) on Bakery Favorites, between the Cupcake Pancakes and Red Velvet how-to videos.
- gen.video, RFL Rebranding and U.S. Army C.O.R.E. OPS: Pete's case-study copy (roles updated to match), search descriptions and skills, and their images (gen.video 3, RFL 6, Army 11). Illustration galleries (Lebowski, Marvel, Misc, Movie Posters): all 13 posters. Xfinity Mobile: Homepage refresh concept C. Originals in MySite-originals/2026-10-04-images.
- Case-study copy links are orange: new `--color-accent-text` (#BA5000), the brand orange darkened to pass AA (4.67:1; #F9700E is only 2.69:1 as text). Charcoal on hover. Added to the audit's contrast checks.
- IHOP Ecommerce Redesign: "new menu photography" (Key Initiatives) links to the IHOP Menu Photoshoot case study.
- IHOP Ecommerce Redesign: copy updated to Pete's v2 (fewer agile references; new menu photography called out).
- IHOP Ecommerce Redesign: Pete's case-study copy replaces the audit paraphrase (role unchanged), plus search description and skills; draft marked published.
- IHOP Ecommerce: renamed "IHOP Ecommerce Redesign" (tile line "Ecommerce Redesign"; URL unchanged); nine images (menu, upsell, checkout steps, mobile, locator, gift cards); the separate footer placeholder removed (the full checkout image includes it). Originals in MySite-originals/2026-10-04-images.
- Empire State Building: "Roles:" label changed to "Role:" to match the other case studies.
- Docs: images README and how-to-edit now cover YouTube videos, video `aspect`, and GIF-style loops in project folders.
- Bakery Favorites: responsive mockup, homepage, landing page, three chalkboard heroes, Snapchat filter, and the Cupcake Pancakes GIF as a loop; the "pancake photo collage" and "Snap Away!" placeholders removed (no files). Originals in MySite-originals/2026-10-04-images.
- eBay Times Square: Pete's case-study copy (role "Sole Lead Designer (UX, Visual Design, Art Direction)"), search description and skills; the billboard video from YouTube (CtZolktCplc, 4:3); five images (microsite homepage, press room, three billboard sequences).
- Media: videos can now come from YouTube (`youtube:` ID, played from the privacy-enhanced youtube-nocookie.com, added to the CSP) and take an `aspect` of 16:9, 4:3 or 1:1.
- Bausch + Lomb: five pitch designs (homepage, two hero variants, product search, ReNu brand page). PTGL: homepage, featured articles and Strat.e.golf dashboard; the tournament and scorecard placeholders removed (no files).
- American Heart Association: three site designs (Go Red for Women, Start, Choose to Move). Holiday Celebrations: homepage and device mockups, 'Twas the Night Before Breakfast page, and three animated characters (pancake, bacon, sausage) as GIF-style loops; the "video still" and "Snapchat filter" placeholders removed (no files). Double Dipped: responsive mockup, homepage, three daypart heroes, and the Only at IHOP and skyline animations as loops. Originals in MySite-originals/2026-10-04-images.
- New case-study copy from Pete's markdown files on 9 pages: Bakery Favorites, Holiday Celebrations, IHOP AR, IHOP Facebook Canvas, Ben & Jerry's AR, American Heart Association, Double Dipped, PTGL and Bausch + Lomb. Roles updated to match the copy; search descriptions and skills added; drafts updated and marked published. Source files moved out of public/ to MySite-originals/2026-10-04-images/copy-md.
- Bakery Favorites: two how-to videos (Vimeo 195997589, 195997601) at the top. Holiday Celebrations: Facebook Live (196463858) and a social video (195997948).
- IHOP AR: 12 images (table tent, storyboard sketches, game screens, IHOP Play landing page) plus the lemon and onion-ring loaders as GIF-style loops with pause buttons. Xfinity Mobile: 8 images (custom case builder first, then two homepages, Snowboard Issue, Essential XM, smart home). IHOP Facebook Canvas: both Vimeo videos (198135628, 246153786). Ben & Jerry's AR: Moo Vision video (163036085). Originals in MySite-originals/2026-10-04-images.
- Comcast Business Global Design System: Pete's case-study copy (role Creative Director) in the standard format, plus search description and skills. Draft file updated and marked published.
- Comcast Business Global Design System: eleven images. Foundations first (color, type, icons, primary button, button on gradient, spacing), then component specs (heroes, showcase tab, descriptor card, solutions card, table, bento card, broadband labels). Large Figma boards shrunk to 2400px wide (overview, not legible by design). Originals in MySite-originals/2026-10-04-images.
- Home: work reel updated to Pete's new edit (draft 7, 29.7 s, now includes the Global Design System). Same sizes and player; poster unchanged (same first frame). Previous reel in MySite-originals/2026-10-04-images/home-reel-previous.
- Comcast Business Enterprise: four more pages added under the existing images (Business Internet, Unified Communications, Hospitality, Sports & Entertainment), click-to-zoom.
- Comcast Business Enterprise: five images replace the old placeholders (2026 customer journey board, Enterprise homepage, Cybersecurity, gated Threat Report, Resources & Insights hub), labeled, click-to-zoom on the pages. Originals in MySite-originals/2026-10-04-images.
- Comcast Business Public Sector: seven images (design discovery board, then Public Sector, Federal, Education, State and Local, State Contracts and California pages), labeled, click-to-zoom on the pages. Resized from 2x PNGs (up to 16 MB each) to 1440px JPEGs; originals in MySite-originals/2026-10-04-images.
- Comcast Business Public Sector: copy adapted from the Enterprise case study (Enterprise → Public Sector), role Creative Director, search description and skills. The "Public Sector & Campaign Ecosystem Integration" section moved here from Enterprise; Enterprise renumbered and its search description no longer mentions public sector.
- Work: new tile **Comcast Business Public Sector** (`/comcast-business-public-sector`) in 3rd place, between Enterprise and Mobile; later tiles moved down one. Placeholder page until Pete's copy, tile image and role arrive (draft file created).
- Contact: Pete's own intro copy replaces the paraphrase; "Prefer email? … · LinkedIn" moved under it as its own paragraph (left column).
- Contact: intro copy moved under the "Contact" title in the left column, with the case-study title and body styles (14px grey). The form stays on the right.
- Buttons (Send, Back to top): orange with black text, black with white text on hover, 4px rounded corners. Contact form fields also get 4px corners (`--radius` token). White text on orange was ruled out: 2.9:1 fails AA.
- Case studies: "↑ Back to top" link at the bottom, above the tiles. Same button style as the contact form's Send; smooth scroll unless the visitor prefers reduced motion.
- Comcast Business Mobile: copy now mirrors the Small Business case study with "Small Business" changed to "Mobile"; role changed to Creative Director; search description and skills copied over.
- Comcast Business Mobile: five new screenshots replace the four placeholders (Homepage, Landing Page, Mobile homepage, Plans, My Account), labeled, click-to-zoom on the long pages. PNGs converted to JPEG; originals in MySite-originals/2026-10-04-images.
- Work: new tile **Comcast Business Global Design System** (`/comcast-business-global-design-system`) in 4th place, after Comcast Business Mobile; later tiles moved down one. Placeholder page until Pete's copy, tile image and role arrive (draft file created).
- Resume page renamed **About Me** (page title, llms.txt; the menu says **About**) and moved to `/about`. `/resume` forwards to `/about`. Content trimmed to Professional Summary, Core Competencies, Awards & Recognition and Select Brand Experience; Experience, Education and Certifications removed.
- Audit: redirect pages are checked for a valid target (including the `/petemag` base) instead of title/description/h1.

## 2026-10-03
- Resume: replaced with Pete's updated résumé (new Professional Summary, expanded Comcast and MRM bullets, Certifications section, updated tools). Scott Kay and East Coast Media roles removed. No contact line on the page (email and LinkedIn removed).
- Resume: its own smaller type scale (`--resume-*` tokens) and a circular portrait. PageLayout now adds `prose-page--<section>` to the article so a single page can be styled on its own.

## 2026-10-01
- Empire State Building: copy replaced with Pete's shorter revision (overview, problem vs. solution table, pillars, deliverables, outcomes); first image label now "Homepage".
- Empire State Building: new case-study copy from Pete's markdown (role "Lead Digital Strategist, UX Designer & Art Director"), six concept images with labels (WebP, metadata stripped), search description and skills.

## 2026-09-29
- Double Dipped French Toast: social media video embedded (Vimeo 195997447).
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
