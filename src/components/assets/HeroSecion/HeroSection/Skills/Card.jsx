import './Card.css';

const Card = () => {
    return (
        <>
            <div className="e-card playing">
                <div className="image"></div>

                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                
                <div className="infotop">
                    <div className="card1">
                        <div className="main-content1">
                            <div className="header1">
                                <span>My Soft</span>
                                <span>Skills</span>
                            </div>
                            <p className="heading1"> From HTML to CSS, JavaScript to React, Node.js, and Express.js, I can weave together seamless user experiences like nobody's business. And it's not just the front end – I've got the backend covered too, thanks to MongoDB, Java, and my knack for Data Structures and Algorithms. Plus, I'm no stranger to C/C++, which adds a dash of versatility to my repertoire. when it comes to bringing designs to life, Figma's my go-to.  </p>
                            <div className="categories1">
                                <span
                                >html</span>
                                <span>Css</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Java</span>
                                <span>DSA</span>
                                <span>C/C++</span>
                                <span>Github</span>
                                <span>Figma</span>

                            </div>
                        </div>
                        <div className="footer1">
                            🛩️
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
