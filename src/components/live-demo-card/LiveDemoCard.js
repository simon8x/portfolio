import { useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import { LanguageContext } from '../../context/LanguageContext';
import { Toast } from '../toast/Toast';
import { demoReadyClosing } from '../../data/liveDemosData';

const LIVE_DEMO_EXIT_TOAST_KEY = 'liveDemoExitHintSeen';

const silenceFrameMedia = (frame) => {
    if (frame == null) {
        return;
    }

    try {
        const doc = frame.contentDocument;
        if (doc == null) {
            return;
        }

        Array.from(doc.querySelectorAll('video, audio')).map((mediaEl) => {
            mediaEl.pause();
            mediaEl.muted = true;
            return mediaEl;
        });
    } catch (err) {
        return;
    }
};


export const LiveDemoCard = ({ liveDemo, isPreloading, onRequestPreload, launchDemoId, onLaunchConsumed }) => {

    const { siteLang } = useContext(LanguageContext);
    const [infoOpen, setInfoOpen] = useState(false);
    const [demoOpen, setDemoOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);
    const [toastLeaving, setToastLeaving] = useState(false);
    const settleTimeoutRef = useRef(null);
    const iframeRef = useRef(null);

    const name = liveDemo.name[siteLang] == null
        ? liveDemo.name.EN
        : liveDemo.name[siteLang];

    const summaryParagraphs = liveDemo.summary[siteLang] == null
        ? liveDemo.summary.EN
        : liveDemo.summary[siteLang];

    const techStack = liveDemo.techStack == null ? [] : liveDemo.techStack;

    const openLabel = siteLang === 'ES'
        ? `Ver ficha de ${name}`
        : `View ${name} details`;

    const stackLabel = siteLang === 'ES' ? 'Ficha técnica' : 'Tech sheet';
    const loadingLabel = siteLang === 'ES' ? 'Cargando demo…' : 'Loading demo…';
    const readyLabel = siteLang === 'ES' ? 'Demo lista' : 'Demo ready';
    const viewDemoLabel = siteLang === 'ES' ? 'Ver demo' : 'View demo';
    const closeDemoLabel = siteLang === 'ES' ? 'Cerrar demo' : 'Close demo';
    const toastMessage = siteLang === 'ES'
        ? 'Presioná × para volver al sitio'
        : 'Press × to return to the site';

    const readyHint = demoReadyClosing[siteLang] == null
        ? demoReadyClosing.EN
        : demoReadyClosing[siteLang];

    const cardTooltip = liveDemo.cardTooltip == null ? null : liveDemo.cardTooltip;
    const cardTooltipText = cardTooltip == null
        ? null
        : (cardTooltip[siteLang] == null ? cardTooltip.EN : cardTooltip[siteLang]);

    const imageWrapperClass = imageLoaded === true
        ? 'live-demo-card-image-wrapper is-loaded'
        : 'live-demo-card-image-wrapper';

    const viewDemoClass = isReady === true
        ? 'live-demo-view-btn'
        : 'live-demo-view-btn is-disabled';

    const iframeClass = demoOpen === true
        ? 'live-demo-frame is-fullscreen'
        : 'live-demo-frame is-preload';

    useEffect(() => {
        if (launchDemoId == null || launchDemoId === '') {
            return;
        }

        if (launchDemoId !== liveDemo.id) {
            return;
        }

        onRequestPreload();
        setInfoOpen(true);

        if (typeof onLaunchConsumed === 'function') {
            onLaunchConsumed();
        }
        // Solo reaccionamos al pedido de apertura externa (query ?demo=).
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [launchDemoId, liveDemo.id]);

    useEffect(() => {
        if (isPreloading === true) {
            return;
        }

        if (settleTimeoutRef.current != null) {
            clearTimeout(settleTimeoutRef.current);
            settleTimeoutRef.current = null;
        }

        setProgress(0);
        setIsReady(false);
        setDemoOpen(false);
        setToastOpen(false);
        setToastLeaving(false);
    }, [isPreloading]);

    useEffect(() => {
        if (isPreloading !== true) {
            return;
        }

        if (isReady === true) {
            return;
        }

        const intervalId = setInterval(() => {
            setProgress((current) => {
                if (current >= 90) {
                    return current;
                }

                const step = Math.max(1, Math.round((90 - current) * 0.1));
                const next = current + step;
                return next > 90 ? 90 : next;
            });
        }, 200);

        return () => clearInterval(intervalId);
    }, [isPreloading, isReady]);

    useEffect(() => {
        return () => {
            if (settleTimeoutRef.current != null) {
                clearTimeout(settleTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (demoOpen !== true) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [demoOpen]);

    // Mientras el iframe está en preload (no fullscreen), silenciar media autoplay
    // (p. ej. Alphaverse). Mismo origen → podemos pausar video/audio del documento.
    useEffect(() => {
        if (isPreloading !== true) {
            return;
        }

        if (demoOpen === true) {
            return;
        }

        silenceFrameMedia(iframeRef.current);

        let observer = null;
        const pollId = setInterval(() => {
            silenceFrameMedia(iframeRef.current);
        }, 400);

        try {
            const doc = iframeRef.current == null ? null : iframeRef.current.contentDocument;
            const root = doc == null ? null : (doc.body == null ? doc.documentElement : doc.body);

            if (root != null && typeof MutationObserver === 'function') {
                observer = new MutationObserver(() => {
                    silenceFrameMedia(iframeRef.current);
                });
                observer.observe(root, { childList: true, subtree: true });
            }
        } catch (err) {
            observer = null;
        }

        return () => {
            clearInterval(pollId);
            if (observer != null) {
                observer.disconnect();
            }
            silenceFrameMedia(iframeRef.current);
        };
    }, [isPreloading, demoOpen, isReady]);

    useEffect(() => {
        if (demoOpen !== true) {
            return;
        }

        const frame = iframeRef.current;
        if (frame == null) {
            return;
        }

        try {
            const doc = frame.contentDocument;
            if (doc == null) {
                return;
            }

            // Solo reanudar media con autoplay (p. ej. pins). No forzar play() global:
            // en box-opening eso disparaba la secuencia de loading sin playVid()/CSS.
            Array.from(doc.querySelectorAll('video[autoplay], audio[autoplay]')).map((mediaEl) => {
                mediaEl.muted = mediaEl.hasAttribute('muted');
                const playPromise = mediaEl.play();
                if (playPromise != null && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => null);
                }
                return mediaEl;
            });
        } catch (err) {
            return;
        }
    }, [demoOpen]);

    useEffect(() => {
        if (toastOpen !== true) {
            return;
        }

        if (toastLeaving === true) {
            return;
        }

        const fadeTimer = setTimeout(() => {
            setToastLeaving(true);
        }, 5000);

        return () => clearTimeout(fadeTimer);
    }, [toastOpen, toastLeaving]);

    useEffect(() => {
        if (toastLeaving !== true) {
            return;
        }

        const hideTimer = setTimeout(() => {
            setToastOpen(false);
            setToastLeaving(false);
        }, 400);

        return () => clearTimeout(hideTimer);
    }, [toastLeaving]);

    const handleOpenInfo = () => {
        onRequestPreload();
        setInfoOpen(true);
    };

    const handleCloseInfo = () => {
        setInfoOpen(false);
    };

    const handleFrameLoad = () => {
        if (settleTimeoutRef.current != null) {
            clearTimeout(settleTimeoutRef.current);
        }

        silenceFrameMedia(iframeRef.current);

        settleTimeoutRef.current = setTimeout(() => {
            silenceFrameMedia(iframeRef.current);
            setProgress(100);
            setIsReady(true);
            settleTimeoutRef.current = null;
        }, 400);
    };

    const handleOpenDemo = () => {
        if (isReady !== true) {
            return;
        }

        setInfoOpen(false);
        setDemoOpen(true);

        const toastSeen = sessionStorage.getItem(LIVE_DEMO_EXIT_TOAST_KEY) === '1';
        if (toastSeen === true) {
            return;
        }

        sessionStorage.setItem(LIVE_DEMO_EXIT_TOAST_KEY, '1');
        setToastLeaving(false);
        setToastOpen(true);
    };

    const handleCloseDemo = () => {
        silenceFrameMedia(iframeRef.current);
        setDemoOpen(false);
        setToastOpen(false);
        setToastLeaving(false);
    };

    const demoLayer = isPreloading === true
        ? createPortal(
            <>
                <iframe
                    ref={iframeRef}
                    className={iframeClass}
                    src={liveDemo.demoUrl}
                    title={name}
                    onLoad={handleFrameLoad}
                />
                {
                    demoOpen === true
                        ? <div className='live-demo-fullscreen-chrome'>
                            <button
                                type='button'
                                className='live-demo-fullscreen-close'
                                onClick={handleCloseDemo}
                                aria-label={closeDemoLabel}
                            >
                                <span aria-hidden='true'>×</span>
                            </button>
                            <Toast
                                message={toastMessage}
                                open={toastOpen}
                                isLeaving={toastLeaving}
                            />
                          </div>
                        : null
                }
            </>,
            document.body
          )
        : null;

    return (
        <>
            <button
                type='button'
                className='live-demo-card hover-enlarge'
                onClick={handleOpenInfo}
                aria-label={openLabel}
            >
                {
                    cardTooltipText == null
                        ? null
                        : <span className='live-demo-card-tooltip' aria-hidden='true'>
                            {cardTooltipText}
                          </span>
                }
                <div className={imageWrapperClass}>
                    <img
                        className='live-demo-card-image'
                        src={liveDemo.featuredImageUrl}
                        alt=''
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(true)}
                    />
                </div>
                <h3 className='live-demo-card-name'>{name}</h3>
            </button>

            <Modal
                open={infoOpen}
                onClose={handleCloseInfo}
                center
                classNames={{
                    overlay: 'live-demo-modal-overlay',
                    modal: 'live-demo-modal'
                }}
            >
                <article className='live-demo-modal-wrapper'>
                    <header className='live-demo-modal-header'>
                        <h3 className='live-demo-modal-name'>{name}</h3>
                        <div className='live-demo-modal-summary'>
                            {summaryParagraphs.map((paragraph, index) =>
                                <p className='live-demo-modal-summary-paragraph' key={index}>
                                    {paragraph}
                                </p>
                            )}
                        </div>
                    </header>

                    {
                        techStack.length > 0
                            ? <section className='live-demo-tech-sheet' aria-label={stackLabel}>
                                <h4 className='live-demo-tech-sheet-title'>{stackLabel}</h4>
                                <ul className='live-demo-tech-sheet-list'>
                                    {techStack.map((item) =>
                                        <li className='live-demo-tech-sheet-item' key={item}>
                                            {item}
                                        </li>
                                    )}
                                </ul>
                              </section>
                            : null
                    }

                    <div className='live-demo-loading-block'>
                        <p className='live-demo-ready-hint'>{readyHint}</p>
                        <div
                            className='live-demo-progress'
                            role='progressbar'
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={progress}
                            aria-label={isReady === true ? readyLabel : loadingLabel}
                        >
                            <div
                                className='live-demo-progress-fill'
                                style={{ width: progress + '%' }}
                            />
                        </div>
                        <p className='live-demo-loading-label'>
                            {isReady === true ? readyLabel : loadingLabel + ' ' + progress + '%'}
                        </p>
                        <button
                            type='button'
                            className={viewDemoClass}
                            onClick={handleOpenDemo}
                            disabled={isReady !== true}
                        >
                            {viewDemoLabel}
                        </button>
                    </div>
                </article>
            </Modal>

            {demoLayer}
        </>
    )
}
