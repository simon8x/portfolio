import { MainNavBar } from '../../components/main-nav-bar/MainNavBar'
import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { featuredProjectsData, otherProjectsData } from '../../data/projectsData';
import { liveDemosData, liveDemosSectionHeadline } from '../../data/liveDemosData';
import { FeaturedProject } from '../../components/featured-project/FeaturedProject';
import { OtherProject } from '../../components/other-project/OtherProject';
import { LiveDemoCard } from '../../components/live-demo-card/LiveDemoCard';

import { LanguageContext } from '../../context/LanguageContext';
import { ExitNavigateContext } from '../../context/ExitNavigateContext';
import { AppearBlock, useExitNavigate } from '../../utils/appear';

const otherProjectResponsiveSettings = [
  {
    breakpoint: 1000,
    settings: {
        slidesToShow: 7,
        slidesToScroll: 1
    }
  },
  {
      breakpoint: 800,
      settings: {
          slidesToShow: 6,
          slidesToScroll: 1
      }
  },
  {
    breakpoint: 700,
    settings: {
        slidesToShow: 5,
        slidesToScroll: 1
    }
},
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1
      }
  },
  {
    breakpoint: 400,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1
    }
  },
  {
    breakpoint: 300,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1
    }
}
];

export const ProjectsV2 = () => {

  const { siteLang } = useContext(LanguageContext);
  const { isExiting, requestNavigate } = useExitNavigate();
  const exitingClass = isExiting === true ? ' appear--exiting' : '';
  const [searchParams, setSearchParams] = useSearchParams();
  const [preloadingDemoId, setPreloadingDemoId] = useState(null);
  const [launchDemoId, setLaunchDemoId] = useState(null);
  const indicators = (index) => (<div className="indicator"></div>);

  const liveDemosHeadline = liveDemosSectionHeadline[siteLang] == null
    ? liveDemosSectionHeadline.EN
    : liveDemosSectionHeadline[siteLang];

  useEffect(() => {
    const demoId = searchParams.get('demo');
    if (demoId == null || demoId === '') {
      return;
    }

    const timer = setTimeout(() => {
      setLaunchDemoId(demoId);
      setPreloadingDemoId(demoId);

      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('demo');
      setSearchParams(nextParams, { replace: true });

      const liveDemosBlock = document.querySelector('.live-demos-block');
      if (liveDemosBlock != null && typeof liveDemosBlock.scrollIntoView === 'function') {
        liveDemosBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [searchParams, setSearchParams]);

  const properties = {
    prevArrow: <button className='nav-arrow prev-arrow'>
      <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" /></svg>
    </button>,
    nextArrow: <button className='nav-arrow next-arrow'>
      <svg fill="#000000" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" /></svg>
    </button>
  }

  return (

    <ExitNavigateContext.Provider value={requestNavigate}>
      <header className='header'>
        <MainNavBar />
      </header>
      <main className='main-section'>
        <div className='container'>
          <section className='projects-v2-section'>

            <div className='live-demos-block'>
              <div className='live-demos-header-row'>
                <AppearBlock
                  className={'appear appear--from-left appear--offscreen' + exitingClass}
                >
                  <h2 className='section-title flotate'>{liveDemosHeadline}</h2>
                </AppearBlock>
              </div>
              <div className='live-demos-grid-row'>
                <div className='live-demo-card-grid'>
                  {liveDemosData.map((liveDemo, index) => {
                    return (
                      <LiveDemoCard
                        key={liveDemo.id}
                        liveDemo={liveDemo}
                        isPreloading={preloadingDemoId === liveDemo.id}
                        onRequestPreload={() => setPreloadingDemoId(liveDemo.id)}
                        launchDemoId={launchDemoId}
                        onLaunchConsumed={() => setLaunchDemoId(null)}
                        className={'appear appear--from-top appear--offscreen' + exitingClass}
                        style={{ '--appear-delay': (index * 80) + 'ms' }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className='hero-projects'>
              <AppearBlock
                className={'header-section appear appear--from-left appear--offscreen' + exitingClass}
              >
                <h2 className='section-title flotate'>
                  { (siteLang === 'EN')
                    ? 'Some featured projects'
                    : 'Algunos proyectos destacados'
                  }
                  </h2>
              </AppearBlock>
              <AppearBlock
                className={'section-featured-projects appear appear--from-right appear--offscreen' + exitingClass}
              >
                <Slide indicators={indicators} {...properties} pauseOnHover={true} duration={6000} transitionDuration={250} canSwipe={true}>
                  {featuredProjectsData.map(featuredProject => (
                    <div key={featuredProject.projectName}>
                      <FeaturedProject featuredProject={featuredProject} />
                    </div>
                  ))}
                </Slide>
              </AppearBlock>
            </div>

            <div className='side-projects'>
              <AppearBlock
                className={'header-section appear appear--from-right appear--offscreen' + exitingClass}
              >
                <h2 className='section-title flotate'>
                  { (siteLang === 'EN')
                    ? 'Some other projects'
                    : 'Otros proyectos'
                  }
                </h2>
              </AppearBlock>
              <AppearBlock
                className={'section-other-projects appear appear--from-up appear--offscreen' + exitingClass}
              >
                <Slide indicators={false} {...properties} pauseOnHover={true} duration={0} transitionDuration={5000} canSwipe={true} responsive={otherProjectResponsiveSettings}>
                  {otherProjectsData.map(otherProject => (
                    <div key={otherProject.projectName}>
                      <OtherProject otherProject={otherProject} />
                    </div>
                  ))}
                </Slide>
              </AppearBlock>
            </div>

          </section>
        </div>
      </main>

    </ExitNavigateContext.Provider>

  )
}
