import React from 'react'
import { TechStack } from '../tech-stack/TechStack'


const tecStackFE= [
    "ReactJs",
    "Js",
    "Npm",
    "Html5",
    "CSS",
    "Sass",
    "Bem",
    "MaterializeCss",
    "Bootstrap",
    "Redux",
    "Aws",
    "Jira",
    "Trello",
    "Github",
    "Bitbucket",
    "Figma",
    "Miro"
]
const tecStackCMS= [
    "WordPress",
    "Woocommerce",
    "Divi",
    "Elementor",
    "Wpbackery",
    "Acf",
    "Webflow",
    "Shopify",
    "Html5",
    "CSS",
    "Js"

]

export const TechPanel = () => {

    return (
    <div className='cta-wrapper'>
    <header className='cta-header'>
        <h3 className='cta-title'>Tech Stack</h3>        
    </header>
    <div className='cta-body'>
        <p className='cta-pharagrap'>As a front end developer I was involved in projects whit this stack</p>
        <TechStack stack={tecStackFE} />
        <p className='cta-pharagrap'>As a CMS and e-commerce developer I have worked on </p>
        <TechStack stack={tecStackCMS} />
    </div>
    </div>
  )
}
