import React from 'react'
import { projectData } from "../data/projectData.js";

const Projects = () => {

  const project = projectData;


  return (
    <div name='projects' className='w-full h-screen bg-[#8892b0] text-gray-100'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline text-pink-600'>
              My Projects!
              </p>
            </div>
            {/* Containers for projects */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {project.map((item, index) => (
                  <div>
                    
                  </div>
              ))}

            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Projects