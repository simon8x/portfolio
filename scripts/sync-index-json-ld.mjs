import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(scriptDir, '..');
const structuredDataModule = pathToFileURL(
  path.join(rootDir, 'src', 'data', 'structuredData.js')
).href;

const { getStructuredDataJsonString } = await import(structuredDataModule);

const json = getStructuredDataJsonString('EN');
const scriptTag = [
  '    <script type="application/ld+json" id="portfolio-json-ld">',
  json.replace(/^/gm, '    '),
  '    </script>',
].join('\n');

const indexPath = path.join(rootDir, 'public', 'index.html');
let html = readFileSync(indexPath, 'utf8');
const pattern = /<script type="application\/ld\+json" id="portfolio-json-ld">[\s\S]*?<\/script>/;

if (pattern.test(html) === true) {
  html = html.replace(pattern, scriptTag);
} else {
  html = html.replace(
    '<title>Simón Ibalo — UX/UI Engineer</title>',
    '<title>Simón Ibalo — UX/UI Engineer</title>\n\n' + scriptTag
  );
}

writeFileSync(indexPath, html, 'utf8');
