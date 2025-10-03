import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { useContext } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Testimonial } from "../../components/testimonial/Testimonial";
import { BackgroundShapes } from "../../components/background-shapes/BackgroundShapes";

import { recomendationsData } from '../../data/recomendationsContent';
import { LanguageContext } from '../../context/LanguageContext';


export const Testimonials = () => {

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
          <section className='testimonial-section'>
              <div className='testimonial-wrapper'>
                <div className='header-section'>
                  <h2 className='section-title flotate'>
                    {recomendationsData[0].headLine[siteLang]}
                  </h2>
                </div>
                <div className='section-testimonial-content'>
                  <Slide indicators={indicators} {...properties} canSwipe={true}>
                    {recomendationsData.map(recomendacion => (
                      <div key={recomendacion.name}>
                        <Testimonial recomendacion={recomendacion} />
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