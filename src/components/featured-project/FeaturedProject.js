import React from 'react'
import { TechStack } from '../tech-stack/TechStack'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './_custom-modal.css'

export const FeaturedProject = ({ featuredProject }) => {
    const [open, setOpen] = React.useState(false);
    return(   
        <>
            <div className='project-slide-wrapper' key={featuredProject.index} onClick={() => setOpen(true)} >
                
                <div className='project-slide-detail-col'>
                    <div className='featured-project-header'>
                        <h4 className='featured-project-name'>{featuredProject.projectName}</h4>
                        <p className='featured-project-subtitle'>{featuredProject.projectSubtitle}</p>
                    </div>
                    <div className='featured-project-body'>
                        <p className='featured-project-paragraph'>{featuredProject.projectShortDescription}</p>
                    </div>
                    <div className='featured-project-footer'>
                        <p className='featured-project-role'>Role: {featuredProject.projectPosition}</p>
                        <TechStack stack={featuredProject.tecStack}/>
                    </div>
                </div>

                <div className='project-slide-image-col'>
                    <div className='featured-project-img-wrapper'>
                        <img className='featured-project-img' src={featuredProject['heroImageUrl']} alt=''/>
                    </div>

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
                    <div className='modal-hero-banner-wrapper'>
                        <img className='modal-hero-banner-img' src={featuredProject.projectImageUrl} alt=''/>
                    </div>

                    <h1 className='modal-project-name'>{featuredProject.projectName}</h1>
                    <h4 className='modal-project-subtitle'>{featuredProject.projectSubtitle}</h4>
                    <p className='modal-project-date'>{featuredProject.projectDate}</p>
                    <div className='modal-stack-wrapper'>
                        <TechStack stack={featuredProject.tecStack}/>
                    </div>
                    <div className='modal-long-description-wrapper'>
                        {featuredProject.projectLongDescriptionText.map((item, index) => 
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