// Versión archivada de /testimonial: la grilla de cards la reemplazó, pero se conserva por
// si hay que volver al carrusel. No está ruteada ni importada, así que queda fuera del bundle.
// Para reactivarla hay que descomentar sus dos @import en styles.scss.

import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { useContext, useRef } from 'react';

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Testimonial } from "../../components/testimonial/Testimonial";
import { BackgroundShapes } from "../../components/background-shapes/BackgroundShapes";

import { recomendationsData } from '../../data/recomendationsContent';
import { LanguageContext } from '../../context/LanguageContext';


// Zoom no implementa gestos táctiles, así que el swipe se resuelve acá con su ref.
const SWIPE_THRESHOLD = 50;


export const TestimonialsCarousel = () => {

  const { siteLang } = useContext(LanguageContext);

  const slideshowRef = useRef(null);
  const touchStart = useRef(null);

  const indicators = (index) => (<div className="indicator"></div>);

  const properties = {
    prevArrow: <button className='nav-arrow prev-arrow'>
      <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" /></svg>
    </button>,
    nextArrow: <button className='nav-arrow next-arrow'>
      <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" /></svg>
    </button>
  }

  const slides = recomendationsData.map(recomendacion => (
    <div key={recomendacion.name}>
      <Testimonial recomendacion={recomendacion} />
    </div>
  ));

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  const handleTouchEnd = (event) => {
    const start = touchStart.current;
    touchStart.current = null;

    if (start == null || slideshowRef.current == null) {
      return;
    }

    const touch = event.changedTouches[0];
    const distanceX = touch.clientX - start.x;
    const distanceY = touch.clientY - start.y;

    // Solo se navega cuando el gesto es claramente horizontal, para no romper el scroll.
    if (Math.abs(distanceX) < SWIPE_THRESHOLD || Math.abs(distanceX) <= Math.abs(distanceY)) {
      return;
    }

    if (distanceX < 0) {
      slideshowRef.current.goNext();
      return;
    }

    slideshowRef.current.goBack();
  }


  return (

    <>
      <BackgroundShapes />
      <header className='header'>
        <MainNavBar />
      </header>
      <main className='main-section'>
        
        <div className='container'>
          <section className='testimonial-carousel-section'>
              <div className='testimonial-wrapper'>
                <div className='header-section'>
                  <h2 className='section-title flotate'>
                    {recomendationsData[0].headLine[siteLang]}
                  </h2>
                </div>
                <div
                  className='section-testimonial-content'
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <Zoom ref={slideshowRef} indicators={indicators} scale={0.9} autoplay={false} {...properties}>
                    {slides}
                  </Zoom>
                </div>
              </div>
          </section>
        </div>
      </main>

    </>

  )
}
