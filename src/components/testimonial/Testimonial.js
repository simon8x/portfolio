import {useContext} from 'react'

import { LanguageContext } from '../../context/LanguageContext';


export const Testimonial = ({ recomendacion }) => {
    
    const { siteLang } = useContext(LanguageContext);
    
    return (
        <div className='single-testimonial-slide' key={recomendacion.index}>
            <div className='quote-wrapper'>
                {recomendacion.text[siteLang].map((item, index) => 
                    <p className='testimonial-paragraph'>
                        {item}        
                    </p>
                )}
            </div>
            
            <div className='testimonial-author-wrapper'>
                <div className='testimonial-author-avatar-wrapper'>
                    <img className='testimonial-author-avatar-img' src={recomendacion['avatarUrl']} alt=''/>
                </div>
                <div className='testimonial-author-data-wrapper'>
                    <h4 className='testimonial-author-name'>{recomendacion.name}</h4>
                    <span className='testimonial-author-position'>{recomendacion.position}</span>
                </div>
            </div>
        </div>
  )
}