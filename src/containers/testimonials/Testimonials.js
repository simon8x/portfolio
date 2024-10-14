import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { useState } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Testimonial } from "../../components/testimonial/Testimonial";

export const Testimonials = () => {

  const recomendacionesData = [
    {
      "text": [
        "I had the pleasure of managing a project where Simón Yamil Ibalo served as the frontend engineer for the nWayPlay Marketplace. Despite being based in South Korea while Simón was in Argentina, our collaboration was seamless and highly productive, thanks to Simón's exceptional communication skills and dedication.",
        "Simón demonstrated outstanding technical expertise in frontend development, creating a user-friendly and visually appealing interface for the marketplace. His meticulous attention to detail and problem-solving abilities were pivotal in implementing complex features and optimizing the user experience.",
        "Even across time zones, Simón's commitment to excellence never wavered. His ability to deliver high-quality code and innovative solutions significantly enhanced the nWayPlay Marketplace, making it a seamless and efficient platform for NFT transactions.",
        "I highly recommend Simón for any technical role. His expertise, professionalism, and work ethic will be a tremendous asset to any team.",
      ],
      "avatar-url": "/assets/images/testimonial/jontae-choi.jpg",
      "name": "Jongtae Choi",
      "position": "Business Strategy and Partnership | Web3",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "I am pleased to provide a strong recommendation for Simón Ibalo, who I had the pleasure of working with as a front end engineer on nWay's NFT Marketplace project. Simon had strong technical expertise and quickly grasped the project requirements. He was able to architect complex React components and features, often suggesting improvements. He has solid problem skills and has a strong attention to the quality of his work.",
        "I highly recommend Simón as a talented and versatile front end engineer and web developer for any project."
      ],
      "avatar-url": "/assets/images/testimonial/rene-hakiki.jpg",
      "name": "Rene Hakiki",
      "position": "Executive Producer - Video Game, Interactive Entertainment, AR/VR/XR, Web3 DeFi blockchain & NFT, Development & Production.",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "Trabajamos con Simon durante casi 2 años y si tengo que destacar cualidades entre ellas esta su profesionalidad al momento de realizar tareas complejas en poco tiempo. Siempre estuvo a la altura de la calidad y de los desafíos presentados. Asistía a reuniones con los clientes y logro hacerse un lugar importante no solo para mostrar su trabajo sino también para proyectar nuevas funcionalidades y realizar propuestas superadoras.",
        "Es una gran persona y no dudaria volver a trabajar con él.spuesto a colaborar y encontrar soluciones efectivas. Un excelente compañero."
      ],
      "avatar-url": "/assets/images/testimonial/mati-munoz.jpg",
      "name": "Matias Muñoz",
      "position": "Project Manager / Scrum Master / Software Engineer",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "Simón es una persona creativa que sabe tratar con los clientes y analizar las necesidades de estos más allá de lo que ellos piden.",
        "En esta empresa, trabajamos en algunos proyectos juntos en los que se destaco por agregar valor al producto y a la relación con los clientes, siempre haciendo un poco más de lo pactado.",
        "Se adapta muy bien a diferentes esquemas de comunicación interna y a la utilización de herramientas nuevas."
      ],
      "avatar-url": "/assets/images/testimonial/mati-mascazzinni.jpg",
      "name": "Matias Mascazzini",
      "position": "Web developer that builds products for people with Ruby on Rails",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    }
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
      <header className='header'>
        <MainNavBar />
      </header>
      <main className='main-section'>
        
        <section className='testimonial-section'>
          <div className='container testimonial-wrapper'>
            <div className='header-section'>
              <h2 className='section-title'>See what others say about working with me</h2>
            </div>
            <div className='section-testimonial-content'>
              <div className="panel-overlay"></div>
              <img className='testimonial-icon' src='assets/images/testimonial/quote-icon.png' alt=''/>
              <Slide indicators={indicators} {...properties}>
                {recomendacionesData.map(recomendacion => (
                  <div key={recomendacion.name}>
                    <Testimonial recomendacion={recomendacion} />
                  </div>
                ))}
              </Slide>
            </div>
          </div>
        </section>
      </main>

    </>

  )
}