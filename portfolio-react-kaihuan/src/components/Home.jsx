import React from "react";
import {Link} from 'react-scroll' 
import kaihuan from '../assets/kaihuan.png'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-[#ECF2FB] to-[#8892b0] dark:from-[#112240] dark:to-[#0a192f] transition-colors duration-300">
      {/* Container */}
      <div className="max-w-[700px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 dark:text-pink-300">Hi, I am</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#cab0e9] dark:text-[#a3b18a]">
          Kaihuan Huang
        </h1>
        <h2 className="text-2xl sm:text-2xl  text-[#8892b0] dark:text-[#556b2f]">

        </h2>
        <p className="text-[#675b6c] py-4 max-w-[500px] dark:text-[#a3b18a]">


        </p>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={kaihuan} alt="Logo Image" style={{ width: "100px" }} />
        <div>
            <button className='text-pink-600 group border-2 px-6 py-3 my-2 flex items-center hover:text-[#cab0e9] dark:text-pink-300 dark:hover:text-[#a3b18a]'>
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