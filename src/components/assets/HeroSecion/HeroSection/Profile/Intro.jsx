import './Intro.css'
const Intro = () => {
    return (
        <>
            <div className="hero-main">
                <div className="hero-name">  Abdulvahab Shaikh</div>
                <div className="loader">
                    <div className="light"></div>
                    <div className="black_overlay"></div>
                </div>
                <div className="hero-heading">
                    <span className="btn-shine">Fresher Java DSA | React Node.js Javascript
                    </span>
                    <span className="btn-shine2">
                        As a seasoned Java developer with a strong foundation in Data Structures and Algorithms (DSA), I bring a wealth of expertise to the table in crafting efficient software solutions. With a keen eye for optimization and performance, I thrive in architecting scalable systems that stand the test of time.
                    </span>
                </div>
                <div className="hero-resume">
                    <a href="Abdulvahab shaikh.pdf" className="resumeLink" download={"Abdulvahab shaikh.pdf"}>
                    <button className="button">
                        
                            <button className="Btn">
                                <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                                <span className="icon2"></span>
                            </button>
                            <span style={{color:"white"}}>My Cv</span>
                    </button>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Intro
