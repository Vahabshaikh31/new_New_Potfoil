import './Experience.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experi = (props) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 650,
    });
  }, []);

  return (
    <div className="experience" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-sine">
      <div className="notification1">
        <div className="notititle">{props.Title}</div>
        <div className="notiTime">{props.Time}</div>
        <div className="notibody">{props.Descr}</div>
      </div>
    </div>
  );
}

export default Experi;
