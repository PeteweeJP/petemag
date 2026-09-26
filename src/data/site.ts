// Site-wide settings. Edit here, not in individual pages.
export const site = {
  name: 'Peter Magulak',
  role: 'User Experience / Creative Direction',
  jobTitle: 'Creative Director, Experience Design', // used in structured data
  employer: 'Comcast',
  tagline: 'Idea guy. User Experience. Strategy. Design. Branding. Social.',
  titleSuffix: 'The Portfolio of Peter Magulak',
  homeTitle: 'Creative Director Peter Magulak',
  description:
    'Portfolio of creative director and UX/product designer Peter Magulak: user experience, design systems, advertising campaigns, mobile and app design, and illustration.',
  email: 'pete@petemag.com',
  linkedin: 'https://www.linkedin.com/in/petermagulak',
  // false while previewing on github.io so search engines don't index a duplicate of petemag.com.
  // Flip to true at domain cutover (docs/seo.md).
  indexable: false,
  // Which home page design is live (src/components/home/). 'split' = the original Squarespace layout.
  home: 'split' as const,
  nav: [
    { label: 'Work', href: 'work', section: 'work' },
    { label: 'Apps', href: 'apps', section: 'apps' },
    { label: 'Illustration', href: 'illustration', section: 'illustration' },
    { label: 'Resume', href: 'resume', section: 'resume' },
    { label: 'Contact', href: 'contact', section: 'contact' },
  ],
} as const;

export type Section = 'work' | 'apps' | 'illustration';

// Section index pages: page title and a one-line summary (used for meta descriptions and llms.txt).
export const sections: Record<Section, { title: string; summary: string }> = {
  work: { title: 'My Work', summary: 'Case studies in UX, product design, branding and advertising campaigns.' },
  apps: { title: 'Digital Product', summary: 'App and interactive work, including augmented reality and Facebook Canvas.' },
  illustration: { title: 'Illustration', summary: 'Personal illustration: fan movie posters and character art.' },
};
