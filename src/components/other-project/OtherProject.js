import { useState,useContext} from 'react'
import { TechStack } from '../tech-stack/TechStack';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './_custom-modal.css'
import { LanguageContext } from '../../context/LanguageContext';

export const OtherProject = ({ otherProject }) => {
    const { siteLang } = useContext(LanguageContext)
    const [open, setOpen] = useState(false);
    const [heroLoaded, setHeroLoaded] = useState(false);
    const [modalBannerLoaded, setModalBannerLoaded] = useState(false);

    const heroWrapperClass = heroLoaded === true
        ? 'other-project-img-wrapper is-loaded'
        : 'other-project-img-wrapper';

    const modalBannerWrapperClass = modalBannerLoaded === true
        ? 'modal-hero-banner-wrapper is-loaded'
        : 'modal-hero-banner-wrapper';

    return(
        <>
            <div className='other-project-slide-wrapper' key={otherProject.index} onClick={() => setOpen(true)} >
                
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
                    {/* <p className='other-project-subtitle'>{otherProject.projectSubtitle}</p>
                    <p className='other-project-paragraph'>{otherProject.projectShortDescription}</p>
                    <p className='other-project-role'>{otherProject.projectPosition}</p> */}

                    {/* {otherProject.tecStack.map((item, index) => 
                        <p className='other-project-tecstack'>
                        {item}        
                        </p>
                        )} */}

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
                            <p className='modal-project-paragraph'>
                                {item}        
                            </p>
                        )}
                    </div>
                </article>
            </Modal>
        </>
    )
}