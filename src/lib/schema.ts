// schema.org structured data (JSON-LD). Helps search engines and AI agents understand
// who the site is about and what each page is.
import { site } from '../data/site';

export const personId = (siteUrl: URL) => new URL('#person', siteUrl).href;

export function person(siteUrl: URL) {
  return {
    '@type': 'Person',
    '@id': personId(siteUrl),
    name: site.name,
    jobTitle: site.jobTitle,
    worksFor: { '@type': 'Organization', name: site.employer },
    url: siteUrl.href,
    email: `mailto:${site.email}`,
    sameAs: [site.linkedin],
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Rhode Island' },
    knowsAbout: ['User experience design', 'Creative direction', 'Design systems', 'Branding', 'Digital advertising', 'Illustration'],
  };
}

export function breadcrumbs(items: { name: string; url: URL | string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: String(item.url) })),
  };
}

// Serialize for a <script type="application/ld+json">. Escaping "<" stops content from closing the tag early.
export const toJsonLd = (graph: object[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
