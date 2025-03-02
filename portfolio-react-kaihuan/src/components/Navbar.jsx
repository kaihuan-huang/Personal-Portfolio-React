import React, { useState, useContext } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from 'react-scroll'; 
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { darkMode } = useContext(ThemeContext);

  return (
      <div name='navbar' className={`fixed w-full h-[60px] flex justify-between items-center px-4 ${darkMode ? 'bg-[#0f172a]' : 'bg-[#ecf2fb]'}`}>
        <div>
          <div className="text-xl font-bold text-pink-600">KH</div>
        </div>

      {/* menu */}
      <ul className="hidden md:flex flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li> 
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="blog" smooth={true} duration={500}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-[#ACEAF7] flex flex-col justify-center items-center"
        }>
        <ul>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="experience" smooth={true} duration={500}>
            Experience
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="blog" smooth={true} duration={500}>
            Blog
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="resume" smooth={true} duration={500}>
            Resume
          </Link></li>
        </ul>
      </div>
      {/* Social icons */}
      <div className="flex fixed flex-col top-[35%] left-0 invisible lg:visible">
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300'>
            <a  className='flex justify-between items-center w-full text-gray-600' href="https://www.linkedin.com/in/kaihuan-huang-3775a823a/">
               Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 '>
            <a className='flex justify-between items-center w-full text-gray-400'
            href="https://github.com/kaihuan-huang">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-600'
            href="#resume" 
            onClick={() => {
              const resumeSection = document.querySelector('[name="resume"]');
              if (resumeSection) resumeSection.scrollIntoView({ behavior: 'smooth' });
            }}>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-400'
            href="mailto:huangkaihuan0216@gmail.com">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
      </div>
  );
};

export default Navbar;