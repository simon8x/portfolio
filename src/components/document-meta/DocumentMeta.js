import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { getPageMeta } from '../../data/pageMeta';

const ensureMetaDescription = () => {
  let element = document.querySelector('meta[name="description"]');

  if (element == null) {
    element = document.createElement('meta');
    element.setAttribute('name', 'description');
    document.head.appendChild(element);
  }

  return element;
};

export const DocumentMeta = () => {
  const { pathname } = useLocation();
  const { siteLang } = useContext(LanguageContext);

  useEffect(() => {
    const meta = getPageMeta(pathname, siteLang);

    document.title = meta.title;
    ensureMetaDescription().setAttribute('content', meta.description);
  }, [pathname, siteLang]);

  return null;
};
