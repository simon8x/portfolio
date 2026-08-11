import { useState, useEffect, useContext } from 'react'
import { TechStack } from '../tech-stack/TechStack';
import { trackRecordData } from '../../data/trackRecordData'
import { LanguageContext } from '../../context/LanguageContext'

export const TrAccordion = () => {
    
    const { siteLang } = useContext( LanguageContext )

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    // Detecta enlaces con etiqueta, [Texto](url), o URLs sueltas, y los convierte en <a>
    const parseTextWithLinks = (text) => {
        const linkToken = /(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s)]+)/g;
        const labeledLink = /^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/;
        const bareUrl = /^https?:\/\/[^\s)]+$/;

        return text.split(linkToken).map((part, index) => {
            const labeled = part.match(labeledLink);

            if (labeled != null) {
                return (
                    <a href={labeled[2]} key={index} target="_blank" rel="noopener noreferrer">
                        {labeled[1]}
                    </a>
                );
            }

            if (bareUrl.test(part) === true) {
                return (
                    <a href={part} key={index} target="_blank" rel="noopener noreferrer">
                        {part}
                    </a>
                );
            }

            return part;
        });
    };

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
            {trackRecordData.map((resumeItem, index) => (
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


                        {resumeItem.detail[siteLang].map((item, idx) => (
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