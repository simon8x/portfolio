import { MainNavBar } from "../../components/main-nav-bar/MainNavBar"
import { TrAccordion } from "../../components/tr-accordion/TrAccordion"

export const TrackRecord = () => {
  return (
    <>
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
                <h1>a</h1>
              </aside>
            </div>

          </section>

        </div>
      </main>
    </>
  )
}
