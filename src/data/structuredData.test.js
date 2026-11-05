import { buildStructuredData, getStructuredDataJsonString } from './structuredData';

describe('structuredData', () => {
  test('serializes valid JSON-LD with Person, FAQPage, and ItemList', () => {
    const graph = buildStructuredData('EN');
    const types = graph['@graph'].map((node) => node['@type']);

    expect(graph['@context']).toBe('https://schema.org');
    expect(types).toContain('Person');
    expect(types).toContain('ProfilePage');
    expect(types).toContain('FAQPage');
    expect(types).toContain('ItemList');

    const faqNode = graph['@graph'].find((node) => node['@type'] === 'FAQPage');
    expect(faqNode.mainEntity.length).toBeGreaterThanOrEqual(8);

    expect(() => JSON.parse(getStructuredDataJsonString('EN'))).not.toThrow();
  });
});
