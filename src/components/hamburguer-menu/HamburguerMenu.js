import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el clic y alternar el estado
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="hamburger-menu">
      <button className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <ul className={`menu-list ${isOpen ? 'show' : ''}`}>
        <li>
          <Link 
            className='link-item'
            to='/projects'
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            className='link-item'
            to='/track-record'
          >
            Track Record
          </Link>
        </li>
        <li>
          <Link 
            className='link-item'
            to='/testimonial'
          >
            Testimonial
          </Link>
        </li>
        {/* <li>
          <Link 
            className='link-item'
            to='/about'
          >
            About me
          </Link>
        </li> */}
      </ul>
    </li>
  );
};

export default HamburgerMenu;