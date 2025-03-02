import React, { useState, useEffect } from "react";
import { Data } from "../Data/projectData";
import ProjectFilter from "./ProjectFilter";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  // Extract unique technologies from projects
  useEffect(() => {
    const allTechnologies = Data.flatMap(project => project.technologies);
    const uniqueTechnologies = [...new Set(allTechnologies)];
    setTechnologies(uniqueTechnologies);
    setFilteredProjects(Data);
  }, []);

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(Data);
    } else {
      const filtered = Data.filter(project => 
        project.technologies.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  return (
    <div name="projects" className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            My Projects
          </h2>
          <p className="py-6 text-gray-300">Check out some of my recent work</p>
        </div>

        {/* Filter Buttons */}
        <ProjectFilter 
          technologies={technologies} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" 
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;