// import logo from './logo.svg';
//mport './App.css';
import './assets/sass/styles.scss';
import { HashRouter,Routes,Route, Navigate, useSearchParams } from 'react-router-dom';
// import { Projects } from './containers/projects/Projects'; // legacy
import { ProjectsV2 } from './containers/projects-v2/ProjectsV2';
import { TrackRecord } from './containers/track-record/TrackRecord';
import { Testimonials } from './containers/testimonials/Testimonials';
import { Home } from './containers/home/Home';
import { LanguageProvider } from './context/LanguageProvider';
import { WarpProvider } from './context/WarpProvider';
import { WarpOverlay } from './components/warp-overlay/WarpOverlay';
import { BackgroundShapes } from './components/background-shapes/BackgroundShapes';
import { ScrollToTop } from './components/scroll-to-top/ScrollToTop';
import { SkipLink } from './components/skip-link/SkipLink';
// import { Home } from './containers/home/Home';

const RedirectProjectsV2ToProjects = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.toString();
  const to = search === '' ? '/projects' : '/projects?' + search;
  return <Navigate to={to} replace />;
};

function App() {
  return (
    <LanguageProvider>
      <HashRouter basename="/">
        <WarpProvider>
          <SkipLink />
          <ScrollToTop />
          <BackgroundShapes />
          <WarpOverlay />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/projects' element={ <Projects />}/> */}
            <Route path='/projects' element={ <ProjectsV2 />}/>
            <Route path='/projects-v2' element={ <RedirectProjectsV2ToProjects />}/>
            <Route path='/track-record' element={ <TrackRecord />}/>
            <Route path='/testimonial' element={ <Testimonials />}/>
            <Route path='/*' element={ <Navigate to= '/'/> }/>
          </Routes>
        </WarpProvider>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
