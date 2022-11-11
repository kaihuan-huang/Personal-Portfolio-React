import React from "react";
import {Link} from 'react-scroll' 
import kaihuan from '../assets/kaihuan.png'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      {/* Container */}
      <div className="max-w-[700px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, I am</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#cab0e9]">
          Kaihuan Huang
        </h1>
        <h2 className="text-2xl sm:text-2xl  text-[#8892b0]">
          An MSc candidate in Computer Science with Artificial
          Intelligence at the University of York & Full Stack Web Development at the UC Berkeley
          Extension.
        </h2>
        <p className="text-[#675b6c] py-4 max-w-[500px]">
          I have worked at the $30B electric car company NIO and LG in various functions such as intern and marketing.
         
        </p>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={kaihuan} alt="Logo Image" style={{ width: "100px" }} />
        <div>
            <button className='text-pink-600 group border-2 px-6 py-3 my-2 flex items-center hover:text-[#cab0e9]'>
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
