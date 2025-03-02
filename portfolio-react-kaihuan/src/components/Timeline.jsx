
import React from 'react';
import { ExperienceData } from '../Data/experienceData';

const Timeline = () => {
  return (
    <div name="timeline" className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            Career Timeline
          </h2>
          <p className="py-6 text-gray-300">My professional journey visualized</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-600"></div>
          
          {ExperienceData.map((experience, index) => (
            <div 
              key={experience.id}
              className={`mb-16 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="p-5 rounded-lg bg-[#112240] shadow-lg hover:shadow-pink-600/20 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                  <p className="text-pink-600 font-medium">{experience.period}</p>
                  <p className="text-xl text-gray-300 font-medium mt-2">{experience.company} - {experience.location}</p>
                  <p className="text-gray-300 mt-2">{experience.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-pink-600 border-4 border-[#0a192f] z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
