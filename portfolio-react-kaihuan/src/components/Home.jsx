import React, { useContext } from "react";
import {Link} from 'react-scroll' 
import kaihuan from '../assets/kaihuan.png'
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div name="home" className={`w-full h-screen ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-[#ecf2fb] to-[#d8e6f8]'}`}>
    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      {/* Container */}
      <div className="max-w-[700px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className={`text-pink-600 ${darkMode ? 'text-gray-400' : ''}`}>Hi, I am</p>
        <h1 className={`text-3xl sm:text-5xl font-bold text-[#cab0e9] ${darkMode ? 'text-gray-300' : ''}`}>
          Kaihuan Huang
        </h1>
        <h2 className={`text-2xl sm:text-2xl  text-[#8892b0] ${darkMode ? 'text-gray-400' : ''}`}>

        </h2>
        <p className={`text-[#675b6c] py-4 max-w-[500px] ${darkMode ? 'text-gray-400' : ''}`}>


        </p>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={kaihuan} alt="Logo Image" style={{ width: "100px" }} />
        <div>
            <button className={`text-pink-600 group border-2 px-6 py-3 my-2 flex items-center hover:text-[#cab0e9] ${darkMode ? 'text-gray-400 hover:text-gray-300 border-gray-600' : ''}`}>
              <Link to="projects" smooth={true} duration={500}>
                View Projects  
              </Link>

            </button>
          </div>
      </div>

    </div>
  );
};

export default Home;