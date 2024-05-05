import './Cards.css'
import Imag from '../../../Images/Certificate/Coding-Ninja_java.png'
import Github from '../../../Images/Github.svg'


const Cards = (props) => {
    return (
        <>
            <div className="container noselect">
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

                        <p id="prompt"> <img src={Github} className="img-github" alt="" />GitHub Repo</p>
                        <div className="title">
                            <img src={props.IMG} alt=""
                                className="images" />
                        </div>
                        <div className="Link-btn">
                            <button type="button" className="btn">
                                <strong>Link🔗</strong>
                                <div id="container-stars">
                                    <div id="stars"></div>
                                </div>
                                <div id="glow">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                </div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
