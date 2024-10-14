import { useState } from 'react'


export const TrAccordion = () => {
    const resumeList = [
        {
            position: "Web UI Developer",
            company: "Tricks Games Studio",
            companyLogo: "/assets/images/companies/trick-gs.png",
            companyUrl: "google.com",
            mode: "remote",
            time: "part-time",
            period: "02/2021 - 03/2023",
            detail: [
                "I embarked on a project with the International Olympic Committee and NwayPlay company, collaborating with teams across Korea, the United States, and Argentina. My primary responsibility was the development of the interface for https://nwayplay.com/.",
                "Additionally, I undertook the prototyping of interfaces for the customer service tool and crafted workflows for new product creation and content customization within the same project. I conducted extensive analysis of user data and product performance to derive metrics for generating customizable on-demand reports, proposed new features, conducted demos, and gathered requirements from stakeholders of the customer service tool. I also authored the user guide for the Customer Service Tool tailored to our client’s needs.",
                "Also I have been a consultant for other company projects on issues related to web interface.",
                "I have developed https://olympicgamesjam.nwayplay.com/ and https://foodtruckcoinclub.io from scratch and collaborated on https://www.myherogame.com/, for SONY then Crunchyroll.",
            ],
            achivements: "My work in prototyping screens proved instrumental in identifying suspicious fraudulent activities, thereby enhancing the security measures of the platforms.",
            techStack: "I have successfully leveraged my expertise in ReactJS, HTML5, CSS3, Sass, BEM, and JS to deliver impactful solutions. Additionally, I efficiently managed project workflows using tools such as Jira, Trello, GitHub, and BitBucket. My proficiency in design tools like Figma and Miró further facilitated seamless collaboration and innovation."
        },
        {
            position: "Web UI Developer, Consultant",
            company: "Terciar Asociate Consultant",
            companyLogo: "/assets/images/companies/terciar-ca.png",
            companyUrl: "google.com",
            mode: "remote",
            time: "full-time",
            period: "05/2014 – 05/2020",
            detail: [
                "As a UI-Dev: I have developed interfaces for websites such as: https://autotest.com.ar/ https://cronicasdeagua.com/ http://thethinkingmachine.com.ar/ https://www.identidad-digital.com.ar and others. I have also developed web interfaces for custom systems: administrative systems for pest control services, funeral services, laboratory services. and others.",
                "As a Consultant: Two years after joining I started working with clients, creating proposals, estimates, setting scope for MVP, I have played as Product Owner creating and prioritizing backlogs. In this role, I spearheaded the e-commerce business unit, tripling the client portfolio within two years. I successfully navigated growth alongside the startup, implemented agile methodologies (Scrum), and effectively managed remote work operations",
                "Elaboración de informes de rendimiento para presentaciones ejecutivas."
            ],
            achivements: "As a consultant, I spearheaded the e-commerce business unit, tripling the client portfolio within two years. Also I successfully navigated growth alongside the startup, implemented agile methodologies (Scrum), and effectively managed remote work operations.",
            techStack: "As a UI developer, I deployed my skills in HTML, CSS, JS, Bootstrap, MaterializeCSS, Sass, Git, WordPress, Woocommerce, and Scrum"
        },
        {
            position: "Web UI Developer",
            company: " Mimuju EdTech",
            companyLogo: "/assets/images/companies/mimuju.png",
            companyUrl: "google.com",
            mode: "remote",
            time: "full-time",
            period: "05/2018 – 04/2020",
            detail: [
                "I spearheaded the design of the web app's user interface and guided the development of the mobile app UI, ensuring seamless user experiences across platforms.",
                "From conceptualization to execution, I played an integral role in every stage of the product life cycle, actively participating in Agile Inception Deck sessions and Design Thinking workshops to shape the product vision.",
                "I meticulously crafted user flows, wireframes, and prototypes to translate ideas into tangible solutions. Additionally, I adeptly utilized HTML, CSS, JS, MaterializeCSS, Sass, and Git to bring these designs to life"
            ],
            achivements: "review review review review review review review review review ",
            techStack: "review review review review review review review review review "
        },
        {
            position: "Technical Instructor (developers trainer)",
            company: "Government Project",
            companyLogo: "/assets/images/companies/informatorio.png",
            companyUrl: "google.com",
            mode: "remote",
            time: "full-time",
            period: "04/2016 – 08/2020",
            detail: [
                "I conducted comprehensive theoretical and hands-on classes covering a spectrum of topics including:",
                "Web Development (HTML5, CSS3, JS, Bootstrap, MaterializeCSS, Responsive Web Design)",
                "Agile methodologies (Kanban, Scrum)",
                "Programming Fundamentals using (Python and Django)"
            ],
            achivements: "Today, I take pride in noting that over half of my former students have transitioned into fulfilling roles within the software industry.",
            techStack: "Notably, in 2020, I successfully delivered remote classes to a cohort of 100 students concurrently."
        },
        {
            position: "Business analyst",
            company: "Grupo Prominente",
            companyLogo: "/assets/images/companies/prominente.png",
            companyUrl: "google.com",
            mode: "remote",
            time: "full-time",
            period: "05/2014 – 04/2016",
            detail: [
                "I've engaged with end-users across various organizational levels to capture requirements, subsequently conceptualizing and prototyping new features for integration into the company's ERP software.",
                "Additionally, I provided outsourcing services to two prominent client companies, BRa and Metrovías, ensuring their specific needs were met with tailored solutions.",
            ],
            achivements: "review review review review review review ",
            techStack: "review review review review "
        },
        {
            position: "Business analyst - UI dev",
            company: "Optimal",
            companyLogo: "/assets/images/companies/optimal.png",
            companyUrl: "google.com",
            mode: "remote",
            time: "full-time",
            period: "02/2008 – 02/2011",
            detail: [
                "This is a custom software company where I started as a business analyst and I was involved in UI development too.I worked in several sectors like insurance, delivery, retail, traceability at food factories and medical care",
            ],
            achivements: "review review review review review review ",
            techStack: "review review review review "
        }
    ];

    // Estado para almacenar el índice del acordeón abierto
    const [openIndex, setOpenIndex] = useState(null);

    const handlePosition = (index) => {
        // Alternar entre abrir/cerrar el acordeón
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='tr-section'>
            {resumeList.map((resumeItem, index) => (
                <div
                    key={index}
                    aria-label={resumeItem.company}
                    className={`position-wrapper ${openIndex === index ? "active" : ""}`}
                >
                    <header 
                        className={`position-header ${openIndex === index ? "active" : ""}`}
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

                    {openIndex === index && (
                        <div className='position-description'>
                            {resumeItem.detail.map((item, idx) => (
                                <p className='position-detail' key={idx}>{item}</p>
                            ))}
                            <p className='position-achivement'>{resumeItem.achivements}</p>
                            <p className='position-stack'>{resumeItem.techStack}</p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};
