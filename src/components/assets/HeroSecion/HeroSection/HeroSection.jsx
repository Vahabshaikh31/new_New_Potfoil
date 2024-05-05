import Navbar from "./Navabar/Navbar"
import './HeroSection.css'
import Profile from "./Profile/Profile"
import Backgound from "./Navabar/Backgound"
import Footer from "./Footer/Footer"
import Skills from "./Skills/Skills"
// import Experi from "./Experrience/Experi"
// import Cetificate from "./Certification/Cetificate"
// import Intern from '../../../../Images/Certificate/Code-Aplha_intern.png'
// import CodingNinja from '../../../../Images/Certificate/Coding-Ninja_java.png'
// import HackerrankCss from '../../../../Images/Certificate/HackerRan-Css.png'
// import HackerRankSQL from '../../../../Images/Certificate/HackerRank-Sql.png'
// import HackerRankProbelmS from '../../../../Images/Certificate/Hackerrank-problemSolving.png'
// import YBIPy from '../../../../Images/Certificate/YBI-Python.png'
// import YBIReg from '../../../../Images/Certificate/YBU-regrationModel.png'
// import Java from '../../../../Images/Certificate/hackerrank-Java.png'
import Intro from "./Profile/Intro"
import Earth from "./Experrience/Earth"
import Cetificate from "./Certification/Cetificate"


const HeroSEction = () => {
  return (
    <>
      <div className="Section-First">
        <div className="Hero">
          <div className="nav">
            <Navbar />
          </div>

          <div className='hero-sction-1'>
            <div className="hero-Back">
              <Backgound />
            </div>
            <div className="hero-section-intro">
              <Intro />
            </div>
            <div className="hero-section-profile">
              <Profile />
            </div>
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

      <Cetificate/>
      </div>

      <Footer />
    </>

  )
}

export default HeroSEction