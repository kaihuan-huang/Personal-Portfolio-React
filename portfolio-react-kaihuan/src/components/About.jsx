import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#8892b0] text-gray-100'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline text-pink-600'>
            Software Engineer
            </p>
          </div>
          </div>
          <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>I believe this is the best path for my skills and
          interests</p>
            </div>
            <div>
              <p>A few years ago, I moved to
          the United States to pursue new opportunities and improve my English
          and Spanish skills. After moving to Silicon Valley and meeting many
          brilliant people here, I decided that I want to pursue a career as a
          software engineer. I have always enjoyed math and loved learning about
          future technologies. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;