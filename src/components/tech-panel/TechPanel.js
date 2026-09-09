import { useContext } from 'react'
import { TechStack } from '../tech-stack/TechStack'
import { tecStackFE, tecStackCMS, iaStackCMS } from '../../data/techPanelData'
import { LanguageContext } from '../../context/LanguageContext';
import { finishAppearAnimation, useAppearOnView } from '../../utils/appear';

// const tecStackFE= [
//     "ReactJs",
//     "Js",
//     "Npm",
//     "Html5",
//     "CSS",
//     "Sass",
//     "Bem",
//     "MaterializeCss",
//     "Bootstrap",
//     "Redux",
//     "Aws",
//     "Jira",
//     "Trello",
//     "Github",
//     "Bitbucket",
//     "Figma",
//     "Miro"
// ]
// const tecStackCMS= [
//     "WordPress",
//     "Woocommerce",
//     "Divi",
//     "Elementor",
//     "Wpbackery",
//     "Acf",
//     "Webflow",
//     "Shopify",
//     "Html5",
//     "CSS",
//     "Js"

// ]

export const TechPanel = ({ className, style }) => {

    const { appearRef, enterClass } = useAppearOnView();
    const extraClassName = className == null ? '' : ' ' + className;
    const { siteLang } = useContext(LanguageContext);

    return (
    <div
        ref={appearRef}
        className={'cta-wrapper' + extraClassName + enterClass}
        style={style}
        onAnimationEnd={finishAppearAnimation}
    >
    <header className='cta-header'>
        <h3 className='cta-title'>
            {
                (siteLang === 'EN')
                  ? "Tech Stack"
                  : "Stack técnico"
            }
        </h3>        
    </header>
    <div className='cta-body'>
        <p className='cta-pharagrap'>
            {
                (siteLang === 'EN')
                  ? "As a front end developer I was involved in projects whit this stack"
                  : "Como Front end Developer he trabajado con las siguientes herramientas"
            }
        </p>
        <TechStack stack={tecStackFE} />
        <p className='cta-pharagrap'>
            {
                (siteLang === 'EN')
                  ? "As a CMS and e-commerce developer I have worked on "
                  : "He trabajado con las siguientes herramientas CMS y E-commerce"
            }
        </p>
        <TechStack stack={tecStackCMS} />
        <p className='cta-pharagrap'>
            {
                (siteLang === 'EN')
                  ? "I have worked with those AI tools"
                  : "He trabajado con las siguientes herramientas de IA"
            }
        </p>
        <TechStack stack={iaStackCMS} />
    </div>
    </div>
  )
}
