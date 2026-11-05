import { buildCrawlerFallbackHtml } from './crawlerFallbackContent';

describe('crawlerFallbackContent', () => {
  test('home fallback includes bio without inline FAQ', () => {
    const html = buildCrawlerFallbackHtml('/');

    expect(html).toMatch(/Simón Yamil Ibalo/);
    expect(html).toMatch(/Site sections/);
    expect(html).not.toMatch(/Who is Simón Ibalo/);
  });

  test('faq fallback includes FAQ entries', () => {
    const html = buildCrawlerFallbackHtml('/faq');

    expect(html).toMatch(/Who is Simón Ibalo/);
    expect(html).toMatch(/Common questions — Simón Ibalo/);
  });

  test('projects fallback lists featured project names', () => {
    const html = buildCrawlerFallbackHtml('/projects');

    expect(html).toMatch(/Monetate/);
    expect(html).toMatch(/Projects — Simón Ibalo/);
  });
});
