import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import { ExitNavigateContext } from "../../context/ExitNavigateContext"
import {MainNavBar} from "../../components/main-nav-bar/MainNavBar"
import { CtaSection } from '../../components/cta-section/CtaSection'
import { homeContent } from '../../data/homeContent'
import { AppearBlock, useExitNavigate } from '../../utils/appear'

const CTA_APPEAR_FROM = ['left', 'up', 'right']

export const Home = () => {
  const { siteLang }  =  useContext( LanguageContext)
  const content = homeContent[siteLang] || homeContent.EN
  const { isExiting, requestNavigate } = useExitNavigate()
  const exitingClass = isExiting === true ? ' appear--exiting' : ''

  return (
    <ExitNavigateContext.Provider value={requestNavigate}>
      <header className='header'>
        <MainNavBar />
      </header>
      <main id='main-content' className='main-section' tabIndex={-1}>
        <div className='home-wrapper'>
          <div className='hero-section hero-section'>
            <div className='container'>
              <AppearBlock
                className={'appear appear--from-top appear--offscreen' + exitingClass}
              >
                <h1 className='hero-text flotate'>
                  {content.mainTagline}
                </h1>
              </AppearBlock>
            </div>
          </div>
          <div className='container'>
            <div className='cta-section'>
              {content.ctaItems.map((item, index) => {
                const from = CTA_APPEAR_FROM[index]
                return (
                  <CtaSection
                    key={item.id}
                    id={item.id}
                    target={item.target}
                    title={item.title}
                    description={item.description}
                    className={'appear appear--from-' + from + ' appear--offscreen' + exitingClass}
                    style={{ '--appear-delay': (180 + index * 120) + 'ms' }}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </ExitNavigateContext.Provider>
  )
}
