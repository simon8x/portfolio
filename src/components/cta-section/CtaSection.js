import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ExitNavigateContext } from '../../context/ExitNavigateContext';
import { finishAppearAnimation, useAppearOnView } from '../../utils/appear';

export const CtaSection = (props) => {
  const { appearRef, enterClass } = useAppearOnView();
  const requestNavigate = useContext(ExitNavigateContext);
  const extraClassName = props.className == null ? '' : ' ' + props.className;

  const handleClick = (event) => {
    if (requestNavigate == null) {
      return;
    }
    event.preventDefault();
    requestNavigate(props.target);
  };

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
    <div
      ref={appearRef}
      className={'cta-container hover-enlarge' + extraClassName + enterClass}
      style={props.style}
      onAnimationEnd={finishAppearAnimation}
    >
        <Link to={props.target} onClick={handleClick}>
          <header className='cta-header'>
              <h3 className='cta-title'>{props.title}</h3>   
              <div className='cta-icon-wrapper'>
              <img className='cta-icon-img flotate' src={getIcon(props.id)} alt='' />
              </div>     
          </header>
          <div className='cta-body'>
              <p className='cta-pharagrap'>{props.description}</p>
          </div>
        </Link>
    </div>
  )
}
