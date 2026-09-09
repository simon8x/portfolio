import { useContext } from "react"
import { CtaCvDownload } from "../../components/cta-cv-download/CtaCvDownload"
import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { TechPanel } from "../../components/tech-panel/TechPanel"
import { TrAccordion } from "../../components/tr-accordion/TrAccordion"
import { LanguageContext } from '../../context/LanguageContext';
import { ExitNavigateContext } from '../../context/ExitNavigateContext'
import { AppearBlock, useExitNavigate } from '../../utils/appear'
import { trackRecordData } from '../../data/trackRecordData'

const TR_ITEM_EXIT_STAGGER_MS = 80;
const TR_ITEM_EXIT_DURATION_MS = 680;
const TR_EXIT_HOLD_MS = (trackRecordData.length - 1) * TR_ITEM_EXIT_STAGGER_MS + TR_ITEM_EXIT_DURATION_MS;

export const TrackRecord = () => {

  const { siteLang } = useContext(LanguageContext);
  const { isExiting, requestNavigate } = useExitNavigate(TR_EXIT_HOLD_MS);
  const exitingClass = isExiting === true ? ' appear--exiting' : '';

  return (
    <ExitNavigateContext.Provider value={requestNavigate}>
      <header className='header'>
        <MainNavBar />
      </header>
      <main className='main-section'>
        <div className="container">

          <section className='track-record-section'>
            <AppearBlock
              className={'appear appear--from-left appear--offscreen' + exitingClass}
            >
              <h1 className="section-title flotate">
                {
                  (siteLang === 'EN')
                    ? "Profesional track record"
                    : "Trayectoria profesional"
                }
              </h1>
            </AppearBlock>
            <div className="tr-wrapper">
              <section className="tr-main">
                <TrAccordion exitingClass={exitingClass} />
              </section>
              <aside className="tr-aside">
                <CtaCvDownload
                  className={'appear appear--from-right appear--offscreen' + exitingClass}
                />
                <TechPanel
                  className={'appear appear--from-right appear--offscreen' + exitingClass}
                />
              </aside>
            </div>

          </section>

        </div>
      </main>
    </ExitNavigateContext.Provider>
  )
}
