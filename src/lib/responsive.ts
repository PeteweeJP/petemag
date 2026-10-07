// Responsive images: smaller WebP copies of each image so phones and tablets don't download
// desktop-size files. The copies are made at build time by src/integrations/responsive-images.mjs
// (they live only in dist/, never in public/). The original file is always the largest candidate,
// so desktop and click-to-zoom still get exactly the image Pete supplied.
import { url } from './url';
import { imageDims } from './content';

// Keep in sync with WIDTHS in src/integrations/responsive-images.mjs.
// 1200 serves high-density phones (an iPhone needs ~1170px), 960/640 tablets and smaller screens.
export const VARIANT_WIDTHS = [640, 960, 1200];

// images/work/x/03.jpg -> images/work/x/03-1200w.webp
export const variantPath = (file: string, width: number) => file.replace(/\.(jpe?g|png|webp)$/i, `-${width}w.webp`);

// A copy is only worth making when it is clearly smaller than the original.
// Keep in sync with makesVariant in src/integrations/responsive-images.mjs.
export const makesVariant = (originalWidth: number, width: number) => originalWidth > width + 100;

// srcset for an image under public/, or undefined when there is nothing smaller to offer.
// In `npm run dev` the copies don't exist yet, so the plain image is used.
export function srcsetFor(file: string): string | undefined {
  if (import.meta.env.DEV) return undefined;
  const { width } = imageDims(file);
  if (!width) return undefined;
  const widths = VARIANT_WIDTHS.filter((w) => makesVariant(width, w));
  if (!widths.length) return undefined;
  return [...widths.map((w) => `${url(variantPath(file, w))} ${w}w`), `${url(file)} ${width}w`].join(', ');
}

// How wide images display, so the browser can pick the right copy before layout.
// Case-study media column: full width under 900px; otherwise about two thirds of the page, max ~1050px.
export const MEDIA_SIZES = '(max-width: 900px) 100vw, min(1050px, 65vw)';
// Section grids: 1 column under 600px, 2 under 900px, else 3.
export const TILE_SIZES = '(max-width: 600px) 100vw, (max-width: 900px) 50vw, 34vw';
