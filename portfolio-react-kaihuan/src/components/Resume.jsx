
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import resumePDF from '../assets/resume/Kai_SDE_2025.pdf';

const Resume = () => {
  return (
    <div name='resume' className='w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-300 py-16'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>Resume</p>
          <p className='py-6'>Check out my professional experience and skills</p>
          
          <div className='flex flex-col md:flex-row gap-6 mb-10'>
            <a 
              href={resumePDF} 
              download="Kaihuan_Huang_Resume.pdf"
              className='flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition-all w-full md:w-auto'
            >
              <FaDownload /> Download Resume
            </a>
            <a 
              href={resumePDF} 
              target="_blank" 
              rel="noreferrer"
              className='flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition-all w-full md:w-auto'
            >
              View Resume
            </a>
          </div>
          
          <div className='bg-[#112240] p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-4 text-white'>Professional Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2'>Frontend Development</h3>
                <p>React, JavaScript, HTML, CSS, Tailwind, Bootstrap</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2'>Backend Development</h3>
                <p>Node.js, Express, MySQL, MongoDB, RESTful APIs</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2'>Tools & Platforms</h3>
                <p>Git, GitHub, VS Code, Heroku, Insomnia</p>
              </div>
            </div>
          </div>
          
          <div className='mt-10 bg-[#112240] p-6 rounded-lg shadow-lg'>
            <p className='text-white text-lg font-semibold mb-4'>
              For a complete overview of my experience, education, and skills, please download the resume or view it online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
