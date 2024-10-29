import { Link } from 'react-router-dom'
import HamburgerMenu from '../hamburguer-menu/HamburguerMenu'
// import { Home } from '../../containers/home/Home'
// import { Projects } from '../../containers/projects/Projects'
// import { Testimonial } from '../../containers/testimonial/Testimonial'
// import { TrackRecord } from '../../containers/track-record/TrackRecord'

export const MainNavBar = () => {
  return (
    <nav className='main-nav'>
      <div className='container main-nav-wrapper'>
                     
            {/* <a className='header-logo-link' href='/'> */}
            <Link to={'/'} className='header-logo-link'>
              <div className='my-self-card'>    
                <div className='avatar-wrapper'>
                  <div className='back-avatar-circle'></div>
                  <img className='self-avatar' src={`${process.env.PUBLIC_URL}/assets/images/me/simon8x-avatar1.png`} alt=''/>
                </div>
                <div className='data-wrapper'>
                  <h4 className='self-name'>Simón Yamil Ibalo</h4>
                  <span className='self-slogan'>UI Engineer and beyond...</span>
                </div>
              </div>
            </Link>
     
        
        <ul className='controls-list'>
          <li className='control-item'>
            <button className='control-item-btn' 
            // onClick={ handleLanguage }
            >
              EN
              {/* {settings.language === 'EN' ? 'EN' : 'ES'} */}
              </button>
          </li>
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
