import Navbar from "../HeroSecion/HeroSection/Navabar/Navbar"
import Cards from "./Cards"
import Project1 from '../../../Images/ProjectsImg/AmazonCLone.png'
import Project2 from '../../../Images/ProjectsImg/ecommerce.png'
import Project3 from '../../../Images/ProjectsImg/musicapp.png'
import Project4 from '../../../Images/ProjectsImg/Portfoil.png'
import Project5 from '../../../Images/ProjectsImg/CurdOpration.png'
import Project6 from '../../../Images/ProjectsImg/KeepNotes.png'
import Project7 from '../../../Images/ProjectsImg/DashBoard.png'
import Project8 from '../../../Images/ProjectsImg/Expensese Tracker.png'


import './Projects.css'
const Projects = () => {
  return (
    <>
      <Navbar />

      <section className="section-project">
        <span className="section-span  "></span>
        <span className="section-span"></span>
        <span className="section-span"></span>
        <span className="section-span"></span>
        <span className="section-span"></span>
        <span className="section-span"></span>
        <span className="section-span"></span>
        <span className="section-span"></span>

      </section>

      <div className="cards">
        <Cards IMG={Project1} content="Amazon Front Page. First Project Using Html Css " Github="" Link="" title="Amazon Clone" />
        <Cards IMG={Project3} content="Music App Creating using React + Tailwan Css " Github="" Link="" title="Music App" />
        <Cards IMG={Project2} content="TO DO List Using reactJS Logic." Github="" Link="" title="TO DO List" />
        <Cards IMG={Project4} content="Google Keep Clone Using ReactJs Logic." Github="" Link="" title="Google Keep Clone" />
        <Cards IMG={Project5} content="Sicial Media Dashboard Using HTML, Css, JavaScript.Project Completed during Internship at Code Alpha " Github="" Link="" title="Social Media Dashboard " />
        <Cards IMG={Project6} content="Tik Toe Game Using JavaScript Logic. Completed during Internship at Code Alpha" Github="" Link="" title="Tik Toe Game Basic" />
        <Cards IMG={Project7} content="Sicial Media Dashboard Using HTML, Css, JavaScript. Completed during Internship at Code Alpha." Github="" Link="" title="Expence Tracker" />
        <Cards IMG={Project8} content="Sicial Media Dashboard Using HTML, Css, JavaScript." Github="" Link="" title="Potfoil" />

      </div>
    </>
  )
}

export default Projects
