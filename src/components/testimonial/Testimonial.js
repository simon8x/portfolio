import React from 'react'

export const Testimonial = ({ recomendacion }) => (

        <div className='single-testimonial-slide' key={recomendacion.index}>
            <div className='quote-wrapper'>
                {recomendacion.text.map((item, index) => 
                    <p className='testimonial-paragraph'>
                        {item}        
                    </p>
                )}
            </div>
            
            <div className='testimonial-author-wrapper'>
                <div className='testimonial-author-avatar-wrapper'>
                    <img className='testimonial-author-avatar-img' src={recomendacion['avatar-url']} alt=''/>
                </div>
                <div className='testimonial-author-data-wrapper'>
                    <h4 className='testimonial-author-name'>{recomendacion.name}</h4>
                    <span className='testimonial-author-position'>{recomendacion.position}</span>
                </div>
            </div>
        </div>
  )