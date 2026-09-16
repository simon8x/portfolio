import { useCallback, useEffect, useState } from 'react';
import { Group as GroupEsm } from '@tweenjs/tween.js';

const LONG_TWEEN_MS = 2000;

let tickerPaused = false;
let knownGroups = [];
let pausedTweens = [];
const patchedGroupCtors = [];
const groupCtors = [GroupEsm];

try {
    const tweenCjs = require('@tweenjs/tween.js');
    if (tweenCjs != null && tweenCjs.Group != null && groupCtors.indexOf(tweenCjs.Group) === -1) {
        groupCtors.push(tweenCjs.Group);
    }
} catch (err) {}

const isLongTickerTween = (tween) => {
    if (tween == null) {
        return false;
    }
    if (tween._duration < LONG_TWEEN_MS) {
        return false;
    }
    return true;
};

const pauseTween = (tween) => {
    if (isLongTickerTween(tween) !== true) {
        return;
    }
    if (pausedTweens.indexOf(tween) >= 0) {
        return;
    }
    if (typeof tween.pause === 'function') {
        tween.pause();
        pausedTweens = pausedTweens.concat([tween]);
    }
};

const pauseGroupTweens = (group) => {
    if (group == null || typeof group.getAll !== 'function') {
        return;
    }
    group.getAll().filter(isLongTickerTween).map(pauseTween);
};

const applyGroupPatch = (GroupCtor) => {
    if (GroupCtor == null || GroupCtor.prototype == null || typeof GroupCtor.prototype.update !== 'function') {
        return;
    }
    if (patchedGroupCtors.indexOf(GroupCtor) >= 0) {
        return;
    }
    patchedGroupCtors.push(GroupCtor);
    const originalUpdate = GroupCtor.prototype.update;
    GroupCtor.prototype.update = function (time, preserve) {
        if (knownGroups.indexOf(this) === -1) {
            knownGroups = knownGroups.concat([this]);
        }
        if (tickerPaused === true) {
            pauseGroupTweens(this);
        }
        return originalUpdate.call(this, time, preserve);
    };
};

groupCtors.map(applyGroupPatch);

export const pauseSlideshowTickerTweens = () => {
    tickerPaused = true;
    knownGroups.map(pauseGroupTweens);
};

export const resumeSlideshowTickerTweens = () => {
    tickerPaused = false;
    pausedTweens.map((tween) => {
        if (tween != null && typeof tween.resume === 'function') {
            tween.resume();
        }
        return tween;
    });
    pausedTweens = [];
};

export const useSlideshowTickerHover = () => {
    const [isHovered, setIsHovered] = useState(false);

    const onPointerEnter = useCallback(() => {
        pauseSlideshowTickerTweens();
        setIsHovered(true);
    }, []);

    const onPointerLeave = useCallback(() => {
        resumeSlideshowTickerTweens();
        setIsHovered(false);
    }, []);

    useEffect(() => {
        return () => {
            resumeSlideshowTickerTweens();
        };
    }, []);

    return {
        isHovered: isHovered,
        tickerHoverProps: {
            onPointerEnter: onPointerEnter,
            onPointerLeave: onPointerLeave
        }
    };
};
