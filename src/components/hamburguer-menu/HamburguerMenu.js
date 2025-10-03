import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { menuContent } from '../../data/menuContent';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { siteLang } = useContext(LanguageContext);
  const currentMenu = menuContent[siteLang] || menuContent.EN;

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


{currentMenu.map(item => (
          <li key={item.id}>
            <Link
              to={item.target}
              className={({ isActive }) => `link-item ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)} // opcional: cerrar menú al clickear
            >
              {item.title}
            </Link>
          </li>
        ))}

        {/* <li>
          <Link 
            className={ ({ isActive }) => `link-item ${ isActive ? 'active' :''}`}
            to='/projects'
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            className={ ({ isActive }) => `link-item ${ isActive ? 'active' :''}`}
            to='/track-record'
          >
            Track Record
          </Link>
        </li>
        <li>
          <Link 
            className={ ({ isActive }) => `link-item ${ isActive ? 'active' :''}`}
            to='/testimonial'
          >
            Testimonial
          </Link>
        </li> */}
      </ul>
    </li>
  );
};

export default HamburgerMenu;