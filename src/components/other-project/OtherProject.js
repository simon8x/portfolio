import React from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { TechStack } from '../tech-stack/TechStack'

export const OtherProject = ({ otherProject }) => {
    const [open, setOpen] = React.useState(false);
    return(
        <>
        <div className='other-project-slide-wrapper' key={otherProject.index} onClick={() => setOpen(true)} >
            {/* <button className="button" onClick={() => setOpen(true)}> */}
            
            <div className='other-project-slide-image'>
                <div className='other-project-img-wrapper'>
                    <img className='other-project-img' src={otherProject['heroImageUrl']} alt=''/>
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
                    {/* </button> */}

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
                        <img className='modal-hero-banner-img' src={otherProject.projectImageUrl} alt=''/>
                    </div>

                    <h1 className='modal-project-name'>{otherProject.projectName}</h1>
                    <h4 className='modal-project-subtitle'>{otherProject.projectSubtitle}</h4>
                    <p className='modal-project-date'>{otherProject.projectDate}</p>
                    <div className='modal-stack-wrapper'>
                        <TechStack stack={otherProject.tecStack}/>
                    </div>
                    <div className='modal-long-description-wrapper'>
                        {otherProject.projectLongDescriptionText.map((item, index) => 
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