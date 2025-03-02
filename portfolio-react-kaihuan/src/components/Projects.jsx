import React, { useState, useEffect } from "react";
import { Data } from "../Data/projectData";
import ProjectFilter from "./ProjectFilter";

// Placeholder case study data - replace with actual data
const caseStudyData = {
  "project1": {
    title: "Case Study for Project 1",
    challenges: ["Challenge 1", "Challenge 2"],
    solutions: ["Solution 1", "Solution 2"],
    outcomes: ["Outcome 1", "Outcome 2"]
  },
  "project2": {
    title: "Case Study for Project 2",
    challenges: ["Challenge 3", "Challenge 4"],
    solutions: ["Solution 3", "Solution 4"],
    outcomes: ["Outcome 3", "Outcome 4"]
  }
};

// Basic CaseStudy component - replace with more detailed implementation
const CaseStudy = ({ projectId, onBack }) => {
  const study = caseStudyData[projectId];
  if (!study) return <p>No case study found.</p>;
  return (
    <div>
      <h1>{study.title}</h1>
      <h2>Challenges:</h2>
      <ul>{study.challenges.map((c, i) => <li key={i}>{c}</li>)}</ul>
      <h2>Solutions:</h2>
      <ul>{study.solutions.map((s, i) => <li key={i}>{s}</li>)}</ul>
      <h2>Outcomes:</h2>
      <ul>{study.outcomes.map((o, i) => <li key={i}>{o}</li>)}</ul>
      <button onClick={onBack}>Back to Projects</button>
    </div>
  );
};


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique technologies and categories from projects
  useEffect(() => {
    const allTechnologies = Data.flatMap(project => project.technologies);
    const uniqueTechnologies = [...new Set(allTechnologies)];

    // Add category filters
    const categories = [...new Set(Data.map(project => project.category))];

    setTechnologies([...uniqueTechnologies, ...categories]);
    setFilteredProjects(Data);
  }, []);

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(Data);
    } else if (['Frontend', 'Backend', 'Full Stack'].includes(activeFilter)) {
      // Filter by category
      const filtered = Data.filter(project => project.category === activeFilter);
      setFilteredProjects(filtered);
    } else if (activeFilter === 'Featured') {
      // Filter featured projects
      const filtered = Data.filter(project => project.featured);
      setFilteredProjects(filtered);
    } else {
      // Filter by technology
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
        {showCaseStudy ? (
          <CaseStudy 
            projectId={selectedProject} 
            onBack={() => {
              setShowCaseStudy(false);
              setFilteredProjects(Data); // Reset to show all projects when returning from case study
            }} 
          />
        ) : (
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
                    {project.featured && (
                      <button 
                        onClick={() => {
                          setSelectedProject(project.id);
                          setShowCaseStudy(true);
                        }}
                        className="px-4 py-2 bg-[#1e3a6c] text-white rounded hover:bg-[#2d59a3] transition-all duration-300 mt-2 md:mt-0"
                      >
                        View Case Study
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;