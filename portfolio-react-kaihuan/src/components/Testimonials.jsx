
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Sample testimonial data - replace with real testimonials
const testimonialData = [
  {
    id: 1,
    name: "Jane Smith",
    role: "Project Manager",
    company: "Tech Solutions Inc.",
    testimonial: "Kaihuan is an exceptional developer who delivers high-quality work consistently. Their attention to detail and problem-solving skills are impressive.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "John Doe",
    role: "Senior Developer",
    company: "WebDev Studio",
    testimonial: "Working with Kaihuan was a great experience. They have strong technical skills and are always willing to go the extra mile to ensure project success.",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    company: "Creative Digital",
    testimonial: "Kaihuan has an excellent understanding of frontend development and worked seamlessly with our design team to create beautiful, functional interfaces.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <div name="testimonials" className="w-full min-h-screen bg-gradient-to-b from-[#8892b0] to-[#0a192f] text-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            Testimonials
          </h2>
          <p className="py-6 text-gray-300">What people say about working with me</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialData.map((item) => (
            <div 
              key={item.id}
              className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-pink-600/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full mr-4 border-2 border-pink-600"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-gray-300">{item.role}</p>
                  <p className="text-pink-600">{item.company}</p>
                </div>
              </div>
              
              <div className="flex-grow flex flex-col">
                <FaQuoteLeft className="text-pink-600 mb-2" />
                <p className="text-gray-300 flex-grow">{item.testimonial}</p>
                <div className="flex justify-end">
                  <FaQuoteRight className="text-pink-600 mt-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
