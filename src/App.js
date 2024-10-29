// import logo from './logo.svg';
//mport './App.css';
import './assets/sass/styles.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Projects } from './containers/projects/Projects';
import { TrackRecord } from './containers/track-record/TrackRecord';
import { Testimonials } from './containers/testimonials/Testimonials';
import { Home } from './containers/home/Home';
// import { Home } from './containers/home/Home';



function App() {
  return (


    <BrowserRouter  basename="/portfolio">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={ <Projects />}/>
        <Route path='/track-record' element={ <TrackRecord />}/>
        <Route path='/testimonial' element={ <Testimonials />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
