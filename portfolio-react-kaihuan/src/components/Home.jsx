import React from "react";
import { HiArrowNarrowRignt } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      {/* Container */}
      <div className="max-w-[600px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, I am</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#ccd6f6]">
          Kaihuan Huang
        </h1>
        <h2 className="text-2xl sm:text-5xl  text-[#8892b0]">
          An MSc candidate in Computer Science with Artificial
          Intelligence at the University of York & Full Stack Web Development at the UC Berkeley
          Extension.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I have worked at the $30B electric car company NIO and LG in various
          functions such as intern and marketing. A few years ago, I moved to
          the United States to pursue new opportunities and improve my English
          and Spanish skills. After moving to Silicon Valley and meeting many
          brilliant people here, I decided that I want to pursue a career as a
          software engineer. I have always enjoyed math and loved learning about
          future technologies. I believe this is the best path for my skills and
          interests.
          <div>
        <button className='text-pink-600'>
         View Projects
        </button>
      </div>
        </p>
      </div>
     
    </div>
  );
};

export default Home;
