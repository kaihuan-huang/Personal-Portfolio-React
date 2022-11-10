import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from 'react-scroll' //https://www.npmjs.com/package/react-scroll
// import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
      <div name='nav' className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ecf2fb] text-gray-300">
        <div>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          {/* <img src={Logo} alt="Logo Image" style={{ width: "100px" }} /> */}
        </div>
    
      {/* menu */}
      <ul className="hidden md:flex">
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
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
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
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
        </ul>
      </div>
      {/* Social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300'>
            <a  className='flex justify-between items-center w-full text-gray-400' href="/">
               Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 '>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-400'
            href="/">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="/">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
