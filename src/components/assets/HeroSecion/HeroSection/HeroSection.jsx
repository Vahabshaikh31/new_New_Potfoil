import Navbar from "./Navabar/Navbar"
import './HeroSection.css'
import Profile from "./Profile/Profile"
import Footer from "./Footer/Footer"
import Skills from "./Skills/Skills"
import Intro from "./Profile/Intro"
import Earth from "./Experrience/Earth"
import Vortex from "../../../ui/vortex";
import {HeroParallaxDemo} from './Certification/hro-parreler'

const HeroSEction = () => {
  return (
    <>

      <div className="Hero">
        <div className="nav">
          <Navbar />
        </div>
        <div className='hero-sction-1'>
          <div className="hero-Back">
            <Vortex />    
          </div>
          <div className="hero-section-intro">
            <Intro />
          </div>
          <div className="hero-section-profile">
            <Profile />
          </div>
        </div>
      </div>

      <div className="hero-Skill"><Skills /> </div>

      <div className="section-earth">
        <Earth />
      </div>
      <div className="hero-sec">
        <div className="hero-cer-secction">
          <span className="span1"></span>
          <span className="span2"></span>
        </div>
      </div>  
      <HeroParallaxDemo/>
      <div className="hero-section-foote">
        <Footer />

      </div>
    
    </>

  )
}

export default HeroSEction