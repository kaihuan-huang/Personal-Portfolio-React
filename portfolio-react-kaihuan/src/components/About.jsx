import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div name="about" className={`w-full min-h-screen ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-[#d8e6f8] to-[#ecf2fb]'} ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline text-pink-600'>
            Co-Founder@Real Estate Assistant AI 
            </p>
          </div>
          </div>
          <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p> SWE | AI Engineer</p>
            </div>
            <div>
              <p>A Full Stack Developer and AI Specialist with a passion for building digital solutions that improve everyday life. From the strategic use of React and FastAPI to the innovative application of machine learning, I create technology that is as smart as it is functional. Dive into my portfolio to explore the projects that have benefited from my dedication to excellence and my drive to push the boundaries of what's possible. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;