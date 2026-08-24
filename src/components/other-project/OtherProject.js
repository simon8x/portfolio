import { useState, useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { TechStack } from '../tech-stack/TechStack';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './_custom-modal.css'
import { LanguageContext } from '../../context/LanguageContext';
import { LIVE_DEMO_HANDOFF_MS, navigateToLiveDemo } from '../../utils/liveDemoHandoff';

export const OtherProject = ({ otherProject }) => {
    const { siteLang } = useContext(LanguageContext)
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [heroLoaded, setHeroLoaded] = useState(false);
    const [modalBannerLoaded, setModalBannerLoaded] = useState(false);
    const handoffTimeoutRef = useRef(null);

    const demoId = otherProject.demoId;
    const hasDemo = demoId != null && demoId !== '';

    const heroWrapperClass = heroLoaded === true
        ? 'other-project-img-wrapper is-loaded'
        : 'other-project-img-wrapper';

    const modalBannerWrapperClass = modalBannerLoaded === true
        ? 'modal-hero-banner-wrapper is-loaded'
        : 'modal-hero-banner-wrapper';

    const demoChipLabel = siteLang === 'ES' ? 'Demo' : 'Demo';
    const viewDemoLabel = siteLang === 'ES' ? 'Ver demo' : 'View demo';

    useEffect(() => {
        return () => {
            if (handoffTimeoutRef.current != null) {
                clearTimeout(handoffTimeoutRef.current);
            }
        };
    }, []);

    const handleViewDemo = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (hasDemo !== true) {
            return;
        }

        setOpen(false);

        if (handoffTimeoutRef.current != null) {
            clearTimeout(handoffTimeoutRef.current);
        }

        handoffTimeoutRef.current = setTimeout(() => {
            navigateToLiveDemo(navigate, demoId);
            handoffTimeoutRef.current = null;
        }, LIVE_DEMO_HANDOFF_MS);
    };

    return(
        <>
            <div className='other-project-slide-wrapper' key={otherProject.index} onClick={() => setOpen(true)} >
                {
                    hasDemo === true
                        ? <span className='project-demo-chip'>{demoChipLabel}</span>
                        : null
                }

                <div className='other-project-slide-image'>
                    <div className={heroWrapperClass}>
                        <img
                            className='other-project-img'
                            src={otherProject['heroImageUrl']}
                            alt=''
                            onLoad={() => setHeroLoaded(true)}
                            onError={() => setHeroLoaded(true)}
                        />
                    </div>
                </div>

                <div className='other-project-slide-detail'>
                    
                <h4 className='other-project-name'>{otherProject.projectName}</h4>

                </div>
            </div>
            <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    center
                    classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                    }}
                >
                <article className='modal-wrapper'>
                    <div className={modalBannerWrapperClass}>
                        <img
                            className='modal-hero-banner-img'
                            src={otherProject.projectImageUrl}
                            alt=''
                            onLoad={() => setModalBannerLoaded(true)}
                            onError={() => setModalBannerLoaded(true)}
                        />
                    </div>

                    <h1 className='modal-project-name'>{otherProject.projectName}</h1>
                    <h4 className='modal-project-subtitle'>{otherProject.projectSubtitle}</h4>
                    <p className='modal-project-date'>{otherProject.projectDate}</p>
                    <div className='modal-stack-wrapper'>
                        <TechStack stack={otherProject.tecStack}/>
                    </div>
                    <div className='modal-long-description-wrapper'>
                        {otherProject.projectLongDescriptionText[siteLang].map((item, index) => 
                            <p className='modal-project-paragraph' key={index}>
                                {item}        
                            </p>
                        )}
                    </div>
                    {
                        hasDemo === true
                            ? <button
                                type='button'
                                className='modal-view-demo-link'
                                onClick={handleViewDemo}
                              >
                                {viewDemoLabel}
                              </button>
                            : null
                    }
                </article>
            </Modal>
        </>
    )
}
