
import React from 'react';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import { Data } from '../Data/projectData';
import { CaseStudiesData } from '../Data/caseStudiesData';

const CaseStudy = ({ projectId, onBack }) => {
  // Find the case study data
  const caseStudy = CaseStudiesData.find(study => study.id === projectId);
  
  // Find the original project data to get image and links
  const project = Data.find(proj => proj.id === projectId);
  
  if (!caseStudy || !project) {
    // If no case study is found, immediately go back to the projects
    onBack();
    return null;
  }

  return (
    <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-pink-600 mb-6 hover:text-pink-500 transition-all"
      >
        <FaArrowLeft /> Back to Projects
      </button>
      
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-1/2">
          <img 
            src={project.image} 
            alt={project.name} 
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-2">{caseStudy.title}</h2>
          <p className="text-gray-300 mb-4">{caseStudy.overview}</p>
          
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex flex-row items-center gap-2">
              <span className="text-pink-600 font-semibold">Duration:</span>
              <span className="text-gray-300">{caseStudy.duration}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="text-pink-600 font-semibold">Role:</span>
              <span className="text-gray-300">{caseStudy.role}</span>
            </div>
          </div>
          
          <div className="flex gap-3 mt-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all"
            >
              <FaGithub /> GitHub
            </a>
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-[#1e3a6c] p-4 rounded shadow-md">
          <h3 className="text-xl font-bold text-white mb-3">Challenges</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {caseStudy.challenges.map((challenge, index) => (
              <li key={`challenge-${index}`}>{challenge}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-[#1e3a6c] p-4 rounded shadow-md">
          <h3 className="text-xl font-bold text-white mb-3">Solutions</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {caseStudy.solutions.map((solution, index) => (
              <li key={`solution-${index}`}>{solution}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-[#1e3a6c] p-4 rounded shadow-md">
          <h3 className="text-xl font-bold text-white mb-3">Outcomes</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {caseStudy.outcomes.map((outcome, index) => (
              <li key={`outcome-${index}`}>{outcome}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-700">
        <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech, index) => (
            <span 
              key={`tech-${index}`} 
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
