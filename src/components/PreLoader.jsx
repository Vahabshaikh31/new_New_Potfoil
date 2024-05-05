import  { useState, useEffect } from 'react';
import './PreLoader.css'; // Import your CSS for styling the preloader

import img from '../Images/Name-logo-black.png'
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout value as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loading ? 'show' : 'hide'}`}>
<div className="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<div className="img">
  <img src={img} alt="" />
</div>

</div>
  );
};

export default Preloader;

