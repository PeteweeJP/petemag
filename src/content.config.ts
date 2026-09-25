import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One item in a case study's media stack (right column, top to bottom).
const media = z.object({
  type: z.enum(['image', 'video']).default('image'),
  src: z.string().optional(), // path under public/, e.g. images/work/comcast-business/01.jpg
  vimeo: z.string().optional(), // Vimeo video ID for type: video
  alt: z.string(),
  zoom: z.boolean().default(false), // true = click to open full size (good for long screenshots)
});

const project = z.object({
  title: z.string(), // detail page title
  client: z.string(),
  tile: z.object({
    label: z.string(), // client name; shown as text until the logo file exists, then used as the logo's alt text
    logo: z.string().optional(), // client logo, path under public/ (SVG or transparent PNG, white or brand-colored)
    subtitle: z.string().optional(), // letter-spaced line under the label
    image: z.string().optional(), // tile background, path under public/
  }),
  role: z.string().optional(),
  order: z.number(), // position in the section grid
  links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  media: z.array(media).default([]),
  seoDescription: z.string().optional(),
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
