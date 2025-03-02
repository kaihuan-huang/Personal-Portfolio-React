
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { BlogData } from '../Data/blogData';
import { ThemeContext } from '../context/ThemeContext';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { darkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    // Find the blog post with the matching ID
    const foundBlog = BlogData.find(blog => blog.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return (
      <div className={`w-full min-h-screen pt-24 pb-16 ${darkMode ? 'bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-300' : 'bg-gradient-to-b from-[#ecf2fb] to-[#c1d0f0] text-gray-800'}`}>
        <div className='max-w-[800px] mx-auto p-4'>
          <div className={`p-6 rounded-lg shadow-lg text-center ${darkMode ? 'bg-[#112240]' : 'bg-white'}`}>
            <p>Blog post not found.</p>
            <Link 
              to="/blog" 
              className={`mt-4 px-4 py-2 rounded flex items-center gap-2 mx-auto w-fit ${darkMode ? 'bg-pink-600 text-white' : 'bg-pink-500 text-white'}`}
            >
              <FaArrowLeft /> Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full min-h-screen pt-24 pb-16 ${darkMode ? 'bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-300' : 'bg-gradient-to-b from-[#ecf2fb] to-[#c1d0f0] text-gray-800'}`}>
      <div className='max-w-[800px] mx-auto p-4'>
        <Link 
          to="/blog" 
          className={`mb-6 px-4 py-2 rounded flex items-center gap-2 w-fit ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition-all`}
        >
          <FaArrowLeft /> Back to blogs
        </Link>
        
        <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-[#112240]' : 'bg-white'}`}>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{blog.title}</h1>
          
          <div className='flex flex-wrap gap-4 mb-8 text-sm'>
            <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <FaCalendarAlt />
              <span>{blog.date}</span>
            </div>
            <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>By {blog.author}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaTag className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
              <div className='flex flex-wrap gap-2'>
                {blog.tags.map((tag, index) => (
                  <span key={index} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className={`blog-content leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
