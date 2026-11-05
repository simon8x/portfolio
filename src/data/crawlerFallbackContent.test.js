import { buildCrawlerFallbackHtml } from './crawlerFallbackContent';

describe('crawlerFallbackContent', () => {
  test('home fallback includes bio and FAQ', () => {
    const html = buildCrawlerFallbackHtml('/');

    expect(html).toMatch(/Simón Yamil Ibalo/);
    expect(html).toMatch(/Who is Simón Ibalo/);
    expect(html).toMatch(/Featured projects|Site sections/);
  });

  test('projects fallback lists featured project names', () => {
    const html = buildCrawlerFallbackHtml('/projects');

    expect(html).toMatch(/Monetate/);
    expect(html).toMatch(/Projects — Simón Ibalo/);
  });
});
