
import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import Mysql from '../assets/mysql.png';

const Skills = () => {
  // Define skill categories and their respective technologies
  const skillCategories = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'HTML', icon: HTML },
        { name: 'CSS', icon: CSS },
        { name: 'JavaScript', icon: JavaScript },
        { name: 'React', icon: ReactImg },
        { name: 'Tailwind CSS', icon: Tailwind },
        { name: 'Bootstrap', icon: null },
        { name: 'TypeScript', icon: null },
        { name: 'Next.js', icon: null },
        { name: 'Redux', icon: null },
        { name: 'SASS', icon: null },
        { name: 'Webpack', icon: null },
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: Node },
        { name: 'Express', icon: null },
        { name: 'MongoDB', icon: Mongo },
        { name: 'MySQL', icon: Mysql },
        { name: 'PostgreSQL', icon: null },
        { name: 'Django', icon: null },
        { name: 'Flask', icon: null },
        { name: 'GraphQL', icon: null },
        { name: 'Redis', icon: null },
        { name: 'Java', icon: null },
        { name: 'PHP', icon: null },
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: null },
        { name: 'GitHub', icon: GitHub },
        { name: 'Docker', icon: null },
        { name: 'Kubernetes', icon: null },
        { name: 'AWS', icon: null },
        { name: 'Azure', icon: null },
        { name: 'Heroku', icon: null },
        { name: 'Nginx', icon: null },
        { name: 'Bash', icon: null },
      ]
    },
    {
      name: 'Data Science & AI',
      skills: [
        { name: 'Python', icon: null },
        { name: 'Pandas', icon: null },
        { name: 'TensorFlow', icon: null },
        { name: 'PyTorch', icon: null },
        { name: 'Scikit-learn', icon: null },
        { name: 'OpenCV', icon: null },
        { name: 'Seaborn', icon: null },
      ]
    },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-gradient-to-b from-[#8892b0] to-[#0a192f] text-gray-300 py-16'>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>Skills</p>
              <p className='py-6'>These are the technologies I've worked with</p>
          </div>

          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <h3 className="text-lg font-semibold text-white mb-1">{category.name}</h3>
              <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2'>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className='bg-[#112240] p-2 rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center'
                  >
                    {skill.icon ? (
                      <img className='w-5 mx-auto' src={skill.icon} alt={`${skill.name} icon`} />
                    ) : (
                      <div className="w-5 h-5 flex items-center justify-center text-sm text-pink-600 font-bold">
                        {skill.name.charAt(0)}
                      </div>
                    )}
                    <p className='my-1 text-xs font-bold'>{skill.name.toUpperCase()}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-[#112240] p-6 rounded-lg shadow-lg mt-10">
            <h3 className="text-xl font-semibold text-white mb-4">Education & Certifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Master's in Computer Science - University of York (Current)</li>
              <li>Certified Full Stack Web Developer - UC Berkeley Extension</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Skills;
