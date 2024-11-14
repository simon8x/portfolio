import React from 'react'
import {MainNavBar} from "../../components/main-nav-bar/MainNavBar"
import { BackgroundShapes } from '../../components/background-shapes/BackgroundShapes'
import { Link } from 'react-router-dom'
import { CtaSection } from '../../components/cta-section/CtaSection'
export const Home = () => {
  return (
    <>
      <BackgroundShapes/>
      <header className='header'>
        <MainNavBar />
      </header>
      <main className='main-section'>
        {/* <img className='astro' src='./assets/images/bg/sastro1.png' alt="" /> */}
        <div className='home-wrapper'>
          <div className='hero-section hero-section'>
            <div className='container'>
              <h1 className='hero-text flotate'>I have been building my career in software development for over 10 years, taking on different roles along the way. I'd like to share some notable projects, both big and small, to give you an idea of where my skills originate.</h1>
            </div>
          </div>
          {/* <div className='falling-astronaut-container'>
            <img className='falling-astronaut-img' src={`${process.env.PUBLIC_URL}/assets/images/icons/astronaut.png`} alt=''/>
          </div> */}
          <div className='container'>
            <div className='cta-section'>
              <CtaSection id={1} target={"/testimonial"} title={"Talking Colleagues"} description={"Know what others say about working with me on a mission."}/>
              <CtaSection id={2} target={"/projects"} title={"Space Missions"} description={"Explore some project stories to better understand my background."}/>
              <CtaSection id={3} target={"/track-record"} title={"Track Record"} description={"Every job helps me grow, see the companies where I've worked."}/>
              {/* <CtaSection id={4} title={"Colegs3"} description={"description"}/>             */}
            </div>
            {/* <div className='bubles-section'>
              <div className='single-buble-card'>
                  <div className='buble-wrapper'>
                <Link 
                  className='link-item'
                  to='/testimonial'
                >
                    <div className='pulse'></div>
                    <img 
                      className='buble-image'
                      src='./assets/images/icons/testimonial.png' 
                      alt=''
                    />              
                </Link>
                  </div>
                <Link 
                  className='link-item'
                  to='/testimonial'
                >
                  <h3 className='buble-card-title'>testimonial</h3>
                </Link>
                </div>
                <div className='single-buble-card'>
                  <div className='buble-wrapper'>
              <Link 
                className='link-item'
                to='/projects'
              >
                  <div className='pulse'></div>
                    <img 
                      className='buble-image'
                      src='./assets/images/icons/portfolio.png' 
                      alt=''
                      />              
                      </Link>
                  </div>
                  <Link 
                className='link-item'
                to='/projects'
              >
                  <h3 className='buble-card-title'>projects</h3>
              </Link>
                </div>
                <div className='single-buble-card'>
                  <div className='buble-wrapper'>
              <Link 
                className='link-item'
                to='/track-record'
              >
                  <div className='pulse'></div>
                    <img 
                      className='buble-image'
                      src='./assets/images/icons/cv.png' 
                      alt=''
                    />              
                  </Link>
                  </div>
                  <Link 
                className='link-item'
                to='/track-record'
              >
                  <h3 className='buble-card-title'>track record</h3>
              </Link>
                </div>
            </div> */}
          </div>
        </div>
      </main> 
    </>
  )
}
