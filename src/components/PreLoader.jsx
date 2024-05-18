import { useState, useEffect } from 'react';
import './PreLoader.css'; // Import your CSS for styling the preloader

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout value as needed

    return () => clearTimeout(timer);
  }, []);

  // Dynamically apply CSS class based on loading state
  const preloaderClassName = loading ? 'preloader show' : 'preloader hide';

  return (
    <div className={preloaderClassName}>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
