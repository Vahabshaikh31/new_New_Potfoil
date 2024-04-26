import './Navbar.css'
import img from '../../Images/Name-logo-black.png'
const Navbar = () => {
    return (
        <>
            <header className="nav-main">
                <img src={img} alt="" className='nav-logo' />
                <div className="nav-content">
                    <span className='nav-fontsize links'>Home</span>
                    <span className='nav-fontsize links '>Service</span >
                    <span className='nav-fontsize links '>Skill</span>
                    <span className='nav-fontsize links '>Project</span>
 <div className="nav-darkmode nav-fontsize "> 🌔 </div>
                </div>
               
            </header>

        </>
    )
}

export default Navbar
