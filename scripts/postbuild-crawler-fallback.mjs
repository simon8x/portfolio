import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(scriptDir, '..');
const buildDir = path.join(rootDir, 'build');
const fallbackModule = pathToFileURL(
  path.join(rootDir, 'src', 'data', 'crawlerFallbackContent.js')
).href;

const { buildCrawlerFallbackHtml, CRAWLER_FALLBACK_ROUTES } = await import(fallbackModule);

const NOSCRIPT_PATTERN = /<noscript id="portfolio-crawler-fallback"[^>]*>[\s\S]*?<\/noscript>/;

const injectFallback = (html, pathname) => {
  const fallbackHtml = buildCrawlerFallbackHtml(pathname);

  if (NOSCRIPT_PATTERN.test(html) !== true) {
    throw new Error('Missing portfolio-crawler-fallback noscript block in build/index.html');
  }

  return html.replace(
    NOSCRIPT_PATTERN,
    '<noscript id="portfolio-crawler-fallback" class="portfolio-crawler-fallback">' +
      fallbackHtml +
      '</noscript>'
  );
};

const templatePath = path.join(buildDir, 'index.html');
const templateHtml = readFileSync(templatePath, 'utf8');

CRAWLER_FALLBACK_ROUTES.forEach((route) => {
  const html = injectFallback(templateHtml, route.pathname);
  const outputPath = path.join(buildDir, route.outputPath);

  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html, 'utf8');
});
