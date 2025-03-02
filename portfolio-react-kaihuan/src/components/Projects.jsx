import React from "react";
import Wavebreak from "../assets/projects/wave.jpg";
import CodeApedia from "../assets/projects/code.jpg";
import TechOPedia from "../assets/projects/techblog.jpg";
import JsQuiz from "../assets/projects/quiz.jpg";
import PasswordGenerator from "../assets/projects/password.jpg";
import WeatherDashboard from "../assets/projects/weather.jpg";
import WorkDayScheduler from "../assets/projects/calender.jpg";
import PWATextEditor from "../assets/projects/textEditorPWA.jpg";
import shopShopCenter from "../assets/projects/eCommerce.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#8892b0] text-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
            My Projects
          </h2>
          <p className="py-6 text-gray-300">Check out some of my recent work</p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Wavebreak */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={Wavebreak} alt="Wavebreak" className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" />
            </div>
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Wavebreak</h3>
              <p className="text-gray-300 text-sm mb-4">An interactive Beach Dashboard application that allows users to search for nearby beaches in California</p>
              <div className="flex justify-between">
                <a href="https://github.com/kaihuan-huang/wavebreak" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300">GitHub</a>
                <a href="https://kaihuan-huang.github.io/wavebreak/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300">Live Demo</a>
              </div>
            </div>
          </div>

          {/* CodeApedia */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={CodeApedia} alt="CodeApedia" className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" />
            </div>
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Code-a-pedia</h3>
              <p className="text-gray-300 text-sm mb-4">A comprehensive coding resource platform for developers of all skill levels</p>
              <div className="flex justify-between">
                <a href="https://github.com/pjsherpa/Code-a-pedia" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300">GitHub</a>
                <a href="https://codeapedia.herokuapp.com/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300">Live Demo</a>
              </div>
            </div>
          </div>

          {/* TechOPedia */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={TechOPedia} alt="TechOPedia" className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" />
            </div>
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Tech-O-Pedia</h3>
              <p className="text-gray-300 text-sm mb-4">A tech blog platform allowing users to share and discuss the latest in technology</p>
              <div className="flex justify-between">
                <a href="https://github.com/kaihuan-huang/Tech-Blog" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300">GitHub</a>
                <a href="https://stormy-anchorage-90135.herokuapp.com/posts" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Weather Dashboard */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={WeatherDashboard} alt="Weather Dashboard" className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" />
            </div>
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Weather Dashboard</h3>
              <p className="text-gray-300 text-sm mb-4">A weather application that displays current and forecast weather data for cities</p>
              <div className="flex justify-between">
                <a href="https://github.com/kaihuan-huang/Weather_Dashboard_App" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300">GitHub</a>
                <a href="https://kaihuan-huang.github.io/Weather_Dashboard_App/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Work Day Scheduler */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={WorkDayScheduler} alt="Work Day Scheduler" className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" />
            </div>
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Work Day Scheduler</h3>
              <p className="text-gray-300 text-sm mb-4">A simple calendar application that allows users to save events for each hour of the day</p>
              <div className="flex justify-between">
                <a href="https://github.com/kaihuan-huang/Work-Day-Scheduler" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300">GitHub</a>
                <a href="https://kaihuan-huang.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Password Generator */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={PasswordGenerator} alt="Password Generator" className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" />
            </div>
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Password Generator</h3>
              <p className="text-gray-300 text-sm mb-4">An application that generates random passwords based on user-selected criteria</p>
              <div className="flex justify-between">
                <a href="https://github.com/kaihuan-huang/Password_Generator" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300">GitHub</a>
                <a href="https://kaihuan-huang.github.io/Password_Generator/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300">Live Demo</a>
              </div>
            </div>
          </div>
          {/* JsQuiz */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={JsQuiz} alt="JsQuiz" className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" />
            </div>
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">JavaScript Quiz App</h3>
              <p className="text-gray-300 text-sm mb-4">A timed coding quiz with multiple-choice questions.</p>
              <div className="flex justify-between">
                <a href="https://github.com/kaihuan-huang/Quiz_App-JavaScript-" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300">GitHub</a>
                <a href="https://kaihuan-huang.github.io/Quiz_App-JavaScript-/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300">Live Demo</a>
              </div>
            </div>
          </div>

          {/* PWATextEditor */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={PWATextEditor} alt="PWATextEditor" className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" />
            </div>
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Text Editor PWA</h3>
              <p className="text-gray-300 text-sm mb-4">A text editor built as a Progressive Web App (PWA).</p>
              <div className="flex justify-between">
                <a href="https://github.com/kaihuan-huang/Progressive-Web-Applications-PWA--Text-Editor" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300">GitHub</a>
                <a href="https://warm-eyrie-41345.herokuapp.com/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300">Live Demo</a>
              </div>
            </div>
          </div>

          {/* shopShopCenter */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between bg-[#112240] overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
              <img src={shopShopCenter} alt="shopShopCenter" className="w-full h-full object-cover group-hover:opacity-60 transition-all duration-500" />
            </div>
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold text-white mb-2">Shop-Shop-Center</h3>
              <p className="text-gray-300 text-sm mb-4">An e-commerce platform.</p>
              <div className="flex justify-between">
                <a href="https://github.com/kaihuan-huang/shop-shop-center" target="_blank" rel="noreferrer" className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-all duration-300">GitHub</a>
                <a href="/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all duration-300">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;