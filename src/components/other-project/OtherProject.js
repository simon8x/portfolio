import React from 'react'

export const OtherProject = ({ otherProject }) => (
       
    <div className='other-project-slide-wrapper' key={otherProject.index}>
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

    </div>
)