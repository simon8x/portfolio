import { liveDemosData } from '../data/liveDemosData';
import { featuredProjectsData } from '../data/projectsData';
import { recomendationsData } from '../data/recomendationsContent';
import { trackRecordData } from '../data/trackRecordData';

const HOME_IMAGE_URLS = [
  process.env.PUBLIC_URL + '/assets/images/me/astronaut-avatar.png',
  process.env.PUBLIC_URL + '/assets/images/icons/icon-work.png',
  process.env.PUBLIC_URL + '/assets/images/icons/icon-projects.png',
  process.env.PUBLIC_URL + '/assets/images/icons/icon-tr.png'
];

const preloadImages = (urls) => {
  const unique = urls.filter((url, index) => {
    if (url == null || url === '') {
      return false;
    }
    return urls.indexOf(url) === index;
  });

  return Promise.all(unique.map((url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve();
      };
      img.onerror = () => {
        resolve();
      };
      img.src = url;
    });
  }));
};

export const waitMs = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const WARP_MIN_MS = 1600;
export const WARP_MAX_MS = 4000;
export const WARP_ACCEL_MS = 400;
export const WARP_BRAKE_MS = 400;
export const WARP_IDLE_FACTOR = 0.035;
export const WARP_MAX_FACTOR = 1;

export const WARP_ROUTE_TRANSITIONS_ENABLED = false;

const WARP_PATHS = ['/', '/projects', '/testimonial', '/track-record'];

export const shouldWarpBetween = (fromPath, toPath) => {
  if (WARP_ROUTE_TRANSITIONS_ENABLED === false) {
    return false;
  }
  if (fromPath === toPath) {
    return false;
  }
  return WARP_PATHS.indexOf(fromPath) >= 0 && WARP_PATHS.indexOf(toPath) >= 0;
};

export const preloadForPath = (path) => {
  if (path === '/projects') {
    const demoUrls = liveDemosData.map((demo) => demo.featuredImageUrl);
    const featuredUrls = featuredProjectsData.map((project) => project.heroImageUrl);
    return preloadImages(demoUrls.concat(featuredUrls));
  }
  if (path === '/testimonial') {
    return preloadImages(recomendationsData.map((rec) => rec.avatarUrl));
  }
  if (path === '/track-record') {
    const logos = trackRecordData.map((item) => item.companyLogo);
    return preloadImages(logos.concat([
      process.env.PUBLIC_URL + '/assets/images/icons/download-file.png'
    ]));
  }
  if (path === '/') {
    return preloadImages(HOME_IMAGE_URLS);
  }
  return Promise.resolve();
};

export const waitWarpWindow = (preloadPromise) => {
  return Promise.race([
    Promise.all([preloadPromise, waitMs(WARP_MIN_MS)]),
    waitMs(WARP_MAX_MS)
  ]);
};
