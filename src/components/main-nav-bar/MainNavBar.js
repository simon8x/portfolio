import { useContext } from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../hamburguer-menu/HamburguerMenu'
import { LangMenu } from '../language-menu/LanguageMenu'
import { LanguageContext } from '../../context/LanguageContext'

export const MainNavBar = () => {
  const { siteLang } = useContext( LanguageContext )
  return (
    <nav className='main-nav'>
      <div className='container main-nav-wrapper'>
                     
            {/* <a className='header-logo-link' href='/'> */}
            <Link to={'/'} className='header-logo-link'>
              <div className='my-self-card'>    
                <div className='avatar-wrapper'>
                  {/* <div className='back-avatar-circle'></div> */}
                  <img className='self-avatar' src={`${process.env.PUBLIC_URL}/assets/images/me/astronaut-avatar.png`} alt=''/>
                </div>
                <div className='data-wrapper'>
                  <h4 className='self-name'>Simón Yamil Ibalo</h4>
                  <span className='self-slogan'>
                    { 
                      (siteLang === 'EN') 
                      ? "UX/UI Engineer and beyond..."
                      : "UX/UI Engineer y algo más..."
                    }
                    
                    </span>
                </div>
              </div>
            </Link>
     
        
        <ul className='controls-list'>
          <li className='control-item'>
            <LangMenu/>
             {/* onClick={ handleLanguage } */}
             {/* {settings.language === 'EN' ? 'EN' : 'ES'} */}
          </li>
          {/* <li className='control-item'>
            <button className='control-item-btn'  */}
             {/* onClick={ handleLanguage } */}
            {/* > */}
              {/* EN */}
              {/* {settings.language === 'EN' ? 'EN' : 'ES'} */}
              {/* </button>
          </li> */}
          <li className='control-item'>
            <HamburgerMenu />
            {/* <button 
              className='control-item-btn'  */}
               {/* onClick={ handleTheme } */}
              {/* > */}
              {/* {settings.theme === 'night'  
               ? <img className='control-item-btn-icon' src='assets/images/common/icons/icon-day-mode.svg' alt=''/> 
               : <img className='control-item-btn-icon' src='assets/images/common/icons/icon-night-mode.svg' alt=''/>}
              */}
              {/* <img className='control-item-btn-icon' src='assets/images/icons/icon-day-mode.svg' alt=''/>
            </button> */}
          </li>
        </ul>
      </div>
      {/* <a href="/">HOME</a> 
      <a href="/projects">PROJECTS</a> 
      <a href="/testimonial/">TESTIMONIAL</a> 
      <a href="/track-record">TRACKRECORD</a>  */}
    </nav>
  )
}
