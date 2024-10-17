import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { useState } from 'react';

import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { FeaturedProject } from "../../components/featured-project/FeaturedProject";
import { OtherProject } from "../../components/other-project/OtherProject";
import { BackgroundShapes } from "../../components/background-shapes/BackgroundShapes";

export const Projects = () => {

  const featuredProjectsData = [
      {
        "projectId": "1",
        "heroImageUrl": "/assets/images/projects/nwayplay/nwayplay-featured-slider.png",
        "projectName": "nwayplay",
        "projectSubtitle": "NFT Marketplace",
        "projectPosition": "Web UI developer",
        "projectShortDescription": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "2",
        "heroImageUrl": "/assets/images/projects/ogj/ogj-featured-slider.png",
        "projectName": "Olympics Games Jam",
        "projectSubtitle": "Product Page",
        "projectPosition": "Web UI developer",
        "projectShort-description": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "3",
        "heroImageUrl": "/assets/images/projects/mimuju/mimuju-featured-slider.png",
        "projectName": "Mimuju",
        "projectSubtitle": "Ed Tech Web App",
        "projectPosition": "Web UI developer",
        "projectShort-description": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "4",
        "heroImageUrl": "/assets/images/projects/autotest/autotest-featured-slider.png",
        "projectName": "Autotest",
        "projectSubtitle": "Cars Magazzine",
        "projectPosition": "Web UI developer",
        "projectShort-description": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
    ];

    const otherProjectsData = [
      {
        "projectId": "1",
        "heroImageUrl": "/assets/images/projects/nwayplay/nwayplay-featured-slider.png",
        "projectName": "NNnwayplay",
        "projectSubtitle": "NFT Marketplace",
        "projectPosition": "Web UI developer",
        "projectShortDescription": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "2",
        "heroImageUrl": "/assets/images/projects/ogj/ogj-featured-slider.png",
        "projectName": "OOOlympics Games Jam",
        "projectSubtitle": "Product Page",
        "projectPosition": "Web UI developer",
        "projectShort-description": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "3",
        "heroImageUrl": "/assets/images/projects/mimuju/mimuju-featured-slider.png",
        "projectName": "MMMimuju",
        "projectSubtitle": "Ed Tech Web App",
        "projectPosition": "Web UI developer",
        "projectShort-description": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "4",
        "heroImageUrl": "/assets/images/projects/autotest/autotest-featured-slider.png",
        "projectName": "AAAAutotest",
        "projectSubtitle": "Cars Magazzine",
        "projectPosition": "Web UI developer",
        "projectShort-description": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "1",
        "heroImageUrl": "/assets/images/projects/nwayplay/nwayplay-featured-slider.png",
        "projectName": "NNnwayplay",
        "projectSubtitle": "NFT Marketplace",
        "projectPosition": "Web UI developer",
        "projectShortDescription": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "2",
        "heroImageUrl": "/assets/images/projects/ogj/ogj-featured-slider.png",
        "projectName": "OOOlympics Games Jam",
        "projectSubtitle": "Product Page",
        "projectPosition": "Web UI developer",
        "projectShort-description": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "3",
        "heroImageUrl": "/assets/images/projects/mimuju/mimuju-featured-slider.png",
        "projectName": "MMMimuju",
        "projectSubtitle": "Ed Tech Web App",
        "projectPosition": "Web UI developer",
        "projectShort-description": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
      {
        "projectId": "4",
        "heroImageUrl": "/assets/images/projects/autotest/autotest-featured-slider.png",
        "projectName": "AAAAutotest",
        "projectSubtitle": "Cars Magazzine",
        "projectPosition": "Web UI developer",
        "projectShort-description": "A big challenge, an small team from Argentina working with a team from Corea and other from USA",
        "tecStack": [
          "Sass",
          "MaterializeCss",
          "Html5",
          "ReactJs",
        ],
      },
    ];

  const indicators = (index) => (<div className="indicator"></div>);

  const properties = {
    prevArrow: <button className='nav-arrow prev-arrow'>
      <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" /></svg>
    </button>,
    nextArrow: <button className='nav-arrow next-arrow'>
      <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" /></svg>
    </button>
  }

  // const [activeItem, setActiveItem] = useState(0)


  // const handleClick = () =>{
  //   alert(`ckeado en: `)  //${recomendacion.name} undefined
  // }

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
              <h2 className='section-title'>Some featured projects</h2>
            </div>
            <div className='section-featured-projects'>
              {/* <div className="panel-overlay"></div> */}
              {/* <img className='testimonial-icon' src='assets/images/testimonial/quote-icon.png' alt=''/> */}
              <Fade indicators={indicators} {...properties}>
                {featuredProjectsData.map(featuredProject => (
                  <div key={featuredProject.name}>
                    <FeaturedProject featuredProject={featuredProject} />
                  </div>
                ))}
              </Fade>

            </div>
          </div>
          <div className='side-projects'>

            <div className='header-section'>
              <h2 className='section-title'>Some other projects</h2>
            </div>

            <div className='section-other-projects'>
              {/* <div className="panel-overlay"></div> */}
              {/* <img className='testimonial-icon' src='assets/images/testimonial/quote-icon.png' alt=''/> */}
              <Slide indicators={indicators} {...properties} slidesToScroll={1} slidesToShow={6} >
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

