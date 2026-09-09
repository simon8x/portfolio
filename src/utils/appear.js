import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { WarpContext } from '../context/WarpContext';
import { shouldWarpBetween } from './warp';

export const APPEAR_EXIT_MS = 750;

const ENTER_ANIMATION_NAMES = [
  'appear-from-up',
  'appear-from-top',
  'appear-from-left',
  'appear-from-right',
  'appear-from-up-offscreen',
  'appear-from-top-offscreen',
  'appear-from-left-offscreen',
  'appear-from-right-offscreen'
];

export const finishAppearAnimation = (event) => {
  const name = event.animationName;
  if (ENTER_ANIMATION_NAMES.indexOf(name) >= 0) {
    event.currentTarget.classList.add('appear--done');
  }
};

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || window.matchMedia == null) {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const APPEAR_DESKTOP_MQ = '(min-width: 821px)';

export const getAppearReveal = () => {
  if (typeof window === 'undefined' || window.matchMedia == null) {
    return 'view';
  }
  return window.matchMedia(APPEAR_DESKTOP_MQ).matches === true ? 'load' : 'view';
};

export const useAppearRevealMode = () => {
  const [reveal, setReveal] = useState(getAppearReveal);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia == null) {
      return;
    }
    const mq = window.matchMedia(APPEAR_DESKTOP_MQ);
    const apply = () => {
      setReveal(mq.matches === true ? 'load' : 'view');
    };
    apply();
    if (mq.addEventListener != null) {
      mq.addEventListener('change', apply);
      return () => {
        mq.removeEventListener('change', apply);
      };
    }
    mq.addListener(apply);
    return () => {
      mq.removeListener(apply);
    };
  }, []);

  return reveal;
};

export const useAppearOnView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const warp = useContext(WarpContext);
  const enterUnlocked = warp == null ? true : warp.enterUnlocked;
  const reveal = options == null || options.reveal == null ? 'view' : options.reveal;

  useEffect(() => {
    if (enterUnlocked === false) {
      setIsInView(false);
      return;
    }
    if (prefersReducedMotion() === true) {
      setIsInView(true);
      return;
    }
    if (reveal === 'load') {
      setIsInView(true);
      return;
    }
    const node = ref.current;
    if (node == null) {
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry == null) {
        return;
      }
      if (entry.isIntersecting === true) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.01,
      rootMargin: '0px 0px -8% 0px'
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [enterUnlocked, reveal]);

  const enterClass = enterUnlocked === true && isInView === true ? ' is-visible' : '';
  return { appearRef: ref, enterClass: enterClass };
};

export const AppearBlock = (props) => {
  const { appearRef, enterClass } = useAppearOnView({ reveal: props.reveal });
  const extraClassName = props.className == null ? '' : props.className;
  return (
    <div
      ref={appearRef}
      className={extraClassName + enterClass}
      style={props.style}
      onAnimationEnd={finishAppearAnimation}
    >
      {props.children}
    </div>
  );
};

export const useExitNavigate = (exitHoldMs) => {
  const navigate = useNavigate();
  const location = useLocation();
  const warp = useContext(WarpContext);
  const startWarp = warp == null ? null : warp.startWarp;
  const [isExiting, setIsExiting] = useState(false);
  const pendingPathRef = useRef(null);
  const holdMs = exitHoldMs == null ? APPEAR_EXIT_MS : exitHoldMs;

  const requestNavigate = (path) => {
    if (path == null || path === location.pathname) {
      return;
    }
    if (isExiting === true) {
      return;
    }
    if (prefersReducedMotion() === true) {
      navigate(path);
      return;
    }
    pendingPathRef.current = path;
    setIsExiting(true);
  };

  useEffect(() => {
    if (isExiting === false) {
      return;
    }
    const timer = setTimeout(() => {
      const path = pendingPathRef.current;
      if (path == null) {
        return;
      }
      const useWarp = startWarp != null
        && shouldWarpBetween(location.pathname, path) === true;
      if (useWarp === true) {
        startWarp(path);
        return;
      }
      navigate(path);
    }, holdMs);
    return () => {
      clearTimeout(timer);
    };
  }, [isExiting, navigate, location.pathname, startWarp, holdMs]);

  return { isExiting, requestNavigate };
};
