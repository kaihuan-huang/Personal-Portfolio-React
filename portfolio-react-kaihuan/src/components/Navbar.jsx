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
// import kaihuan from '../assets/kaihuan.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
      <div name='navbar' className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#ecf2fb]" >
        <div>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          {/* <img src={kaihuan} alt="Logo Image" style={{ width: "64px" }} /> */}
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
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}> {/* Added Experience link */}
            Experience
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
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
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="experience" smooth={true} duration={500}> {/* Added Experience link */}
            Experience
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="resume" smooth={true} duration={500}>
            Resume
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
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
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import NavDropdown from './NavDropdown';
import Logo from '../assets/logo.png'; // Make sure you have a logo image

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    <>
      <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#0a192f]' : 'fixed w-full h-20 z-[100] bg-[#0a192f]'}>
        <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
          <Link to='home' smooth={true} duration={500}>
            <img src={Logo} alt='Logo' width='125' height='50' className='cursor-pointer' />
          </Link>
          
          <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
              {['home', 'about', 'projects', 'experience', 'resume', 'contact', 'skills'].map(item => (
                <li key={item} className='ml-10 text-sm uppercase hover:text-pink-600 text-gray-200'>
                  <Link to={item} smooth={true} duration={500}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Icon */}
          <div onClick={handleClick} className='md:hidden cursor-pointer z-10'>
            <FaBars size={30} className='text-white hover:text-pink-600 transition-colors duration-300' />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <NavDropdown isOpen={nav} toggle={handleClick} />
    </>
  );
};

export default Navbar;
