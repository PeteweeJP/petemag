# public/images

Every image on the site lives here. Files in `public/` are copied to the site unchanged.

```
images/
  home/home-loop.webm, .mp4      Home page video (left half): Pete's 30 s work reel, 4:5 (1080x1350), loops seamlessly
  home/home-loop-720.mp4         Lighter 720x900 version for phones
  home/home-loop-poster.jpg      Its first frame: shown instantly, and instead of the video when it can't play
  about/portrait.jpg             Pete's photo: Resume page, and structured data for search results
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
- **Remove location data from photos.** Phone photos often embed GPS coordinates. The build refuses to publish a JPEG that still has them. Fix it in Preview → Tools → Show Inspector → ⓘ → GPS → *Remove Location Info*.
- **Case-study videos** are not stored here. They stay on Vimeo; put the Vimeo ID in the content file. (The home background loop is the one exception.)
