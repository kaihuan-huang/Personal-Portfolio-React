import React, { useState } from 'react';
import { FaDownload, FaCode, FaServer, FaTools, FaChartBar, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import resumeSDE from '../assets/resume/Kai_SDE_2025.pdf';
import resumeMLE from '../assets/resume/Kai_MLE_2025.pdf';

const Resume = () => {
  const [activeResume, setActiveResume] = useState('sde'); // 'sde' or 'mle'

  return (
    <div name='resume' className='w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-300 py-16'>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>Resume</p>
          <p className='py-6'>Check out my professional experience and skills</p>

          <div className='flex justify-center mb-8'>
            <div className='bg-[#112240] p-2 rounded-lg inline-flex'>
              <button 
                onClick={() => setActiveResume('sde')}
                className={`px-4 py-2 rounded ${activeResume === 'sde' ? 'bg-pink-600 text-white' : 'bg-transparent'}`}
              >
                Software Developer Resume
              </button>
              <button 
                onClick={() => setActiveResume('mle')}
                className={`px-4 py-2 rounded ${activeResume === 'mle' ? 'bg-pink-600 text-white' : 'bg-transparent'}`}
              >
                Machine Learning Engineer Resume
              </button>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-6 mb-10'>
            <a 
              href={activeResume === 'sde' ? resumeSDE : resumeMLE} 
              download={activeResume === 'sde' ? "Kaihuan_Huang_SDE_Resume.pdf" : "Kaihuan_Huang_MLE_Resume.pdf"}
              className='flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition-all w-full md:w-auto'
            >
              <FaDownload /> Download {activeResume === 'sde' ? 'SDE' : 'ML Engineer'} Resume
            </a>
            <a 
              href={activeResume === 'sde' ? resumeSDE : resumeMLE} 
              target="_blank" 
              rel="noreferrer"
              className='flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition-all w-full md:w-auto'
            >
              View Resume
            </a>
          </div>

          {activeResume === 'sde' ? (
            <div className='bg-[#112240] p-6 rounded-lg shadow-lg mb-10'>
              <h2 className='text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2'>Software Engineer Profile</h2>
              <p className='mb-6 text-gray-300'>
                Experienced Software Engineer with a strong background in full-stack development, skilled in building scalable web applications and RESTful APIs.
                Currently pursuing a Master's in Computer Science with a focus on advanced software engineering practices and distributed systems.
              </p>
              
              <h3 className='text-xl font-semibold mb-4 text-white'>Key Qualifications</h3>
              <ul className='list-disc list-inside mb-6 space-y-2'>
                <li>Full-stack development using React, Node.js, and various databases</li>
                <li>Experience with microservices architecture and cloud deployment</li>
                <li>Strong knowledge of data structures, algorithms, and system design</li>
                <li>Proficient in agile development methodologies and project management</li>
                <li>Excellent problem-solving abilities and attention to detail</li>
              </ul>
            </div>
          ) : (
            <div className='bg-[#112240] p-6 rounded-lg shadow-lg mb-10'>
              <h2 className='text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2'>Machine Learning Engineer Profile</h2>
              <p className='mb-6 text-gray-300'>
                Dedicated Machine Learning Engineer with expertise in developing and deploying ML models for real-world applications.
                Currently focusing on deep learning research and computer vision as part of a Master's in Computer Science program.
              </p>
              
              <h3 className='text-xl font-semibold mb-4 text-white'>Key Qualifications</h3>
              <ul className='list-disc list-inside mb-6 space-y-2'>
                <li>Experience with TensorFlow, PyTorch, and scikit-learn for model development</li>
                <li>Proficient in data preprocessing, feature engineering, and model evaluation</li>
                <li>Knowledge of computer vision and natural language processing techniques</li>
                <li>Skilled in optimizing ML models for production environments</li>
                <li>Strong programming skills in Python with data science libraries</li>
              </ul>
            </div>
          )}

          <div className='bg-[#112240] p-6 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-4 text-white flex items-center'><FaLaptopCode className='mr-2'/> Professional Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2 flex items-center'><FaCode className='mr-2'/> Frontend Development</h3>
                <p>React, React Native, JavaScript, TypeScript, HTML, CSS, Tailwind, Bootstrap, Next.js, Redux, SASS, Webpack</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2 flex items-center'><FaServer className='mr-2'/> Backend Development</h3>
                <p>Node.js, Express, MySQL, MongoDB, PostgreSQL, Django, Flask, GraphQL, Redis, Java, PHP</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2 flex items-center'><FaTools className='mr-2'/> DevOps & Tools</h3>
                <p>Git, GitHub, Docker, Kubernetes, AWS, Azure, Heroku, Nginx, Bash, Postman, VS Code</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2 flex items-center'><FaChartBar className='mr-2'/> Data Science & AI</h3>
                <p>Python, Pandas, TensorFlow, PyTorch, Scikit-learn, OpenCV, Seaborn, NumPy, Deep Learning, Computer Vision, NLP</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2 flex items-center'><FaGraduationCap className='mr-2'/> Education</h3>
                <p>Master's in Computer Science (University of York), Certified Full Stack Web Developer, Machine Learning Specialization</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2 flex items-center'><FaTools className='mr-2'/> Other Skills</h3>
                <p>Figma, Agile/Scrum, Technical Writing, Problem Solving, System Design, UI/UX Design, Cloud Architecture</p>
              </div>
            </div>
          </div>

          <div className='mt-10 bg-[#112240] p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-bold mb-4 text-white'>Certifications</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2'>AWS Certified Developer Associate</h3>
                <p>Amazon Web Services • 2023</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2'>TensorFlow Developer Certificate</h3>
                <p>Google • 2023</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2'>Full Stack Web Development</h3>
                <p>UC Berkeley Extension • 2022</p>
              </div>
              <div className='bg-[#1e3a6c] p-4 rounded'>
                <h3 className='font-bold mb-2'>Machine Learning Specialization</h3>
                <p>DeepLearning.AI • 2023</p>
              </div>
            </div>
            
            <p className='text-white text-lg font-semibold mb-4'>
              For a complete overview of my experience, education, and skills, please download the resume or view it online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;