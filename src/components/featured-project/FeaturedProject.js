import React from 'react'

export const FeaturedProject = ({ featuredProject }) => (
       
    <div className='project-slide-wrapper' key={featuredProject.index}>
        <div className='project-slide-detail-col'>

            <h4 className='featured-project-name'>{featuredProject.projectName}</h4>
            <p className='featured-project-subtitle'>{featuredProject.projectSubtitle}</p>
            <p className='featured-project-paragraph'>{featuredProject.projectShortDescription}</p>
            <p className='featured-project-role'>{featuredProject.projectPosition}</p>

            {featuredProject.tecStack.map((item, index) => 
                <p className='featured-project-tecstack'>
                    {item}        
                </p>
            )}

        </div>
        <div className='project-slide-image-col'>

            <div className='featured-project-img-wrapper'>
                <img className='featured-project-img' src={featuredProject['heroImageUrl']} alt=''/>
            </div>

        </div>
    </div>
)