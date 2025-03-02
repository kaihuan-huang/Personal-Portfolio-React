
import React from 'react';

const Contact = () => {
    return (
      <div name='contact' className='w-full min-h-screen text-gray-500 py-16 px-4'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full pb-8'>
            <div className='text-center sm:text-left pb-8'>
              <p className='text-4xl font-bold inline text-pink-600'>
              Contact Me!
              </p>
            </div>
            <form action="https://getform.io/f/1c0e4abb-a618-4077-b6a2-37a87fff03ba" method="POST" className='flex flex-col max-w-[700px] w-full'>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Name' name='name' />
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-4' type="email" placeholder='name@company.com' name='email' required/>
              <textarea className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name="message" rows="10" placeholder='Your message...'></textarea> 
              <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-4 mb-2'>
                Submit!
              </button> 
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-300 py-16">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">Contact</p>
          <p className="py-6">Submit the form below or send me an email</p>
        </div>
        
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 bg-[#112240] border-2 border-gray-700 rounded-md text-white focus:outline-none mb-4"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 bg-[#112240] border-2 border-gray-700 rounded-md text-white focus:outline-none mb-4"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-[#112240] border-2 border-gray-700 rounded-md text-white focus:outline-none mb-4 resize-none"
              required
            />
            <button 
              type="submit"
              className="text-white bg-pink-600 px-6 py-3 my-2 flex items-center justify-center rounded-md hover:bg-pink-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
