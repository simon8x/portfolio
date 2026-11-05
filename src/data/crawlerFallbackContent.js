import { entityProfile } from './entityProfile.js';
import { faqItems, faqSectionTitle } from './faqContent.js';
import { featuredProjectsData } from './projectsData.js';
import { getPageMeta } from './pageMeta.js';

const SITE_BASE = entityProfile.canonicalSite.replace(/\/$/, '');

export const CRAWLER_FALLBACK_ROUTES = [
  { pathname: '/', outputPath: 'index.html' },
  { pathname: '/projects', outputPath: 'projects/index.html' },
  { pathname: '/track-record', outputPath: 'track-record/index.html' },
  { pathname: '/testimonial', outputPath: 'testimonial/index.html' },
];

const escapeHtml = (value) => {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

const buildNavLinks = () => {
  return [
    { href: SITE_BASE + '/', label: 'Home' },
    { href: SITE_BASE + '/projects', label: 'Projects' },
    { href: SITE_BASE + '/track-record', label: 'Track record' },
    { href: SITE_BASE + '/testimonial', label: 'Testimonials' },
  ];
};

const buildHomeFallback = () => {
  const navLinks = buildNavLinks();
  const faqHeading = escapeHtml(faqSectionTitle.EN);
  const faqBlocks = faqItems
    .map((item) => {
      const question = escapeHtml(item.question.EN);
      const answer = escapeHtml(item.answer.EN);

      return (
        '<dt>' + question + '</dt><dd>' + answer + '</dd>'
      );
    })
    .join('');

  const navItems = navLinks
    .map((link) => {
      return '<li><a href="' + escapeHtml(link.href) + '">' + escapeHtml(link.label) + '</a></li>';
    })
    .join('');

  return (
    '<p>This portfolio requires JavaScript for navigation and animations. The summary below is available without scripts.</p>' +
    '<h1>' + escapeHtml(entityProfile.fullName) + ' — ' + escapeHtml(entityProfile.jobTitle.EN) + '</h1>' +
    '<p>' + escapeHtml(entityProfile.descriptionLong.EN) + '</p>' +
    '<h2>Site sections</h2>' +
    '<ul>' + navItems + '</ul>' +
    '<h2>' + faqHeading + '</h2>' +
    '<dl>' + faqBlocks + '</dl>'
  );
};

const buildSectionFallback = (pathname) => {
  const meta = getPageMeta(pathname, 'EN');
  const navItems = buildNavLinks()
    .map((link) => {
      return '<li><a href="' + escapeHtml(link.href) + '">' + escapeHtml(link.label) + '</a></li>';
    })
    .join('');

  let extra = '';

  if (pathname === '/projects') {
    const projectItems = featuredProjectsData
      .map((project) => {
        const description = project.projectShortDescription == null
          ? ''
          : project.projectShortDescription.EN;
        const name = escapeHtml(project.projectName);
        const summary = escapeHtml(description);

        return '<li><strong>' + name + '</strong> — ' + summary + '</li>';
      })
      .join('');

    extra =
      '<h2>Featured projects</h2>' +
      '<ul>' + projectItems + '</ul>' +
      '<p>Open the Projects page with JavaScript enabled for case studies, charts, and live demos.</p>';
  }

  if (pathname === '/track-record') {
    extra =
      '<p>This section lists employers, roles, and skills. Resume PDF downloads (English and Spanish) are available when JavaScript is enabled.</p>';
  }

  if (pathname === '/testimonial') {
    extra =
      '<p>This section contains written recommendations from colleagues. Enable JavaScript to read the full testimonials layout.</p>';
  }

  return (
    '<p>This page requires JavaScript for the full experience. Summary content is provided below for accessibility and discovery.</p>' +
    '<h1>' + escapeHtml(meta.title) + '</h1>' +
    '<p>' + escapeHtml(meta.description) + '</p>' +
    extra +
    '<h2>Other sections</h2>' +
    '<ul>' + navItems + '</ul>'
  );
};

export const buildCrawlerFallbackHtml = (pathname) => {
  if (pathname === '/') {
    return buildHomeFallback();
  }

  return buildSectionFallback(pathname);
};
