import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { getPageMeta } from '../../data/pageMeta';
import { getStructuredDataJsonString } from '../../data/structuredData';

const JSON_LD_SCRIPT_ID = 'portfolio-json-ld';

const ensureMetaDescription = () => {
  let element = document.querySelector('meta[name="description"]');

  if (element == null) {
    element = document.createElement('meta');
    element.setAttribute('name', 'description');
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

    document.title = meta.title;
    ensureMetaDescription().setAttribute('content', meta.description);
    ensureJsonLdScript().textContent = getStructuredDataJsonString(schemaLang);
  }, [pathname, siteLang]);

  return null;
};
