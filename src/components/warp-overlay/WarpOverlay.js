import { useContext, useEffect, useRef } from 'react';
import { WarpContext } from '../../context/WarpContext';
import { prefersReducedMotion } from '../../utils/appear';
import {
  WARP_ACCEL_MS,
  WARP_BRAKE_MS,
  WARP_IDLE_FACTOR,
  WARP_MAX_FACTOR
} from '../../utils/warp';

const STAR_COUNT_IDLE = 280;
const STAR_COUNT_WARP = 320;
const IDLE_FRAME_MS = 1000 / 30;
const MOBILE_MAX_WIDTH = 768;

const createStar = (width, height) => {
  return {
    x: (Math.random() - 0.5) * width,
    y: (Math.random() - 0.5) * height,
    z: Math.random() * width,
    pz: Math.random() * width
  };
};

const easeInQuad = (t) => {
  return t * t;
};

const easeOutQuad = (t) => {
  return t * (2 - t);
};

const capDpr = (rawDpr, width) => {
  if (width < MOBILE_MAX_WIDTH) {
    return 1;
  }
  if (rawDpr > 1.5) {
    return 1.5;
  }
  return rawDpr;
};

export const WarpOverlay = () => {
  const warp = useContext(WarpContext);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const starsRef = useRef([]);
  const startTimeRef = useRef(0);
  const brakeTimeRef = useRef(0);
  const isWarpingRef = useRef(false);
  const isBrakingRef = useRef(false);
  const isWarping = warp == null ? false : warp.isWarping;
  const isBraking = warp == null ? false : warp.isBraking;

  isWarpingRef.current = isWarping === true;
  isBrakingRef.current = isBraking === true;

  useEffect(() => {
    if (isWarping === true && isBraking === false) {
      startTimeRef.current = performance.now();
    }
  }, [isWarping, isBraking]);

  useEffect(() => {
    if (isBraking === true) {
      brakeTimeRef.current = performance.now();
    }
  }, [isBraking]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null || prefersReducedMotion() === true) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (ctx == null) {
      return;
    }

    const sizeToViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const rawDpr = window.devicePixelRatio == null ? 1 : window.devicePixelRatio;
      const dpr = capDpr(rawDpr, width);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = Array.from({ length: STAR_COUNT_WARP }, () => createStar(width, height));
      return { width, height };
    };

    let viewport = sizeToViewport();
    let lastTime = performance.now();
    let lastDrawTime = 0;

    const speedFactor = (now) => {
      if (isWarpingRef.current === false) {
        return WARP_IDLE_FACTOR;
      }
      const span = WARP_MAX_FACTOR - WARP_IDLE_FACTOR;
      if (isBrakingRef.current === true) {
        const brakeT = Math.min(1, (now - brakeTimeRef.current) / WARP_BRAKE_MS);
        return WARP_MAX_FACTOR - easeOutQuad(brakeT) * span;
      }
      const accelT = Math.min(1, (now - startTimeRef.current) / WARP_ACCEL_MS);
      return WARP_IDLE_FACTOR + easeInQuad(accelT) * span;
    };

    const draw = (now) => {
      const warping = isWarpingRef.current === true;
      if (warping === false && now - lastDrawTime < IDLE_FRAME_MS) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const width = viewport.width;
      const height = viewport.height;
      const dt = Math.min(48, now - lastTime);
      lastTime = now;
      lastDrawTime = now;
      const factor = speedFactor(now);
      const speed = width * 0.022 * (dt / 16) * factor;
      const cx = width / 2;
      const cy = height / 2;
      const starLimit = warping === true ? STAR_COUNT_WARP : STAR_COUNT_IDLE;

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = '#f7f7f7';
      ctx.fillStyle = '#f7f7f7';
      ctx.lineCap = 'round';
      ctx.globalAlpha = warping === true ? 0.25 + factor * 0.75 : 0.55;
      ctx.beginPath();

      starsRef.current.map((star, index) => {
        if (index >= starLimit) {
          return star;
        }
        star.pz = star.z;
        star.z = star.z - speed;
        if (star.z < 1) {
          star.x = (Math.random() - 0.5) * width;
          star.y = (Math.random() - 0.5) * height;
          star.z = width;
          star.pz = star.z;
        }

        const sx = (star.x / star.z) * width + cx;
        const sy = (star.y / star.z) * height + cy;
        const prevZ = star.pz < 1 ? 1 : star.pz;
        const px = (star.x / prevZ) * width + cx;
        const py = (star.y / prevZ) * height + cy;
        const trailX = sx - px;
        const trailY = sy - py;
        const trailLen = Math.sqrt(trailX * trailX + trailY * trailY);
        const minTrail = warping === true ? 0.4 : 1.15;
        const safeLen = trailLen >= 0.001 ? trailLen : 1;
        const drawX = trailLen >= minTrail ? px : sx - trailX * (minTrail / safeLen);
        const drawY = trailLen >= minTrail ? py : sy - trailY * (minTrail / safeLen);

        ctx.moveTo(drawX, drawY);
        ctx.lineTo(sx, sy);
        return star;
      });

      ctx.lineWidth = warping === true ? 0.45 + factor * 2.1 : 1.05;
      ctx.stroke();
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    const startLoop = () => {
      if (rafRef.current != null) {
        return;
      }
      lastTime = performance.now();
      lastDrawTime = 0;
      rafRef.current = requestAnimationFrame(draw);
    };

    const stopLoop = () => {
      if (rafRef.current == null) {
        return;
      }
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    const handleVisibility = () => {
      if (document.hidden === true) {
        stopLoop();
        return;
      }
      startLoop();
    };

    const handleResize = () => {
      viewport = sizeToViewport();
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);
    startLoop();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      stopLoop();
    };
  }, []);

  return (
    <div className='warp-overlay' aria-hidden='true'>
      <canvas ref={canvasRef} className='warp-overlay-canvas' />
    </div>
  );
};
