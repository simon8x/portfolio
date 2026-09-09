import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WarpContext } from './WarpContext';
import { preloadForPath, waitMs, waitWarpWindow, WARP_BRAKE_MS } from '../utils/warp';

export const WarpProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isWarping, setIsWarping] = useState(false);
  const [isBraking, setIsBraking] = useState(false);
  const [enterUnlocked, setEnterUnlocked] = useState(true);
  const [warpPath, setWarpPath] = useState(null);
  const isWarpingRef = useRef(false);

  const startWarp = useCallback((path) => {
    if (path == null || isWarpingRef.current === true) {
      return;
    }
    isWarpingRef.current = true;
    setEnterUnlocked(false);
    setIsBraking(false);
    setWarpPath(path);
    setIsWarping(true);
  }, []);

  useEffect(() => {
    if (isWarping === true) {
      document.body.classList.add('is-warping');
      return () => {
        document.body.classList.remove('is-warping');
      };
    }
    document.body.classList.remove('is-warping');
  }, [isWarping]);

  useEffect(() => {
    if (isWarping === false || warpPath == null) {
      return;
    }

    navigate(warpPath);

    let cancelled = false;

    waitWarpWindow(preloadForPath(warpPath)).then(() => {
      if (cancelled === true) {
        return;
      }
      setIsBraking(true);
      return waitMs(WARP_BRAKE_MS);
    }).then(() => {
      if (cancelled === true) {
        return;
      }
      isWarpingRef.current = false;
      setIsBraking(false);
      setIsWarping(false);
      setEnterUnlocked(true);
      setWarpPath(null);
    });

    return () => {
      cancelled = true;
    };
  }, [isWarping, warpPath, navigate]);

  const value = useMemo(() => {
    return {
      isWarping: isWarping,
      isBraking: isBraking,
      enterUnlocked: enterUnlocked,
      startWarp: startWarp
    };
  }, [isWarping, isBraking, enterUnlocked, startWarp]);

  return (
    <WarpContext.Provider value={value}>
      {children}
    </WarpContext.Provider>
  );
};
