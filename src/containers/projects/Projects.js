import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { useState, useContext } from 'react';

import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { featuredProjectsData, otherProjectsData } from "../../data/projectsData";
import { FeaturedProject } from "../../components/featured-project/FeaturedProject";
import { OtherProject } from "../../components/other-project/OtherProject";
import { BackgroundShapes } from "../../components/background-shapes/BackgroundShapes";

import { LanguageContext } from '../../context/LanguageContext';

const otherProjectResponsiveSettings = [
  {
    breakpoint: 1000,
    settings: {
        slidesToShow: 7,
        slidesToScroll: 1
    }
  },
  {
      breakpoint: 800,
      settings: {
          slidesToShow: 6,
          slidesToScroll: 1
      }
  },
  {
    breakpoint: 700,
    settings: {
        slidesToShow: 5,
        slidesToScroll: 1
    }
},
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1
      }
  },
  {
    breakpoint: 400,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1
    }
  },
  {
    breakpoint: 300,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1
    }
}
];

export const Projects = () => {

  const { siteLang } = useContext(LanguageContext);
  const indicators = (index) => (<div className="indicator"></div>);

  const properties = {
    prevArrow: <button className='nav-arrow prev-arrow'>
      <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" /></svg>
    </button>,
    nextArrow: <button className='nav-arrow next-arrow'>
      <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" /></svg>
    </button>
  }

  return (

    <>
      <BackgroundShapes />
      <header className='header'>
        <MainNavBar />
      </header>
      <main className='main-section'>
        <div className='container'>
          <section className='prjects-section'>
            <div className='hero-projects'>
              <div className='header-section'>
                <h2 className='section-title flotate'>
                  { (siteLang === 'EN')
                    ? 'Some featured projects'
                    : 'Algunos proyectos destacados'
                  }
                  </h2>
              </div>
              <div className='section-featured-projects'>
                <Slide indicators={indicators} {...properties} pauseOnHover={true} duration={6000} transitionDuration={250} canSwipe={true}>              
                  {featuredProjectsData.map(featuredProject => (
                    <div key={featuredProject.name}>
                      <FeaturedProject featuredProject={featuredProject} />
                    </div>
                  ))}
                </Slide>
              </div>
            </div>
            <div className='side-projects'>
              <div className='header-section'>
                <h2 className='section-title flotate'>
                  { (siteLang === 'EN')
                    ? 'Some other projects'
                    : 'Otros proyectos'
                  }
                </h2>
              </div>
              <div className='section-other-projects'>
                <Slide indicators={false} {...properties} pauseOnHover={true} duration={0} transitionDuration={5000} canSwipe={true} responsive={otherProjectResponsiveSettings}>
                  {otherProjectsData.map(otherProject => (
                    <div key={otherProject.name}>
                      <OtherProject otherProject={otherProject} />
                    </div>
                  ))}
                </Slide>

              </div>
            </div>
          </section>
        </div>
      </main>

    </>

  )
}

