import React from 'react';

const ProjectFilter = ({ technologies, activeFilter, setActiveFilter }) => {
  // Define category filters
  const categoryFilters = ['All', 'Featured', 'Frontend', 'Backend', 'Full Stack'];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-300 mb-4">Filter by Category or Technology:</h3>
      <div className="flex flex-wrap gap-2">
        {/* Category filters */}
        {categoryFilters.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === category 
                ? 'bg-pink-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}

        {/* Technology filters - only show those not in categories */}
        {technologies
          .filter(tech => !categoryFilters.includes(tech))
          .map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tech 
                  ? 'bg-pink-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProjectFilter;