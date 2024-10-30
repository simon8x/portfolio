import { BackgroundShapes } from "../../components/background-shapes/BackgroundShapes"
import { CtaCvDownload } from "../../components/cta-cv-download/CtaCvDownload"
import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { TechPanel } from "../../components/tech-panel/TechPanel"
import { TrAccordion } from "../../components/tr-accordion/TrAccordion"

export const TrackRecord = () => {
  return (
    <>
      <BackgroundShapes />
      <header className='header'>
        <MainNavBar />
      </header>
      <main className='main-section'> 
        <div className="container">
          
          <section className='track-record-section'>          
            <h1 className="section-title">Profesional track record</h1>
            <div className="tr-wrapper">
              <section className="tr-main">
                <TrAccordion/>
              </section>
              <aside className="tr-aside">
                <CtaCvDownload/>
                <TechPanel />
              </aside>
            </div>

          </section>

        </div>
      </main>
    </>
  )
}
