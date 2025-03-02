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