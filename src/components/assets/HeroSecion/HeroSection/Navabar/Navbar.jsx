import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../../../Images/Name-logo-black.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>


            <nav className={`nav-main ${isOpen ? 'open' : ''}`}>
                <img src={logo} alt="" className='Logo' />

                <div className="nav-content">
                    <NavLink exact to="/" activeClassName="active" className='nav-fontsize links'>Home</NavLink>
                    <NavLink to="/Projects" activeClassName="active" className='nav-fontsize links'>Projects</NavLink>
                    <NavLink to="/Contact" activeClassName="active" className='nav-fontsize links'>Contact</NavLink>
                </div>

                <div className="hamburger-menu" onClick={toggleNavbar}>

                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav></div>
    );
}

export default Navbar;
