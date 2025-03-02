
import React, { useState, useEffect } from 'react';
import { BlogData } from '../Data/blogData';
import { FaArrowLeft, FaCalendarAlt, FaTag } from 'react-icons/fa';

const BlogPost = ({ id }) => {
  const [blog, setBlog] = useState(null);
  
  useEffect(() => {
    // Find the blog post with the matching ID
    const foundBlog = BlogData.find(blog => blog.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return (
      <div className='w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-300 pt-24 pb-16'>
        <div className='max-w-[800px] mx-auto p-4'>
          <div className='bg-[#112240] p-6 rounded-lg shadow-lg text-center'>
            <p>Blog post not found.</p>
            <button 
              onClick={() => window.history.back()} 
              className='mt-4 bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2 mx-auto'
            >
              <FaArrowLeft /> Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-300 pt-24 pb-16'>
      <div className='max-w-[800px] mx-auto p-4'>
        <button 
          onClick={() => window.history.back()} 
          className='mb-6 bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-600 transition-all'
        >
          <FaArrowLeft /> Back to blogs
        </button>
        
        <div className='bg-[#112240] p-8 rounded-lg shadow-lg'>
          <h1 className='text-3xl md:text-4xl font-bold text-white mb-4'>{blog.title}</h1>
          
          <div className='flex flex-wrap gap-4 mb-8 text-sm'>
            <div className='flex items-center gap-1 text-gray-400'>
              <FaCalendarAlt />
              <span>{blog.date}</span>
            </div>
            <div className='flex items-center gap-1 text-gray-400'>
              <span>By {blog.author}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaTag className='text-gray-400' />
              <div className='flex flex-wrap gap-2'>
                {blog.tags.map((tag, index) => (
                  <span key={index} className='text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className='blog-content text-gray-300 leading-relaxed'
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
