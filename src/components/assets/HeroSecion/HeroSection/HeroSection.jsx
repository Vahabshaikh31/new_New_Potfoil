import Navbar from "./Navabar/Navbar"
import './HeroSection.css'
import Profile from "./Profile/Profile"
import Footer from "./Footer/Footer"
import { AnimatedTooltipPreview } from './Skills/NewSkills';
import { CardHoverEffectDemo } from "./Experrience/ExperineceNew"
import Vortex from "../../../ui/vortex";
import { HeroParallaxDemo } from './Certification/hro-parreler'
import SparklesPreview from './Profile/SparklesPreview'
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
          <div className="hero-section-profile">
          <SparklesPreview />
          </div>
        </div>
      </div>

      <div className="hero-Skill">
        <h1 className="hero-h1">Skills</h1>
        <AnimatedTooltipPreview />
      </div>

      <div className="section-earth">
        <CardHoverEffectDemo />
      </div>
      <div className="hero-sec">
        <div className="hero-cer-secction">
          <span className="span1"></span>
          <span className="span2"></span>
        </div>
      </div>
      <div className="hero-certifiacte">
      <HeroParallaxDemo />
      </div>
      <div className="hero-section-footer">
        <Footer />

      </div>


    </>

  )
}

export default HeroSEction