# Design

**Status:** overall direction not chosen yet (Pete wants to see 2–3 options). Baseline choices are settled: see "Style and design baseline" in `../decisions.md`.

**Fixed for now:** Playfair Display + PT Sans, neutral colors, client logos as images, hover-only tile titles, no script wordmark, no share button, no project dates.
**Open:** the new Home page (the original is kept as a fallback variant), and the new wordmark treatment.

## Where design lives in code
- `src/styles/tokens.css`: fonts, colors, spacing. Change these first.
- `src/styles/global.css`: layout for each page type.
- The current values approximate the Squarespace site: Playfair Display + PT Sans, white/#f8f8f8/#333, full-bleed tile grids with no gutters.

## Next step
Mock up 2–3 directions for the Home page, a Work grid and one case study, then record the choice in `../decisions.md`. Starting candidates:

1. **Refined current:** same serif/sans pairing and image-led grids, with better spacing, readable tile labels and larger case-study text.
2. **Editorial / minimal:** large type, lots of whitespace, restrained color, reads as a senior creative director.
3. **Bold / expressive:** stronger color and motion, leaning into the "idea guy" personality.

## Known problems to solve, whatever the direction (from audit §9)
- Tile labels are hard to read over busy photos. (Hover-only titles are staying by choice.)
- Full-page screenshots shown so small that their text is unreadable. Partly addressed by per-image click to zoom.
- Case-study text is tiny.
- Large empty areas under short grids (Apps, Illustration).

Save mockups, mood boards or exported frames in this folder.
