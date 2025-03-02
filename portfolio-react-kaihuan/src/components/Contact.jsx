
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { darkMode } = useContext(ThemeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div name="contact" className={`w-full h-screen ${darkMode ? 'bg-[#0a192f] text-gray-300' : 'bg-[#ecf2fb] text-gray-800'} flex justify-center items-center p-4`}>
        <div className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">Contact</p>
                <p className="py-4">Submit the form below or send me an email</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-[600px] w-full">
                <input 
                    className={`p-2 ${darkMode ? 'bg-[#ccd6f6] text-gray-900' : 'bg-white text-gray-900'} rounded-md`}
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input 
                    className={`my-4 p-2 ${darkMode ? 'bg-[#ccd6f6] text-gray-900' : 'bg-white text-gray-900'} rounded-md`}
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea 
                    className={`p-2 ${darkMode ? 'bg-[#ccd6f6] text-gray-900' : 'bg-white text-gray-900'} rounded-md`}
                    name="message" 
                    rows="10" 
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md">
                    Let's Collaborate
                </button>
            </form>
        </div>
    </div>
  );
};

export default Contact;
