import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const BlogFilter = ({ categories, activeFilter, handleFilterChange }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleFilterChange(category)}
          className={`px-3 py-1 rounded-md text-sm transition-colors ${
            activeFilter === category
              ? (darkMode ? 'bg-pink-600 text-white' : 'bg-pink-500 text-white')
              : (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BlogFilter;