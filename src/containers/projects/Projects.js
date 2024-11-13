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
    	"projectShortDescription": "A big challenge: a small team from Argentina working alongside teams from Korea and the USA. Together, we created a marketplace. Nwayplay is Flow’s platform for Olympic-related digital product sales in partnership with the IOC, featuring an official secondary marketplace.",
    	"tecStack": [
      	"Sass",
      	"MaterializeCss",
      	"Html5",
      	"ReactJs",
        "Redux",
        "Aws"
    	],
      "projectLongDescriptionText":[
        "To bring this project to life, three teams joined forces: the Blockchain team in Korea, the Marketing team in the US, and the Development team in Argentina.",
        "I worked on this project from the ground up, alongside two other full stack developers, and was responsible for creating every visual aspect of the NFT marketplace for the International Olympic Committee.",
        "I focused on defining and developing reusable React components across the platform. Initially, I was the 'pixel-perfect' person, but over time, I became the bridge between the UX lead and the other two developers.",
        "Originally, the roadmap was set for six months, but we extended the contract by proposing a new project as an MKP feature. But that’s another story.",
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
    	"projectShortDescription": "During a large project, we identified several information needs essential for client-side decision-making. We recognized this gap and proposed a solution to address it.",
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
        "Fact: The NFT Marketplace client makes decisions based on blockchain data.",
        "Opportunity: We proposed developing a customer service tool to enable the client to manage marketplace operations and integrate custom content management features—all based on marketplace data.",
        "My role: Analyze processes, prototype features and workflows, document them, present to stakeholders, and gather feedback. Additionally, analyze data and define metrics to model a comprehensive marketplace dashboard.",
        "Each week, I created a feature-specific document, discussed it with the team, and then moved forward with development.",
        "Featured Fact: By analyzing transaction volumes and financial flows, we developed a method to detect suspicious or potentially fraudulent transactions between anonymous users.",
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
    	"projectShortDescription": "We built an edTech web app from scratch to help teachers, tutors, and school directors track the educational process for elementary students.",
    	"tecStack": [
      	"Sass",
      	"MaterializeCss",
      	"Html5",
      	"ReactJs",
    	],
  	"projectLongDescriptionText":[
    	  "I was involved in the entire process, from concept to implementation. I participated in Agile Inception Deck and Design Thinking activities with end-users and stakeholders for product discovery.",
    	  "My role: I conducted surveys, created empathy maps, led interviews, developed user flows, designed wireframes, and implemented prototypes in code.",
    	  "I developed the web app UI and led the development of the mobile app UI.",
    	  "The app enables teachers to access the class roadmap on their phones. Teachers can also share daily activities, homework, and official messages with tutors.",
        "The app keeps tutors up to date and allows school directors to monitor class progress."
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
    	"projectShortDescription": "A prestigious automotive magazine with over 15 years of success needed to migrate from print to digital. So...",
    	"tecStack": [
      	"WordPress",
        "Acf",
      	"CSS",
      	"Html5",
      	"ReactJs",
    	],
      "projectLongDescriptionText":[
        "At Terciar, we embraced the challenge of supporting a specialized magazine with over 15 years of experience in its transition from print to digital.",
        "We guided its talented editorial team through a seamless technological transition.",
        "We customized various WordPress features to organize multiple groups of technical information, simplifying the editorial process and ensuring followers could continue consuming content as they were accustomed to.",
        "My role: analyze requirements, create and validate prototypes, and lead the development process."
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
      "At Tricks, we developed a product page for Olympic Games Jam: Beijing 2022, an officially licensed play-to-earn multiplayer party game where players compete in various winter sports to earn Olympic NFT digital pins.",
      "My role: Front-End developer"
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
      "At Tricks, we developed a product page for Food Truck Coin Club.",
      "Food Truck Coin Club is a collection of 10,000 unique Food Trucks composed of various attributes such as food and vehicle types and 1,000 lands based on real and fantastical places. These NFTs on the Ethereum Blockchain are your membership pass to the coin club where you can earn various tokens from nWay and Animoca Brands as well as gain access to other members-only benefits.",
      "My role: Front-End developer"
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
      "At Tricks, I was responsible for maintaining and developing new features for a major gaming site.",
      "My Hero Academia is an action RPG developed by Xin Yuan Studio, a Chinese studio, and published by KOMOE Game Corporation for Asia, released on December 3rd 2020, Sony Pictures Television for the US, released on May 19th, A PLUS JAPAN for the EU, released on May 18th, And Bluetaku for the SEA, released on 2022.",
        "My role: Front-End developer"
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
      "At Tricks, I was responsible for maintaining and developing new features for nWay’s website. This was a significant responsibility, as nWay was the company’s largest client.",
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
      "At Terciar, I was responsible for managing web development projects for various clients. My mission was to interview clients, understand their requirements, and create a budget based on estimated time and resources.",
      "I also negotiated development stages and, at times, took on tasks such as development, integrations, and configurations for these websites. This site is just one of many.",
      "About the client: Identidad Digital. We are a people-centered technology company. We love what we do and approach it with enthusiasm. We are meticulous and obsess over details. Once we start something, we don’t stop until it’s resolved. We don’t believe in problems; we believe in solutions. We understand the importance of being excellent developers and even better listeners.",
      "My role: Webmaster"
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
        "Scenario: Before Spotify existed, a client approached us with distribution rights for a collection of around 1,000 folk music albums. They needed an e-commerce platform to sell their digital products.",
        "We developed a multivendor digital store using WooCommerce.",
        "Our platform became recognized as the world’s largest Chamamé store, offering customers the flexibility to purchase individual tracks or full albums.",
        "I integrated two essential plugins: one for vendor management, allowing multiple sellers to create and manage their own profiles and stores within the marketplace, and another to control downloads, ensuring that each purchased file could be downloaded only once, with the link expiring thereafter.",
        "This setup not only safeguarded the digital content but also provided a smooth experience for both vendors and customers."
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
        "In 2019, I was hired by the Ministry of Education of Chaco Province to develop a portal enabling over 50 departments to create internal pages and post updates. I started by designing a component system, using wireframes and detailed documentation to specify the requirements for each component.",
        "I then secured a page builder license to efficiently create reusable and customizable components. Over four years, I managed the site remotely, regularly meeting with department stakeholders to assess needs and implement solutions.",
        "The project encompasses more than 40 sections and over 100 categories. I handled periodic reporting, recommended best practices, and planned future improvements based on performance metrics. This was the largest project I’ve led, and I managed it independently as a part-time role."
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
                <Slide indicators={indicators} {...properties} pauseOnHover={true} duration={0} transitionDuration={5000} canSwipe={true} responsive={otherProjectResponsiveSettings}>
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

