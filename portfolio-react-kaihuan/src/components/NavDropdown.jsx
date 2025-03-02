
import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaBriefcase, FaFileAlt, FaEnvelope, FaTools } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const NavDropdown = ({ isOpen, toggle }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] text-gray-100 z-50 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-end p-4">
        <button 
          onClick={toggle} 
          className="text-white hover:text-pink-500 transition-colors duration-300"
        >
          <IoMdClose size={30} />
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center h-[90%] space-y-8">
        {[
          { name: 'Home', icon: <FaHome size={24} /> },
          { name: 'About', icon: <FaUser size={24} /> },
          { name: 'Projects', icon: <FaCode size={24} /> },
          { name: 'Experience', icon: <FaBriefcase size={24} /> },
          { name: 'Resume', icon: <FaFileAlt size={24} /> },
          { name: 'Contact', icon: <FaEnvelope size={24} /> },
          { name: 'Skills', icon: <FaTools size={24} /> }
        ].map(({ name, icon }) => (
          <Link
            key={name}
            to={name.toLowerCase()}
            onClick={toggle}
            smooth={true}
            duration={500}
            className="group flex items-center space-x-4 text-3xl font-medium py-2 px-4 w-64 rounded-lg hover:bg-[#1d3a6e] hover:text-pink-500 transition-all duration-300 transform hover:translate-x-2"
          >
            <span className="text-pink-500 group-hover:text-white transition-colors duration-300">
              {icon}
            </span>
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
