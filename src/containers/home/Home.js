import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import {MainNavBar} from "../../components/main-nav-bar/MainNavBar"
import { BackgroundShapes } from '../../components/background-shapes/BackgroundShapes'
import { CtaSection } from '../../components/cta-section/CtaSection'
import { homeContent } from '../../data/homeContent'
export const Home = () => {
  
  const { siteLang }  =  useContext( LanguageContext)
  const content = homeContent[siteLang] || homeContent.EN
  
  return (
    <>
      <BackgroundShapes/>
      <header className='header'>
        <MainNavBar />
      </header>
      <main className='main-section'>
        <div className='home-wrapper'>
          <div className='hero-section hero-section'>
            <div className='container'>
              <h1 className='hero-text flotate'>
                {content.mainTagline}
              </h1>
            </div>
          </div>
          <div className='container'>
            <div className='cta-section'>
              {content.ctaItems.map(item => (
                <CtaSection
                  key={item.id}
                  id={item.id}
                  target={item.target}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </main> 
    </>
  )
}