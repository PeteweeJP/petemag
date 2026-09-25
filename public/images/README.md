# public/images

Every image on the site lives here. Files in `public/` are copied to the site unchanged.

```
images/
  home/portrait.jpg              Home page photo (left half)
  work/<slug>/tile.jpg           Tile background on the Work grid
  work/<slug>/logo.png           Client logo shown on the tile (white or brand-colored, transparent background)
  work/<slug>/01.jpg, 02.jpg …   Media stack, top to bottom
  apps/<slug>/…                  Same pattern
  illustration/<slug>/…          Same pattern
```

- `<slug>` matches the content file name: `src/content/work/paradise.md` → `images/work/paradise/`.
- Each content file's `media:` list says exactly which file goes in which slot, with a description (`alt`) of what it should show. Until a file exists, the page shows a dashed placeholder with that description.
- To add, remove or reorder images, edit the `media:` list and keep file names in sync.
- Logos: transparent PNG or SVG. If you use `.svg`, update the `logo:` path in the content file to match.
- Prefer `.jpg` for photos/screenshots and `.png` only when transparency is needed. Keep files under ~500 KB and about 2000px wide max. Very tall full-page screenshots should be cropped into readable sections.
- Videos are not stored here. They stay on Vimeo; put the Vimeo ID in the content file.
