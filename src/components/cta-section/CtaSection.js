import React from 'react'
import { Link } from 'react-router-dom';



export const CtaSection = (props) => {

  const getIcon = (id) => {
    switch (id) {
      case 1:
        return `${process.env.PUBLIC_URL}/assets/images/icons/icon-work.png`;
      case 2:
        return `${process.env.PUBLIC_URL}/assets/images/icons/icon-projects.png`;
      case 3:
        return `${process.env.PUBLIC_URL}/assets/images/icons/icon-tr.png`;
      default:
        return `${process.env.PUBLIC_URL}/assets/images/icons/icon-testimonial.png`;
    }
  };

  return (
    <div className='cta-container'>
        <Link to ={props.target}>
          <header className='cta-header'>
              <h3 className='cta-title'>{props.title}</h3>   
              <div className='cta-icon-wrapper'>
              <img className='cta-icon-img' src={getIcon(props.id)} alt='' />
              </div>     
          </header>
          <div className='cta-body'>
              <p className='cta-pharagrap'>{props.description}</p>
          </div>
        </Link>
    </div>
  )
}
