
import React from 'react';

const BlogFilter = ({ categories, activeFilter, handleFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleFilterChange(category)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeFilter === category
              ? 'bg-pink-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BlogFilter;
