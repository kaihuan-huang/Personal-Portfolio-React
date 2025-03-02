
import React from 'react';

const ProjectFilter = ({ technologies, activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-wrap justify-center mb-8 gap-2">
      <button
        onClick={() => setActiveFilter('All')}
        className={`px-4 py-2 rounded-md transition-all duration-300 ${
          activeFilter === 'All' 
            ? 'bg-pink-600 text-white' 
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        All
      </button>
      
      {technologies.map((tech, index) => (
        <button
          key={index}
          onClick={() => setActiveFilter(tech)}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeFilter === tech 
              ? 'bg-pink-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
