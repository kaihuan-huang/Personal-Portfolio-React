
import React, { useState } from 'react';

const ProjectSearch = ({ setFilteredProjects, originalProjects }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredProjects(originalProjects);
      return;
    }
    
    const results = originalProjects.filter(project => 
      project.name.toLowerCase().includes(term) || 
      project.description.toLowerCase().includes(term) ||
      project.technologies.some(tech => tech.toLowerCase().includes(term))
    );
    
    setFilteredProjects(results);
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search projects by name, description or technology..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-4 pl-12 bg-[#112240] text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:border-pink-600 transition-all duration-300"
        />
        <svg 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ProjectSearch;
