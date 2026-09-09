import { useState, useEffect, useContext } from 'react'
import { TechStack } from '../tech-stack/TechStack';
import { trackRecordData } from '../../data/trackRecordData'
import { LanguageContext } from '../../context/LanguageContext'
import { finishAppearAnimation, useAppearOnView } from '../../utils/appear'

const ITEM_EXIT_STAGGER_MS = 80;
const NAV_SCROLL_GAP_PX = 12;
const EXPAND_SETTLE_MS = 750;

const pinOpenHeaderBelowNav = () => {
    const wrapper = document.getElementById('active-position');
    if (wrapper == null) {
        return;
    }
    wrapper.classList.add('appear--done');
    const itemHeader = wrapper.querySelector('.position-header');
    if (itemHeader == null) {
        return;
    }
    const nav = document.querySelector('.header');
    const navHeight = nav == null ? 64 : nav.getBoundingClientRect().height;
    const minTop = navHeight + NAV_SCROLL_GAP_PX;
    const headerTop = itemHeader.getBoundingClientRect().top;
    const delta = headerTop - minTop;
    if (delta > -1 && delta < 1) {
        return;
    }
    window.scrollBy(0, delta);
};

const uncoverHeaderFromNav = pinOpenHeaderBelowNav;

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

const TrPositionItem = ({ resumeItem, index, isOpen, onToggle, siteLang, exitingClass }) => {
    const { appearRef, enterClass } = useAppearOnView();
    const appearExitingClass = exitingClass == null ? '' : exitingClass;

    return (
        <div
            id={isOpen === true ? 'active-position' : ''}
            ref={appearRef}
            aria-label={resumeItem.company}
            className={'position-wrapper' + (isOpen === true ? ' active' : '') + ' appear appear--from-up appear--offscreen' + enterClass + appearExitingClass}
            style={{
                '--appear-exit-delay': ((trackRecordData.length - 1 - index) * ITEM_EXIT_STAGGER_MS) + 'ms'
            }}
            onAnimationEnd={finishAppearAnimation}
        >
            <header
                className='position-header'
                tabIndex={-1}
                onMouseDown={(event) => {
                    event.preventDefault();
                }}
                onClick={() => onToggle(index)}
            >
                <div className='position-company-logo'>
                    <img
                        className={resumeItem.companyLogo.indexOf('informatorio') >= 0
                            ? 'company-logo company-logo--informatorio'
                            : 'company-logo'}
                        src={resumeItem.companyLogo}
                        alt=''
                    />
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
                </div>
            </header>

            <div className='position-description'>
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
    );
};

export const TrAccordion = ({ exitingClass }) => {

    const { siteLang } = useContext( LanguageContext )

    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        if (openIndex == null) {
            return;
        }

        let cancelled = false;
        let rafId = null;
        const endAt = performance.now() + EXPAND_SETTLE_MS;
        document.documentElement.classList.remove('is-tr-accordion-locked');

        const stickHeader = (now) => {
            if (cancelled === true) {
                return;
            }
            uncoverHeaderFromNav();
            if (now < endAt) {
                rafId = requestAnimationFrame(stickHeader);
            }
        };

        rafId = requestAnimationFrame(stickHeader);

        return () => {
            cancelled = true;
            if (rafId != null) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [openIndex]);

    const handlePosition = (index) => {
        const newIndex = openIndex === index ? null : index;
        setOpenIndex(newIndex);
    };

    return (
        <section className='tr-section'>
            {trackRecordData.map((resumeItem, index) => (
                <TrPositionItem
                    key={index}
                    resumeItem={resumeItem}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={handlePosition}
                    siteLang={siteLang}
                    exitingClass={exitingClass}
                />
            ))}
        </section>
    );
};
