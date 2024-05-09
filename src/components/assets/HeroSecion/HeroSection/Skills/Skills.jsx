import './Skills.css';
import { useState } from 'react'
import imgs from '../../../../../Images/Coding.svg'
import Java from '../../../../../Images/Java.svg'
import Css from '../../../../../Images/Css.svg'
import Html from '../../../../../Images/Html.svg'
import JavaScript from '../../../../../Images/JavaScript.svg'
import React from '../../../../../Images/React.svg'
import MongoDB from '../../../../../Images/MongoDB.svg'
import Node from '../../../../../Images/Node.svg'
import Express from '../../../../../Images/Express.svg'
import Clan from '../../../../../Images/c-1.svg'
import Cplus from '../../../../../Images/c++.svg'
import Figma from '../../../../../Images/Figma.svg'
import Card from './Card';
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const CircleHover = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  const [isHovered, setIsHovered] = useState(true);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOff = () => {
    setIsHovered(false);
  };

  return (
    <div data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine"
      className="skill-section "
    >
      <div className="section-1">
        <Card />
      </div>
      <div className="section-2">
        <div
          className="circle-container"
          onMouseEnter={handleHover}
          onClick={handleHoverOff}
        >
          <div className="main-circle">
            <img src={imgs} alt="" />
            <span className="Soft">Technology's</span>
          </div>
          
          <div className={`circle-overlay ${isHovered ? 'hovered' : ''}`}>
            <div className="name"> <img src={Java} className="orbit-circle circle1" /></div>
            <div className="name1"> <img src={Html}
              className="orbit-circle circle2" /></div>
            <div className="name2"> <img src={JavaScript} className="orbit-circle circle3" alt="" /></div>
            <div className="name3"> <img src={Css} className="orbit-circle circle4" /></div>
            <div className="name4"> <img src={React} className="orbit-circle circle6" /></div>
            <div className="name5"> <img src={Node} className="orbit-circle circle7" /></div>
            <div className="name6"> <img src={MongoDB} className="orbit-circle circle8" /></div>
            <div className="name7"> <img src={Express} className="orbit-circle circle9" /></div>
            <div className="name8"> <img src={Clan} className="orbit-circle circle10" /></div>
            <div className="name9"> <img src={Cplus} className="orbit-circle circle11" /></div>
            <div className="name10"> <img src={Figma} className="orbit-circle circle12" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleHover;