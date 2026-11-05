import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { getPageMeta } from '../../data/pageMeta';
import { getStructuredDataJsonString } from '../../data/structuredData';
import { getCanonicalUrl } from '../../utils/siteUrl';

const JSON_LD_SCRIPT_ID = 'portfolio-json-ld';
const CANONICAL_LINK_ID = 'portfolio-canonical';

const ensureMetaDescription = () => {
  let element = document.querySelector('meta[name="description"]');

  if (element == null) {
    element = document.createElement('meta');
    element.setAttribute('name', 'description');
    document.head.appendChild(element);
  }

  return element;
};

const ensureMetaProperty = (property) => {
  let element = document.querySelector('meta[property="' + property + '"]');

  if (element == null) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }

  return element;
};

const ensureMetaName = (name) => {
  let element = document.querySelector('meta[name="' + name + '"]');

  if (element == null) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  return element;
};

const ensureCanonicalLink = () => {
  let element = document.getElementById(CANONICAL_LINK_ID);

  if (element == null) {
    element = document.createElement('link');
    element.id = CANONICAL_LINK_ID;
    element.rel = 'canonical';
    document.head.appendChild(element);
  }

  return element;
};

const ensureJsonLdScript = () => {
  let element = document.getElementById(JSON_LD_SCRIPT_ID);

  if (element == null) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.id = JSON_LD_SCRIPT_ID;
    document.head.appendChild(element);
  }

  return element;
};

export const DocumentMeta = () => {
  const { pathname } = useLocation();
  const { siteLang } = useContext(LanguageContext);

  useEffect(() => {
    const meta = getPageMeta(pathname, siteLang);
    const schemaLang = siteLang === 'ES' ? 'ES' : 'EN';
    const canonicalUrl = getCanonicalUrl(pathname);

    document.title = meta.title;
    ensureMetaDescription().setAttribute('content', meta.description);
    ensureCanonicalLink().setAttribute('href', canonicalUrl);
    ensureMetaProperty('og:url').setAttribute('content', canonicalUrl);
    ensureMetaProperty('og:title').setAttribute('content', meta.title);
    ensureMetaProperty('og:description').setAttribute('content', meta.description);
    ensureMetaName('twitter:title').setAttribute('content', meta.title);
    ensureMetaName('twitter:description').setAttribute('content', meta.description);
    ensureJsonLdScript().textContent = getStructuredDataJsonString(schemaLang);
  }, [pathname, siteLang]);

  return null;
};
