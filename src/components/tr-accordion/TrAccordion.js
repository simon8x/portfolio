import { useState, useEffect } from 'react'
import { TechStack } from '../tech-stack/TechStack';


export const TrAccordion = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    // Función para detectar URLs en el texto y convertirlas en etiquetas <a>
    const parseTextWithLinks = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.split(urlRegex).map((part, index) =>
            urlRegex.test(part) ? (
                <a href={part} key={index} target="_blank" rel="noopener noreferrer">
                    {part}
                </a>
            ) : (
                part
            )
        );
    };

    const resumeList = [
        {
            position: "UI Engineer",
            company: "Creamos",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/creamos.png`,
            companyUrl: "https://www.creamos.com/",
            mode: "remote",
            time: "FULL TIME",
            period: "12/2024 - 03/2024",
            detail: [                 
                "I participated in the development of Choc at https://www.chocfactory.com/, working in an extreme development environment that required adaptability to changes and deadlines.",
                "My work included layout and integration using tools such as Webflow, Shopify, Smootify and Relume, achieving a functional and attractive ecommerce and marketing platform that met the high standards of the project.",
            ],
            tecStack: [
                "Webflow",
                "Shopify",
                "Html5",
                "CSS",
                "Js",
            ],
        },
        {
            position: "Consultant",
            company: "Uugot.it",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/uugotit.png`,
            companyUrl: "https://www.uugot.it/",
            mode: "remote",
            time: "FULL TIME",
            period: "10/2024 - 12/2024",
            detail: [                 
                "Managed the budget and led the development of product pages and landing pages for app promotion using WordPress.",
            ],
            tecStack: [
                "WordPress",
                "Figma",
            ],
        },
        {
            position: "UI Engineer",
            company: "Daas Software Consulting",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/daas.png`,
            companyUrl: "https://www.daas.consulting/",
            mode: "remote",
            time: "FULL TIME",
            period: "05/2024 - 09/2024",
            detail: [                 
                "I participated as FE Dev during the development of an expert system for a Laboratory.",
                "The system supported the production and traceability of parenteral nutrition bags.",
                "I worked with Angular Material and also developed reports for specific devices.",
            ],
            tecStack: [
                "Html5",
                "Sass",
                "Bem",
                "Tailwind",
                "Github"
            ],
        },
        {
            position: "UI Engineer | PM Jr",
            company: "Tricks Games Studio",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/trick-gs.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "FULL TIME",
            period: "02/2021 - 04/2024",
            detail: [

                "I joined the company as UI Engineer on a large-scale project with the International Olympic Committee and Nway, collaborating from Argentina with teams in Korea and the United States.",
                "I started coding reusable components in reactjs and my primary responsibility was the interface development of https://nwayplay.com/ (NFT Marketplace). ",
                "Also I have been a consultant for other company projects on issues related to web interface.",
                "I have developed https://olympicgamesjam.nwayplay.com/ and https://foodtruckcoinclub.io from scratch and collaborated on https://www.myherogame.com/, and https://nway.com/.",
                "I have successfully leveraged my expertise in ReactJS, HTML5, CSS3, Sass, BEM, and JS.",
                "As a PM Jr, I led the development of the customer service tool for the NFT Marketplace, under the supervision of a senior PM, using Scrum.",
                "I captured stakeholder requirements and conducted product demonstrations in English.",
                "Managed the backlog with Jira, made estimates and defined the scope of MVPs.",
                "My work in prototyping screens proved instrumental in identifying suspicious fraudulent activities, thereby enhancing the security measures of the platforms.",
                "Stack: Jira, Confluence, GitHub, Miro.",
            ],
            tecStack: [
                "Html5",
                "Sass",
                "Bem",
                "MaterializeCss",
                "Mui",
                "ReactJs",
                "Js",
                "Npm",
                "Redux",
                "Aws",
                "Jira",
                "Trello",
                "Github",
                "Bitbucket",
                "Figma",
                "Miro",
                "WordPress",
                "Acf"
            ],
        },
        //achivements: "My work in prototyping screens proved instrumental in identifying suspicious fraudulent activities, thereby enhancing the security measures of the platforms.",
        //techComment: "I have successfully leveraged my expertise in ReactJS, HTML5, CSS3, Sass, BEM, and JS to deliver impactful solutions. Additionally, I efficiently managed project workflows using tools such as Jira, Trello, GitHub, and BitBucket. My proficiency in design tools like Figma and Miró further facilitated seamless collaboration and innovation.",
        {
            position: "UI Engineer | PM",
            company: "Terciar Asociate Consultant",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/terciar-ca.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "FULL TIME",
            period: "05/2014 – 09/2020",
            detail: [
                "I joined the company as a part-time UI Engineer, developing interfaces for WordPress-based websites and custom software based on Ruby on Rails. Stack: HTML, CSS, SASS, JS, Bootstrap, Materialize CSS, WordPress, Woocommerce.",
                "After my second year, I was promoted and assigned to manage several projects. I successfully managed more than 20 projects related to custom software, websites, and e-commerce. Last year, I led the e-commerce business unit, tripling the client portfolio.",
                "My stack HTML, CSS, JS, Bootstrap, MaterializeCSS, Sass, Git, WordPress, Woocommerce and Scrum.",
            ],
            // achivements: "As a consultant, I spearheaded the e-commerce business unit, tripling the client portfolio within two years. Also I successfully navigated growth alongside the startup, implemented agile methodologies (Scrum), and effectively managed remote work operations.",
            // tech: "As a UI developer, I deployed my skills in HTML, CSS, JS, Bootstrap, MaterializeCSS, Sass, Git, WordPress, Woocommerce, and Scrum",
            tecStack: [
                "Html5",
                "Sass",
                "Bem",
                "MaterializeCss",
                "Bootstrap",
                "Js",
                "Trello",
                "Github",
                "Bitbucket",
                "Figma",
                "Miro",
                "WordPress",
                "Woocommerce",
                "Acf"
            ],
        },
        {
            position: "Progect Manager",
            company: "Ministry of Education of Chaco Province",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/ministry-logo.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "PART TIME",
            period: "05/2019 – 11/2023",
            detail: [
                "In 2019, I began a major project with the Ministry of Education of Chaco Province to develop a web portal enabling 50+ departments to manage their own pages and share updates. ",
                "I designed a modular component system with detailed documentation and obtained a page builder license to create reusable components efficiently.",
                "Over four years, I managed the portal remotely, holding regular meetings with stakeholders, generating reports, recommending improvements, and implementing solutions.",
                "This large-scale project grew to include 40+ sections and 100+ categories, and I led it independently as a part-time role.",
            ],
            achivements: "",
            tecStack: [
                "Html5",
                "CSS",
                "Bem",
                "WordPress",
                "Divi",
                "Analytics"
            ],
        },
        {
            position: "Technical Instructor (developers trainer)",
            company: "Government",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/informatorio.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "PART TIME",
            period: "04/2016 – 08/2020",
            detail: [
                "I conducted comprehensive theoretical and hands-on classes covering a spectrum of topics including :",
                "Web Development (HTML5, CSS3, JS, Bootstrap, MaterializeCSS, Responsive Web Design)",
                "Agile methodologies (Kanban, Scrum)",
                "Programming Fundamentals using (Python and Django)",
                "Notably, in 2020, I successfully delivered remote classes to a cohort of 100 students concurrently. Today, I take pride in noting that over half of my former students have transitioned into fulfilling roles within the software industry."
            ],
            //achivements: "Today, I take pride in noting that over half of my former students have transitioned into fulfilling roles within the software industry.",
            //tech: "Notably, in 2020, I successfully delivered remote classes to a cohort of 100 students concurrently.",
            tecStack: [
                "Html5",
                "CSS",
                "Js",
                "MaterializeCss",
                "Bootstrap",
                "Python",
                "Django",
                "Heroku",
                "Trello",
                "Github",
            ],
        },
        {
            position: "UI/UI Developer",
            company: "Mimuju EdTech",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/mimuju.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "PART TIME",
            period: "05/2018 – 04/2020",
            detail: [
                "I spearheaded the design of the web app's user interface and guided the development of the mobile app UI, to grant seamless user experiences across platforms.",
                "From conceptualization to execution, I played an integral role in every stage of the product life cycle, actively participating in Agile Inception Deck sessions and Design Thinking workshops to shape the product vision. I crafted user flows, wireframes, and prototypes to translate ideas into tangible solutions.",
                "Additionally, I adeptly utilized HTML, CSS, JS, MaterializeCSS, Sass, and Git to bring these designs to life.",
                "Enhanced user experience across platforms by ensuring 99% cross-browser compatibility"
            ],
            achivements: "",
            tecStack: [
                "Html5",
                "Sass",
                "Bem",
                "MaterializeCss",
                "Js",
                "Trello",
                "Bitbucket",
                "Invision",
            ],
        },
        {
            position: "Business analyst",
            company: "Grupo Prominente",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/prominente.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "FULL TIME",
            period: "05/2014 – 04/2016",
            detail: [
                "I've engaged with end-users across various organizational levels to capture requirements, subsequently conceptualizing and prototyping new features for integration into the company's ERP software.",
                "Additionally, I provided outsourcing services to two prominent client companies, BRa and Metrovías, ensuring their specific needs were met with tailored solutions.",
            ],
            achivements: "",
            tech: ""
        },
        {
            position: "Business analyst - UI dev",
            company: "Optimal",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/optimal.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "FULL TIME",
            period: "02/2008 – 02/2011",
            detail: [
                "This is a custom software company where I started as a business analyst and I was involved in UI development too.I worked in several sectors like insurance, delivery, retail, traceability at food factories and medical care",
            ],
            achivements: "",
            tech: ""
        }
    ];
    const [openIndex, setOpenIndex] = useState(null);


    const handlePosition = (index) => {
        const newIndex = openIndex === index ? null : index;
        setOpenIndex(newIndex);
        if (newIndex !== null) {
            handleScroll()
        }
    }
    

    const handleScroll = () => {
        let activePos = document.getElementById('active-position')
        if (activePos !== null) {
            let topOffset = activePos.offsetTop
            console.log("activePos",{topOffset} )
            window.scrollTo(0, (topOffset + 50) );
        }
    }

    return (
        <section className='tr-section'>
            {resumeList.map((resumeItem, index) => (
                <div
                    id={`${openIndex === index ? "active-position" : ""}`}
                    key={index}
                    aria-label={resumeItem.company}
                    className={`position-wrapper ${openIndex === index ? "active" : ""}`}
                >
                    <header 
                        className='position-header'
                        onClick={() => handlePosition(index)}
                    >
                        <div className='position-company-logo'>
                            <img className='company-logo' src={resumeItem.companyLogo} alt='' />
                        </div>
                        <div className='position-data'>
                            <h3 className='position-name'>{resumeItem.position}</h3>
                            <h6 className='position-company'>{resumeItem.company}</h6>
                            <div className='position-detail-row'>
                                <span className='position-period'>{resumeItem.period}</span><span className='position-time'>{resumeItem.time}</span>
                            </div>
                        </div>
                        <div className='position-side-wrapper'>
                            <span className='position-icon'></span>
                            {/* <span className='position-date'>{resumeItem.period}</span> */}
                        </div>
                    </header>

                    <div className='position-description'>
        {/*                {resumeItem.detail.map((item, idx) => (
                            <p className='position-detail' key={idx}>{item}</p>
                        ))}  */}


                        {resumeItem.detail.map((item, idx) => (
                            <p className="position-detail" key={idx}>
                                {parseTextWithLinks(item)}
                            </p>
                        ))}

                        <p className='position-achivement'>{resumeItem.achivements}</p>
                        <p className='position-stack'>{resumeItem.techComment}</p>
                        {resumeItem.tecStack && <TechStack stack={resumeItem.tecStack}/>}
                    </div>
                </div>
            ))}
        </section>
    );
};