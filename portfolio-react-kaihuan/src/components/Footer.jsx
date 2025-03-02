
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <div className="w-full bg-[#0a192f] dark:bg-[#0a192f] text-gray-300 py-8 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p className="text-sm">&copy; {year} Kai Huan. All rights reserved.</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a href="https://github.com/kaihuan-huang" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-pink-600">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kaihuan-huang/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-pink-600">
            LinkedIn
          </a>
          <a href="mailto:contact@kaihuanhuang.com" className="mx-2 hover:text-pink-600">
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
