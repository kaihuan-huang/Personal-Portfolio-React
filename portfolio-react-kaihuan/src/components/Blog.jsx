import React, { useContext } from 'react';
import { BlogData } from '../Data/blogData';
import BlogCard from './BlogCard';
import BlogFilter from './BlogFilter';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    // Only show the 3 most recent blog posts on the home page
    const recentBlogs = BlogData.slice(0, 3);
    setBlogs(recentBlogs);
    setFilteredBlogs(recentBlogs);
  }, []);

  // Get unique categories for filter
  const categories = ['All', ...new Set(BlogData.map(blog => blog.category))];

  // Filter blogs by category
  const handleFilterChange = (category) => {
    setActiveFilter(category);

    if (category === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === category));
    }
  };

  return (
    <div name='blog' className={`w-full min-h-screen pt-24 pb-16 ${darkMode ? 'bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-300' : 'bg-gradient-to-b from-[#ecf2fb] to-[#c1d0f0] text-gray-800'}`}>
      <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className="flex justify-between items-center">
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Blog</p>
            <p className='py-6'>Check out my latest articles and insights</p>
          </div>
          <Link 
            to="/blog" 
            className={`px-4 py-2 rounded-md ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-pink-500 hover:bg-pink-600'} text-white transition-all`}
          >
            View All Blogs →
          </Link>
        </div>

        {/* Blog Filter */}
        <BlogFilter 
          categories={categories} 
          activeFilter={activeFilter} 
          handleFilterChange={handleFilterChange} 
        />

        {/* Blog Cards */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {filteredBlogs.length > 0 ? filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          )) : (
            <div className="bg-[#112240] p-6 rounded-lg shadow-lg text-center col-span-full">
              <p>No blog posts available in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;