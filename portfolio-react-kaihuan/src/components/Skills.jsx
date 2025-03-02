
import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Python from '../assets/python.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Mysql from '../assets/mysql.png';
import JQuery from '../assets/jquery.png';
import Bootstrap from '../assets/bootstrap.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-gradient-to-b from-[#8892b0] to-[#0a192f] text-gray-300 py-16'>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>Skills</p>
              <p className='py-6'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-4'>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 font-bold'>HTML</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4 font-bold'>CSS</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                  <p className='my-4 font-bold'>JAVASCRIPT</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4 font-bold'>REACT</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                  <p className='my-4 font-bold'>GITHUB</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={Node} alt="Node.js icon" />
                  <p className='my-4 font-bold'>NODE JS</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
                  <p className='my-4 font-bold'>MONGO DB</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={Mysql} alt="MySQL icon" />
                  <p className='my-4 font-bold'>MySQL</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4 font-bold'>TAILWIND</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                  <p className='my-4 font-bold'>BOOTSTRAP</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={JQuery} alt="jQuery icon" />
                  <p className='my-4 font-bold'>JQUERY</p>
              </div>
              <div className='bg-[#112240] p-6 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'>
                  <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                  <p className='my-4 font-bold'>PYTHON</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
