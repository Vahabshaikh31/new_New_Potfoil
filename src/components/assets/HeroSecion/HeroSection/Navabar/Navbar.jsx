import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <header className="nav-main">

                <div className="nav-content">
                    <Link exactly to="/" className='nav-fontsize links'>Home</Link>
                    <Link to="/Projects" className='nav-fontsize links '>Projects</Link >
                    <Link to="/Contact" className='nav-fontsize links '>Contact</Link>
                    <div className="nav-darkmode nav-fontsize ">
                    </div>
                </div>

            </header>

        </>
    )
}

export default Navbar
