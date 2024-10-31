import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { useState } from 'react';

import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { FeaturedProject } from "../../components/featured-project/FeaturedProject";
import { OtherProject } from "../../components/other-project/OtherProject";
import { BackgroundShapes } from "../../components/background-shapes/BackgroundShapes";


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

  const featuredProjectsData = [
    {
    	"projectId": "1",
    	"projectDate": "from 05/2021 to 10/2023",
      "heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/nwayplay/nwayplay-featured-slider.png`,
    	"projectName": "nwayplay",
    	"projectSubtitle": "NFT Marketplace",
    	"projectPosition": "Web UI developer",
    	"projectShortDescription": "A big challenge, an small team from Argentina working with a team from Corea and other from USA. We created a marketplace . Nwayplay is Flow’s Olympic-related digital product sales platform in partnership with the IOC, and comes with an official secondary marketplace.",
    	"tecStack": [
      	"Sass",
      	"MaterializeCss",
      	"Html5",
      	"ReactJs",
        "Redux",
        "Aws"
    	],
      "projectLongDescriptionText":[
        "To get this project off the ground, three teams joined forces: the Blockchain team in Korea, the Marketing team in the US, and the Development team in Argentina.",
        "I worked on this project from scratch, with two other full stack developers, and was responsible for developing every visual aspect of the NFT marketplace for the International Olympic Committee.",
        "I worked on defining and developing reusable React components across the platform. At the beginning of the project, I was the pixel perfect guy, and then I ended up being the guy between the UX lead and the other two developers.",
        "Initially, the roadmap was six months, but we extended the contract by offering a new project as a feature of the MKP, but that's another story.",
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/nwayplay/nwp-featured-2.png`,
      "projectLogo":`${process.env.PUBLIC_URL}/assets/images/projects/nwayplay/nwayplay-logo.png`,
      "linkToSite": "https://nwayplay.com/",
      "linkToTrailer": "https://www.youtube.com/watch?v=yOfRLiU099c",
      "linkToBlog":"https://blog.nwayplay.com/",
    },
    {
    	"projectId": "2",
      "projectDate": "from 11/2021 to 10/2023",
    	"heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/nwpcstool/cstoo-hero.png`,
    	"projectName": "CS Tool",
    	"projectSubtitle": "Customer Service Tool for NFT MKP",
    	"projectPosition": "UX designer",
    	"projectShortDescription": "In the middle of a large project, we detected several information needs for decision making on the client side. We detected the need and proposed the development of the solution.",
    	"tecStack": [
      	"Sass",
      	"MaterializeCss",
      	"Html5",
      	"ReactJs",
        "Mui",
        "Miro",
        "Aws"
    	],
      "projectLongDescriptionText":[
        "Fact: The NFT Marketplace client takes their decisions based on blockchain data",
        "Opportunity: We proposed the development of a customer service tool that allowed them to manage marketplace operations and some custom content management features. All the management based on the marketplace data.",
        "My role: Analyze processes, prototype features and workflows.Document, demonstrate, and get feedback from the stakeholders. Analyze data and define metrics to model a marketplace dashboard.",
        "I created a document by feature every week, we discuss about it then we develop it",
        "Featured fact: By analyzing transaction volumes and money, we find a way to detect suspicious fraudulent transactions between anonymous users.",
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/nwpcstool/cstoo-hero.png`,
      "projectLogo":"logo url",
      "linkToSite": "",
      "linkToTrailer": "",
      "linkToBlog":"",
    },

    {
    	"projectId": "3",
    	"heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/mimuju/mimuju-featured-slider.png`,
    	"projectName": "Mimuju",
    	"projectSubtitle": "Ed Tech Web App",
    	"projectPosition": "UX / UI Engineer",
    	"projectShortDescription": "We created from the scratch an edTech web app to help teachers, tutors and directors to follow up the education process for elementary school",
    	"tecStack": [
      	"Sass",
      	"MaterializeCss",
      	"Html5",
      	"ReactJs",
    	],
  	"projectLongDescriptionText":[
    	  "I have been part of the process from idea to implementation. I have been part of Agile Inception Deck, and Design Thinking activities with end-users and stakeholders about the product discovery.",
    	  "My role: I have done surveys, empathy maps,  interviews, user flows, wireframes and implemented prototypes into code.",
    	  "I have developed the UI of the web app. I have driven the development of the mobile app UI.",
    	  "The app allows the teachers to keep the class roadmap on the phone. The teachers also was able to share daily activities, homework and official messages  with tutors.",
        "The app allows the tutors to be up to date. The app allows the directors to follow up the class readmap."
  	],
  	"projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/mimuju/mimuju-featured-modal.png`,
  	"projectLogo":"logo url",
  	"linkToSite": "",
  	"linkToBlog":"",
	},


  	{
    	"projectId": "4",
      "projectDate": "from 09/2018 to 12/2018",
    	"heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/autotest/autotest-featured.png`,
    	"projectName": "Autotest",
    	"projectSubtitle": "Cars Magazzine",
    	"projectPosition": "Consultant",
    	"projectShortDescription": "A prestigious specialized automotive magazine with more than 15 years of successful history needed to migrate from paper to the digital world. Then...",
    	"tecStack": [
      	"WordPress",
        "Acf",
      	"CSS",
      	"Html5",
      	"ReactJs",
    	],
      "projectLongDescriptionText":[
        "At Terciar we faced the challenge of accompanying a specialized magazine with more than 15 years of experience in its migration from paper to digital.",
        "We led its talented editorial team through its technological transition.",
        "We adapted many WordPress features to be able to contain various groups of technical information, making the editors' task easier. Ensuring that followers can consume the information as they are used to.",
        "My role: analyze needs, create and validate prototypes and lead development."
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/autotest/autotest-featured-slider.png`,
      "projectLogo":"logo url",
      "linkToSite": "",
      "linkToTrailer": "",
      "linkToBlog":"",
    },
  ];

  const otherProjectsData = [
    {
      "projectId": "1",
      "projectDate": "from 05/2018 to 10/2020",
      "heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/ogj/ogj-featured-slider.png`,
      "projectName": "Olympics Games Jam",
      "projectSubtitle": "Product Page",
      "projectPosition": "Web UI developer",
      "tecStack": [
        "Sass",
        "Html5",
        "ReactJs",
      ],
      "projectLongDescriptionText":[
      "At Tricks, we build a Product Page for the  Olympic Games Jam: Beijing 2022, the officially licensed play-to-earn multiplayer party game where players compete in a series of winter sports to earn Olympic NFT digital pins.",
      "My role: Front end developer"
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/ogj/ogj-modal.png`,
      "projectLogo":"logo url",
      "linkToSite": "https://olympicgamesjam.nwayplay.com/",
      "linkToTrailer": "https://www.youtube.com/watch?v=IUVaqRnHmUI",
      "linkToBlog":"https://blog.nwayplay.com/olympic-games-jam-beijing-2022-unveiled-918837a24add",
    },
    {
      "projectId": "2",
      "heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/foodtruckcc/ftcc-hero-image.jpg`,
      "projectName": "Food Truck Coin club",
      "projectSubtitle": "Product Page",
      "projectPosition": "Web UI developer",
      "tecStack": [
        "Sass",
        "Html5",
        "ReactJs",
      ],
      "projectLongDescriptionText":[
      "At Tricks, we build a Product Page for the  Food Truck Coin Club.",
      "Food Truck Coin Club is a collection of 10,000 unique Food Trucks composed of various attributes such as food and vehicle types and 1,000 lands based on real and fantastical places. These NFTs on the Ethereum Blockchain are your membership pass to the coin club where you can earn various tokens from nWay and Animoca Brands as well as gain access to other members-only benefits.",
      "My role: Front end developer"
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/foodtruckcc/featured-foodtruck.png`,
      "projectLogo":"logo url",
      "linkToSite": "https://foodtruckcoinclub.io/",
      "linkToTrailer": "https://www.youtube.com/watch?v=61nHR8_imqg",
    },
    {
      "projectId": "3",
      "heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/myheroacademia/myhero-hero.jpg`,
      "projectName": "My Hero Academia",
      "projectSubtitle": "Product Page",
      "projectPosition": "Web UI developer",
      "tecStack": [
        "Jquery",
        "Html5",
        "CSS",
    "Swiper"
      ],
      "projectLongDescriptionText":[
      "At Tricks, they rely on me to be responsible for maintenance and develop new features of an important games site.",
      "My Hero Academia is an action RPG developed by Xin Yuan Studio, a Chinese studio, and published by KOMOE Game Corporation for Asia, released on December 3rd 2020, Sony Pictures Television for the US, released on May 19th, A PLUS JAPAN for the EU, released on May 18th, And Bluetaku for the SEA, released on 2022.",
        "My role: Front end developer"
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/myheroacademia/myhero-modal.png`,
      "projectLogo":"logo url",
      "linkToSite": "https://www.myherogame.com/",
      "linkToTrailer": "https://www.youtube.com/watch?v=i_mgPnGT_-Y",
    },
    {
      "projectId": "4",
      "heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/nway/nway-image-hero.png`,
      "projectName": "nWay",
      "projectSubtitle": "Company Page",
      "projectPosition": "Web Master",
      "tecStack": [
        "WordPress",
        "Acf",
        "Html5",
        "CSS",
      ],
      "projectLongDescriptionText":[
      "At Tricks, they rely on me to be responsible for maintenance and develop new features nWay’s website, it was a big responsibility because, this was the biggest client of the company.",
      "About the client: nWay was founded in 2011 with the goal of creating fun console-quality multiplayer games for both the web and mobile platforms. All of nWay’s games will be free-to-play and will feature synchronous multiplayer gameplay. The company is led by gaming and startup veterans and is based in San Francisco.",
        "My role: Webmaster"
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/nway/nway-modal.png`,
      "projectLogo":"logo url",
      "linkToSite": "https://nway.com/",
      "linkToTrailer": "",
    },
    {
      "projectId": "5",
      "heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/identidad-digital/identidad-hero.png`,
      "projectName": "Identidad Digital",
      "projectSubtitle": "Company Page",
      "projectPosition": "Web Master",
      "tecStack": [
        "WordPress",
        "Divi",
        "Html5",
        "CSS",
      ],
      "projectLongDescriptionText":[
      "In Terciar I had the responsibility of managing projects with several clients that required web development. My mission, interview the client, understand the requirements, create a budget based on estimated time and materials.",
"Negotiate development stages. And sometimes also perform development, integrations and configurations on said sites. This site is one of many.",
"About the client: Identidad Digital. We are a technology company designed for people. We like what we do. And we do it with enthusiasm. We are thorough and very obsessive about details. If we start something, we don't stop until it's solved. We don't believe in problems, we believe in solutions. Because we understood that we have to be excellent at developing, and even better at listening."
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/identidad-digital/identidad-modal.png`,
      "projectLogo":"logo url",
      "linkToSite": "https://www.identidad-digital.com.ar/",
      "linkToTrailer": "",
    },
    {
      "projectId": "6",
      "heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/mercado-cultural/mc-hero-image.png`,
      "projectName": "Mercado Cultural",
      "projectSubtitle": "Digital Marketplace",
      "projectPosition": "Project Manager - Web Master",
      "tecStack": [
        "WordPress",
        "Woocommerce",
        "Html5",
        "CSS",
      ],
      "projectLongDescriptionText":[
        "Scenario: Before the existence of Spotify this client came to us as he owned the distribution rights to a folk music collection of around 1,000 albums. The client needed an e-commerce platform to sell their products.",
        "We developed a multivendor store for digital products using WooCommerce.",
        "We were recognized as the largest Chamamé store in the world, managing the collection and offering customers the flexibility to purchase individual tracks or entire albums.",
        "I integrated two essential plugins: one for vendor management, which allowed multiple sellers to create and manage their own profiles and stores within the marketplace, and another to control the download process, ensuring that each purchased file could only be downloaded once, after which the link would expire.",
        "This setup not only protected the integrity of the digital content but also provided a seamless experience for both vendors and customers."
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/mercado-cultural/mc-modal.png`,
      "projectLogo":"logo url",
      "linkToSite": "",
      "linkToTrailer": "",
    },
    {
      "projectId": "6",
      "heroImageUrl": `${process.env.PUBLIC_URL}/assets/images/projects/educacion/educacion-hero.png`,
      "projectName": "Ministry of Education",
      "projectSubtitle": "Institucional Portal",
      "projectPosition": "Web Master",
      "tecStack": [
        "WordPress",
        "Divi",
        "Html5",
        "CSS",
      ],
      "projectLongDescriptionText":[
      "In 2019, I was hired by the Ministry of Education of the Chaco Province to develop a portal that would enable over 50 departments to create internal pages and post updates. I began by designing a component system using wireframes and detailed documentation to specify the information needed for each component.",
"I then secured a license for a page builder to efficiently create reusable and customizable components. Over a period of 4 years, I managed the site remotely, holding regular meetings with various department stakeholders to identify needs and implement solutions.",
"The project contains more than 40 sections and 100 categories. I was responsible for periodic reporting, recommending best practices, and planning future improvements based on metrics. This was the largest project I’ve undertaken, and I led it entirely on my own. I drove this project as a part time job."
      ],
      "projectImageUrl":`${process.env.PUBLIC_URL}/assets/images/projects/educacion/ed-modal.png`,
      "projectLogo":"logo url",
      "linkToSite": "",
      "linkToTrailer": "",
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
                <h2 className='section-title'>Some other projects</h2>
              </div>
              <div className='section-other-projects'>
                {/* <div className="panel-overlay"></div> */}
                {/* <img className='testimonial-icon' src='assets/images/testimonial/quote-icon.png' alt=''/> */}
                {/* <Slide duration={0} transitionDuration={7000} {...properties} responsive={otherProjectResponsiveSettings} pauseOnHover={true} canSwipe={true} > */}
                <Slide indicators={indicators} {...properties} pauseOnHover={true} duration={7000} transitionDuration={0} canSwipe={true} responsive={otherProjectResponsiveSettings}>
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

