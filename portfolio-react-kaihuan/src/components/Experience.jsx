
import React from 'react';
import { ExperienceData } from '../Data/experienceData';

const Experience = () => {
  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            Work Experience
          </h2>
          <p className="py-6 text-gray-300">My professional journey and roles I've taken on</p>
        </div>

        <div className="flex flex-col gap-8">
          {ExperienceData.map((job) => (
            <div 
              key={job.id}
              className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-pink-600/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                <span className="text-pink-600 font-medium">{job.period}</span>
              </div>
              
              <div className="mb-4">
                <p className="text-xl text-gray-300 font-medium">{job.company} - {job.location}</p>
              </div>
              
              <p className="text-gray-300 mb-4">{job.description}</p>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
