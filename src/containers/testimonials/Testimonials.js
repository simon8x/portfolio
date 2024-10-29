import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { useState } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Testimonial } from "../../components/testimonial/Testimonial";
import { BackgroundShapes } from "../../components/background-shapes/BackgroundShapes";

export const Testimonials = () => {

  const recomendacionesData = [
    {
      "text": [
        "I had the pleasure of managing a project where Simón Yamil Ibalo served as the frontend engineer for the nWayPlay Marketplace. Despite being based in South Korea while Simón was in Argentina, our collaboration was seamless and highly productive, thanks to Simón's exceptional communication skills and dedication.",
        "Simón demonstrated outstanding technical expertise in frontend development, creating a user-friendly and visually appealing interface for the marketplace. His meticulous attention to detail and problem-solving abilities were pivotal in implementing complex features and optimizing the user experience.",
        "Even across time zones, Simón's commitment to excellence never wavered. His ability to deliver high-quality code and innovative solutions significantly enhanced the nWayPlay Marketplace, making it a seamless and efficient platform for NFT transactions.",
        "I highly recommend Simón for any technical role. His expertise, professionalism, and work ethic will be a tremendous asset to any team.",
      ],
      "avatar-url": `${process.env.PUBLIC_URL}/assets/images/testimonial/jontae-choi.jpg`,
      "name": "Jongtae Choi",
      "position": "Business Strategy and Partnership | Web3",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "I am pleased to provide a strong recommendation for Simón Ibalo, who I had the pleasure of working with as a front end engineer on nWay's NFT Marketplace project. Simon had strong technical expertise and quickly grasped the project requirements. He was able to architect complex React components and features, often suggesting improvements. He has solid problem skills and has a strong attention to the quality of his work.",
        "I highly recommend Simón as a talented and versatile front end engineer and web developer for any project."
      ],
      "avatar-url": `${process.env.PUBLIC_URL}/assets/images/testimonial/rene-hakiki.jpg`,
      "name": "Rene Hakiki",
      "position": "Executive Producer - Video Game, Interactive Entertainment, AR/VR/XR, Web3 DeFi blockchain & NFT, Development & Production.",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "We worked with Simon for almost 2 years, and if I have to highlight qualities, one of them is his professionalism when it comes to handling complex tasks in a short time. He was always up to the quality and challenges presented. He attended meetings with clients and managed to carve out an important place not only to showcase his work but also to propose new features and offer superior solutions.",
        "He is a great person, and I would not hesitate to work with him again."
      ],
      "avatar-url": `${process.env.PUBLIC_URL}/assets/images/testimonial/mati-munoz.jpg`,
      "name": "Matias Muñoz",
      "position": "Project Manager / Scrum Master / Software Engineer",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "Simón is a creative person who knows how to deal with clients and analyze their needs beyond what they ask for.",
        "In this company, we worked together on several projects where he stood out by adding value to the product and the relationship with the clients, always going a bit further than what was agreed upon.",
        "He adapts very well to different internal communication schemes and new tools."
      ],
      "avatar-url": `${process.env.PUBLIC_URL}/assets/images/testimonial/mati-mascazzinni.jpg`,
      "name": "Matias Mascazzini",
      "position": "Web developer that builds products for people with Ruby on Rails",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "Excellent teacher! He not only taught me how to develop software but also made the theory interesting.",
        "Always looking for ways to inspire, he worked on the individual potential of his students. My current career as a developer started with him.",
        "As a professional, his leadership and technical skills always create an excellent work environment."
      ],
      "avatar-url": `${process.env.PUBLIC_URL}/assets/images/testimonial/nelson-nunez.jpg`,
      "name": "Nelson Nuñez",
      "position": "Software Developer | .NET",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "I was Simon's student when he was an Instructor at the Informatorio (Laboratorio de Aplicaciones Informáticas) in its opening year, 2016.",
        "Afterward, we stayed in contact at local events, as Simon has been actively participating in the emerging software development community in the northeast of Argentina for many years.",
        "I learned many things from him that I now consider invaluable, and I recommend him for his experience and dynamic way of working in a team."
      ],
      "avatar-url": `${process.env.PUBLIC_URL}/assets/images/testimonial/juan-martinez.jpg`,
      "name": "Juan Gabriel Martínez",
      "position": "Software Developer",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "Simón is the best mentor/tutor in programming I’ve ever had, and he’s the one who inspired me to keep studying.",
        "Always friendly and energetic, he is eager to teach you everything he knows and, at the same time, always willing to keep learning.",
        "A great leader, with a creativity I’ve rarely seen, capable of adding immense value to any project."
      ],
      "avatar-url": `${process.env.PUBLIC_URL}/assets/images/testimonial/facu-costa.jpg`,
      "name": "Facundo Costa",
      "position": "Test Automation Engineer at Solvd, Inc.",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "I worked with Simon on a few projects. Honestly, I was amazed by his way of working and even more by his personality. His positive attitude is very valuable.",
        "Creative, intelligent, and supportive, without a doubt, he can handle any task presented to him, with an analytical capacity and understanding rarely seen. He is an outstanding professional, and it was a real pleasure to work with him."
      ],
      "avatar-url": `${process.env.PUBLIC_URL}/assets/images/testimonial/david-sanchez.jpg`,
      "name": "David Sánchez Leiva",
      "position": "Sr Software Developer | Magento | Adobe Commerce | WordPress",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    },
    {
      "text": [
        "Simón is an incredible person, both professionally and personally.",
        "With solid technical and mathematical knowledge, he always has a solution to the problems that arise when analyzing and developing simple and complex solutions.",
        "A great motivator, he is one of those people you always enjoy working with."
      ],
      "avatar-url": `${process.env.PUBLIC_URL}/assets/images/testimonial/brian-stanley.jpg`,
      "name": "Brian Stanley",
      "position": "CTO at uugot.it",
      "linkedin-link": "https://www.linkedin.com/in/simonibalo/#recommendations"
    }
];


  const indicators = (index) => (<div className="indicator bg-red"></div>);

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
        <section className='testimonial-section'>

            <div className='testimonial-wrapper'>
              <div className='header-section'>
                <h2 className='section-title'>See what others say about working with me</h2>
              </div>
              <div className='section-testimonial-content'>
                {/* <div className="panel-overlay"></div> */}
                {/* <img className='testimonial-icon' src='assets/images/testimonial/quote-icon.png' alt=''/> */}
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
          </div>
      </main>

    </>

  )
}