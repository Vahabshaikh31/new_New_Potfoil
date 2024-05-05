import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSEction from './components/assets/HeroSecion/HeroSection/HeroSection';
import './index.css';
import Preloader from './components/PreLoader';
import Projects from './components/assets/Project/Projects';
import Contact from './components/assets/Contact/Contact';

function App() {
  return (
    <>
      <div className='main'>
        <Preloader/>
        <BrowserRouter>
          <Routes>
            <Route path='/' className="home-one" element={<HeroSEction />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;