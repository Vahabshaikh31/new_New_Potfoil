import { NavLink } from "react-router-dom";
import img from "../../../../../Images/Name-logo-black.png";
import { Link as LinkScroll } from "react-scroll/modules";
import { useState } from "react";
import Contact from "../../../Contact/Contact";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-gradient-to-r z-40 p-4 fixed w-screen bg-black border-b-4 border-indigo-500 to-teal-400 text-white shadow-lg h-24">
      <div className="max-w-full mx-auto flex justify-between items-center px-2 sm:px-6 lg:px-8">
        <img src={img} className="w-40" alt="Logo" />
        <div className="flex items-center justify-center text-3xl h-16">
          <div className="flex items-center justify-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                <LinkScroll
                  className="nav-link text-white font-bold cursor-pointer"
                  to="AboutPage"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1}
                >
                  ABOUT
                </LinkScroll>
                <LinkScroll
                  className="nav-link text-white font-bold cursor-pointer"
                  to="SkillPage"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1}
                >
                  SKILLS
                </LinkScroll>
                <LinkScroll
                  className="nav-link text-white font-bold cursor-pointer"
                  to="Experiencepage"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1}
                >
                  EXPERINCE
                </LinkScroll>
                <LinkScroll
                  to="ProjectPAge"
                  className="nav-link text-white font-bold cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1}
                >
                  PROJECTS
                </LinkScroll>
            
                <div className=" h-20" >
                  <Contact/>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex justify-end md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 outline-none bg-gray-700"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={!isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden flex justify-end`}
      >
        <div className="px-2 pt-2 pb-3 flex flex-col w-fit justify-center items-center space-y-1 sm:px-3">
          <NavLink
            to="/"
            className="nav-link text-white font-bold"
            activeClassName="active-link"
            onClick={toggleNavbar}
          >
            HOME
          </NavLink>
          <NavLink
            to="/projects"
            className="nav-link text-white font-bold"
            activeClassName="active-link"
            onClick={toggleNavbar}
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link text-white font-bold"
            activeClassName="active-link"
            onClick={toggleNavbar}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
