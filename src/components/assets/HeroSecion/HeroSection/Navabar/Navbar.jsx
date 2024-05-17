import {  NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../../../../Images/Name-logo-black.png'
const Navbar = () => {
    return (
        <>    
<img src={logo} alt="" className='Logo'/>

            <header className="nav-main">
                <div className="nav-content">
                    <NavLink exactly to="/" 
                      activeClassName="active"
                    className='nav-fontsize links'>Home</NavLink>
                    <NavLink to="/Projects" 
                      activeClassName="active"

                    className='nav-fontsize links '>Projects</NavLink >
                    <NavLink to="/Contact" 
                    activeClassName="active"
                    className='nav-fontsize links '>Contact</NavLink>
                    <div className="nav-darkmode nav-fontsize ">
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
