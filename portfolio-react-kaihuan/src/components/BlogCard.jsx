
import React from 'react';
import { Link } from 'react-scroll';

const BlogCard = ({ blog }) => {
  return (
    <div className='bg-[#112240] p-6 rounded-lg shadow-lg hover:scale-105 duration-500'>
      <div className='mb-4 flex justify-between items-center'>
        <span className='text-pink-600 text-sm'>{blog.date}</span>
        <span className='bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded'>{blog.category}</span>
      </div>
      <h3 className='text-xl font-bold text-white mb-3'>{blog.title}</h3>
      <p className='text-gray-400 mb-6'>{blog.summary}</p>
      <div className='flex justify-between items-center'>
        <span className='text-sm text-gray-400'>By {blog.author}</span>
        <Link
          to={`blog/${blog.id}`}
          spy={true}
          smooth={true}
          duration={500}
          className='text-pink-600 hover:text-pink-400 cursor-pointer text-sm font-medium'
          onClick={() => window.location.href = `/blog/${blog.id}`}
        >
          Read More →
        </Link>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {blog.tags.map((tag, index) => (
          <span key={index} className='text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const BlogCard = ({ blog }) => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${darkMode ? 'bg-[#112240] text-gray-300' : 'bg-white text-gray-800'}`}>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{blog.title}</h3>
        <p className="text-sm mb-3">{blog.date}</p>
        <p className={`mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{blog.summary}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span key={index} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/blog/${blog.id}`} 
          className={`mt-auto inline-block px-4 py-2 rounded-md ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-pink-500 hover:bg-pink-600'} text-white transition-all`}
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
