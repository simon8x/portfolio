import React from 'react'
import { TechStack } from '../tech-stack/TechStack'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export const FeaturedProject = ({ featuredProject }) => {
    const [open, setOpen] = React.useState(false);
    return(   
        <>
            <div className='project-slide-wrapper' key={featuredProject.index} onClick={() => setOpen(true)} >
                <div className='project-slide-detail-col'>

                    <h4 className='featured-project-name'>{featuredProject.projectName}</h4>
                    <p className='featured-project-subtitle'>{featuredProject.projectSubtitle}</p>
                    <p className='featured-project-paragraph'>{featuredProject.projectShortDescription}</p>
                    <p className='featured-project-role'>{featuredProject.projectPosition}</p>

                    {/* {featuredProject.tecStack.map((item, index) => 
                        <p className='featured-project-tecstack'>
                            {item}        
                        </p>                
                    )} */}

                    <TechStack stack={featuredProject.tecStack}/>

                </div>
                <div className='project-slide-image-col'>

                    <div className='featured-project-img-wrapper'>
                        <img className='featured-project-img' src={featuredProject['heroImageUrl']} alt=''/>
                    </div>

                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <h2>Big modal</h2>
                <h4 className='other-project-name'>{featuredProject.projectName}</h4>
                <h4 className='other-project-name'>{featuredProject.projectName}</h4>
                <h4 className='other-project-name'>{featuredProject.projectName}</h4>
                <h4 className='other-project-name'>{featuredProject.projectName}</h4>
                <h4 className='other-project-name'>{featuredProject.projectName}</h4>
                <h4 className='other-project-name'>{featuredProject.projectName}</h4>
                <h4 className='other-project-name'>{featuredProject.projectName}</h4>
                <h4 className='other-project-name'>{featuredProject.projectName}</h4>
                <h4 className='other-project-name'>{featuredProject.projectName}</h4>
            </Modal>
        </>
    )
}