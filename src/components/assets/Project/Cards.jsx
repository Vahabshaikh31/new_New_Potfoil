import './Cards.css';
import Github from '../../../Images/Github.svg';
import  { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'   
const Cards = (props) => {
    useEffect(() => {
        // Trigger effect after component has mounted
        Aos.init({
          duration: 650,
        });
    
        // Optionally, you can clean up the effect
        return () => {
          Aos.refresh();
        };
      }, []); 
    return (
        <a data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" href={props.GithubLink} target="vahsb" className="container noselect">  <div className="container noselect">
            <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>

                <div id="card">
                    <h1 className="h3-tag">{props.title}</h1>
                    <h4 className="h4-tag">{props.content}</h4>

                    <p id="prompt">
                        <img src={Github} className="img-github" alt="" />
                        <a href={props.GithubLink} target="vahab" className="githubLink">  GitHub Repo
                        </a>
                    </p>
                    <div className="title">
                        <img src={props.IMG} alt="" className="images" />
                    </div>
                </div>
            </div>
        </div>
        </a>
    );
};

export default Cards;
