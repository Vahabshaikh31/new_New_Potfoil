import Navbar from "../HeroSecion/HeroSection/Navabar/Navbar"
import Cards from "./Cards"
import Project1 from '../../../Images/ProjectsImg/AmazonCLone.png'
import Project4 from '../../../Images/ProjectsImg/Portfoil.png'
import Project5 from '../../../Images/ProjectsImg/CurdOpration.png'
import Project6 from '../../../Images/ProjectsImg/KeepNotes.png'
import Project7 from '../../../Images/ProjectsImg/DashBoard.png'
import Project8 from '../../../Images/ProjectsImg/Expensese Tracker.png'
import Project9 from '../../../Images/ProjectsImg/TodoList.png';
import Project10 from '../../../Images/ProjectsImg/Tik-tak.png';

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
        <Cards IMG={Project1} content="Amazon Front Page. First Project Using Html Css " GithubLink="https://663896f5456725911ca1ac33--amazoncloneabdulvahab.netlify.app/" title="Amazon Clone" />

        <Cards IMG={Project9} content="TO DO List Using reactJS Logic."
          GithubLink="https://github.com/Vahabshaikh31/react-Projects/tree/main/src/practice/TodoList" title="TO DO List" />



        <Cards IMG={Project6} content="Google Keep Clone Using ReactJs Logic." GithubLink="https://github.com/Vahabshaikh31/react-Projects/tree/main/src/practice/GooogleKeep" title="Google Keep Clone" />

        <Cards IMG={Project7} content="Sicial Media Dashboard Using HTML, Css, JavaScript.Project Completed during Internship at Code Alpha " GithubLink="https://github.com/Vahabshaikh31/CodeAlpha_Project_Dashboard/tree/main/resources" title="Social Media Dashboard " />

        <Cards IMG={Project10} content="Tik Toe Game Using JavaScript Logic" GithubLink="https://github.com/Vahabshaikh31/Tic-Tok-Toe/tree/main/TIic%20Tak%20Toe" title="Tik Toe Game Basic" />

        <Cards IMG={Project8} content="Expenses tracker. Completed during Internship at Code Alpha." GithubLink="https://github.com/Vahabshaikh31/-CodeAlpha_Project_Expenses_Tracker" title="Expence Tracker" />

        <Cards IMG={Project4} content="Potfoil Using React and react Librarys's." GithubLink="https://abdulvahabshaikh.netlify.app/" title="Potfoil" />

        <Cards IMG={Project5} content="Form where user write Username and password.it will save in data base" GithubLink="https://github.com/Vahabshaikh31/react-Projects/tree/main/src/CrudOpration" title="Form" />
     
      </div>
      qqwbi 8grgpibwlpgwiqlrwil

    </>
  )
}

export default Projects
