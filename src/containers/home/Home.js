import React from 'react'
import {MainNavBar} from "../../components/main-nav-bar/MainNavBar"
export const Home = () => {
  return (
    <>
      <div className="background-shapes">
        <svg className='center-top-shape' width="100%" height="100%" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill='none' d="M24 0L29.6129 17.2746H47.7764L33.0818 27.9508L38.6946 45.2254L24 34.5491L9.30537 45.2254L14.9182 27.9508L0.223587 17.2746H18.3871L24 0Z"/>
        </svg>
        <svg className='center-bottom-shape' width="100%" height="100%" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill='none' d="M24 0L29.6129 17.2746H47.7764L33.0818 27.9508L38.6946 45.2254L24 34.5491L9.30537 45.2254L14.9182 27.9508L0.223587 17.2746H18.3871L24 0Z"/>
        </svg>
        <svg className='left-center-shape' width="100%" height="100%" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill='none' d="M24 0L29.6129 17.2746H47.7764L33.0818 27.9508L38.6946 45.2254L24 34.5491L9.30537 45.2254L14.9182 27.9508L0.223587 17.2746H18.3871L24 0Z"/>
        </svg>
        <svg className='right-center-shape' width="100%" height="100%" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill='none' d="M24 0L29.6129 17.2746H47.7764L33.0818 27.9508L38.6946 45.2254L24 34.5491L9.30537 45.2254L14.9182 27.9508L0.223587 17.2746H18.3871L24 0Z"/>
        </svg>
        {/* <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#FF007F"/>
        </svg> */}
      </div>
      <header className='header'>
        <MainNavBar />
      </header>
      <main className='main-section'>
        <div className='home-wrapper'>
          <div className='hero-section'>
            <div className='container'>
              <h1 className='hero-text'>I have been developing my career working on software projects for more than 10 years. I have played different roles in this story. I want to share some big and small epics so you know where my skills come from.</h1>
            </div>
          </div>
          <div className='container'>
            <div className='bubles-section'>
              <div className='single-buble-card'>
                <div className='buble-wrapper'>
                  <img 
                    className='buble-image'
                    src='./assets/images/icons/testimonial.png' 
                    alt=''
                  />              
                </div>
                <h3 className='buble-card-title'>testimonial</h3>
              </div>
              <div className='single-buble-card'>
                <div className='buble-wrapper'>
                  <img 
                    className='buble-image'
                    src='./assets/images/icons/portfolio.png' 
                    alt=''
                  />              
                </div>
                <h3 className='buble-card-title'>projects</h3>
              </div>
              <div className='single-buble-card'>
                <div className='buble-wrapper'>
                  <img 
                    className='buble-image'
                    src='./assets/images/icons/cv.png' 
                    alt=''
                  />              
                </div>
                <h3 className='buble-card-title'>track record</h3>
              </div>
            </div>
          </div>
        </div>
      </main>  
    </>
  )
}
