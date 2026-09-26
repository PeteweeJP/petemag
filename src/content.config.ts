import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Paths to files under public/, e.g. images/work/comcast-business/01.jpg.
// Restricted to images/ with no "..", so a typo can't point outside the image folder.
const assetPath = z
  .string()
  .regex(/^images\/[\w./-]+$/, 'must start with images/ and contain only letters, numbers, - _ . /')
  .refine((p) => !p.includes('..'), 'must not contain ".."');

// Links must be http(s). An empty string is allowed as a TODO placeholder and is not rendered.
const linkUrl = z.union([
  z.literal(''),
  z.url({ protocol: /^https?$/, error: 'must be a full http:// or https:// URL' }),
]);

// One item in a case study's media stack (right column, top to bottom).
const media = z.object({
  type: z.enum(['image', 'video']).default('image'),
  src: assetPath.optional(),
  vimeo: z.string().regex(/^\d*$/, 'Vimeo ID is the number from the video URL').optional(),
  alt: z.string().min(1),
  zoom: z.boolean().default(false), // true = click to open full size (good for long screenshots)
});

const project = z.object({
  title: z.string(), // detail page title
  client: z.string(),
  tile: z.object({
    label: z.string(), // client name; shown as text until the logo file exists, then used as the logo's alt text
    logo: assetPath.optional(), // client logo (SVG or transparent PNG, white or brand-colored)
    subtitle: z.string().optional(), // letter-spaced line under the label
    image: assetPath.optional(), // tile background
  }),
  role: z.string().optional(),
  order: z.number(), // position in the section grid
  links: z.array(z.object({ label: z.string(), url: linkUrl })).default([]),
  media: z.array(media).default([]),
  seoDescription: z.string().optional(), // otherwise generated from the first paragraph
  slugVerified: z.boolean().default(false), // true once the slug matches the live Squarespace URL
  draft: z.boolean().default(false),
});

// Files starting with "_" are ignored, so notes can live beside content.
const section = (dir: string) =>
  defineCollection({ loader: glob({ pattern: '[^_]*.md', base: `./src/content/${dir}` }), schema: project });

export const collections = {
  work: section('work'),
  apps: section('apps'),
  illustration: section('illustration'),
};
