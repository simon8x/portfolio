import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRouterBasename } from '../../utils/siteUrl';

const getLegacyHashTarget = () => {
  const hash = window.location.hash;

  if (hash.length < 2 || hash.charAt(1) !== '/') {
    return null;
  }

  const legacyPath = hash.slice(1);
  const basename = getRouterBasename();
  const base = basename == null ? '' : basename;
  const nextUrl = base + legacyPath + window.location.search;

  window.history.replaceState(null, '', nextUrl);

  return legacyPath + window.location.search;
};

export const LegacyHashRouteRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const target = getLegacyHashTarget();

    if (target != null) {
      navigate(target, { replace: true });
    }
  }, [navigate]);

  return null;
};
