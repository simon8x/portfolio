import { entityProfile } from '../data/entityProfile';

export const getRouterBasename = () => {
  const publicUrl = process.env.PUBLIC_URL || '';

  if (publicUrl === '') {
    return undefined;
  }

  return publicUrl.endsWith('/') ? publicUrl.slice(0, -1) : publicUrl;
};

export const getCanonicalUrl = (pathname) => {
  const base = entityProfile.canonicalSite.replace(/\/$/, '');

  if (pathname === '/') {
    return base + '/';
  }

  return base + pathname;
};
