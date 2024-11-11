import { useState, useEffect } from 'react'
import { TechStack } from '../tech-stack/TechStack';


export const TrAccordion = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const resumeList = [
        {
            position: "Web UI Developer",
            company: "Tricks Games Studio",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/trick-gs.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "part-time",
            period: "02/2021 - 03/2023",
            detail: [
                "I embarked on a big main project with the International Olympic Committee and NwayPlay company, collaborating with teams across Korea, the United States, and Argentina. I started coding reusable components in reactjs and my primary responsibility was the development of the interface for https://nwayplay.com/.",
                "Additionally, I undertook the prototyping of interfaces for the customer service tool and crafted workflows for new product creation and content customization within the same project.",
                "I produced extensive analysis of user data and product performance to derive metrics and KPIs for generating customizable on-demand reports, proposed new features, conducted demos, and gathered requirements from stakeholders of the customer service tool. I also authored the user guide for the Customer Service Tool tailored to our client's needs.",
                "My work in prototyping screens proved instrumental in identifying suspicious fraudulent activities, thereby enhancing the security measures of the platforms.",
                "Also I have been a consultant for other company projects on issues related to web interface.",
                "I have developed https://olympicgamesjam.nwayplay.com/ and https://foodtruckcoinclub.io from scratch and collaborated on https://www.myherogame.com/, and https://nway.com/.",
                "I have successfully leveraged my expertise in ReactJS, HTML5, CSS3, Sass, BEM, and JS.",
                "Additionally, I efficiently managed project workflows using tools such as Jira, Trello, GitHub, and BitBucket. My proficiency in design tools like Figma and Miró further facilitated seamless collaboration and innovation.",
            ],
            //achivements: "My work in prototyping screens proved instrumental in identifying suspicious fraudulent activities, thereby enhancing the security measures of the platforms.",
            //techComment: "I have successfully leveraged my expertise in ReactJS, HTML5, CSS3, Sass, BEM, and JS to deliver impactful solutions. Additionally, I efficiently managed project workflows using tools such as Jira, Trello, GitHub, and BitBucket. My proficiency in design tools like Figma and Miró further facilitated seamless collaboration and innovation.",
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
        {
            position: "Web UI Developer, Consultant",
            company: "Terciar Asociate Consultant",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/terciar-ca.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "full-time",
            period: "05/2014 – 05/2020",
            detail: [
                "At this company, I have actively contributed to the development of five custom software applications and over 30 WordPress-based web projects, taking on various roles.",
                "As a front-end developer, I customized WordPress templates and developed interfaces for applications built with Ruby on Rails.",
                "Some sites that remain live: autotest.com.ar , jorgeferraresi.com, identidad-digital.com.ar.",
                "Two years after joining, I began working directly with clients—creating proposals, providing estimates, and defining MVP scopes. I also served as Product Owner, where I created and prioritized backlogs.",
                "In the last two years, I led the e-commerce business unit, tripling the client portfolio.",
                "I implemented agile methodologies (Scrum).",
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
            position: "Webmaster",
            company: "Ministry of Education of Chaco Province",
            companyLogo: `${process.env.PUBLIC_URL}/assets/images/companies/ministry-logo.png`,
            companyUrl: "google.com",
            mode: "remote",
            time: "part-time",
            period: "05/2019 – 11/2023",
            detail: [
                "In 2019, I began a major project with the Ministry of Education of Chaco Province to develop a web portal enabling 50+ departments to manage their own pages and share updates.",
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
            time: "full-time",
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
            time: "full-time",
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
            time: "full-time",
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
            time: "full-time",
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
                        </div>
                        <div className='position-side-wrapper'>
                            <span className='position-icon'></span>
                            <span className='position-date'>{resumeItem.period}</span>
                        </div>
                    </header>

                    <div className='position-description'>
                        {resumeItem.detail.map((item, idx) => (
                            <p className='position-detail' key={idx}>{item}</p>
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