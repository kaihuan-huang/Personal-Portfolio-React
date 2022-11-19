import React from "react";
// import { Data } from "../Data/projectData.js";
import Wavebreak from "../assets/projects/wave.jpg";
import CodeApedia from "../assets/projects/code.jpg";
import TechOPedia from "../assets/projects/techblog.jpg";
import JsQuiz from "../assets/projects/quiz.jpg";
import WeatherDashboard from "../assets/projects/weather.jpg";
import WorkDayScheduler from "../assets/projects/calender.jpg";

const Projects = () => {
  // const project = Data;

  return (
    <div name="projects" className="w-full h-screen bg-[#8892b0] text-gray-100">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline text-pink-600">
            My Projects!
          </p>
          {/* Containers for projects */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Grid item */}
            <div
              style={{ backgroundImage: `url(${Wavebreak})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* <div> */}
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    Wavebreak
                  </span>
                  <div className="pt-8 text-center">
                    <a href="https://github.com/kaihuan-huang/wavebreak">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Github
                      </button>
                    </a>
                    <a href="https://stormy-anchorage-90135.herokuapp.com/posts">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        live
                      </button>
                    </a>
                  </div>
                </div>
              {/* </div> */}
            </div>

            {/* Grid item */}
            <div
              style={{ backgroundImage: `url(${CodeApedia})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  Code-a-pedia
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/kaihuan-huang/wavebreak">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href="https://stormy-anchorage-90135.herokuapp.com/posts">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      live
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Grid item */}
            <div
              style={{ backgroundImage: `url(${JsQuiz })` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  Code-a-pedia
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/kaihuan-huang/wavebreak">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href="https://stormy-anchorage-90135.herokuapp.com/posts">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      live
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Grid item */}
            <div
              style={{ backgroundImage: `url(${CodeApedia})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  Code-a-pedia
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/kaihuan-huang/wavebreak">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href="https://stormy-anchorage-90135.herokuapp.com/posts">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      live
                    </button>
                  </a>
                </div>
              </div>
            </div>

            

            {/* Grid item */}
            <div
              style={{ backgroundImage: `url(${TechOPedia})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  Tech-O-Pedia
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/kaihuan-huang/Tech-Blog">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href="https://stormy-anchorage-90135.herokuapp.com/posts">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      live
                    </button>
                  </a>
                </div>
              </div>
            </div>

             {/* Grid item */}
             <div
              style={{ backgroundImage: `url(${WeatherDashboard})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  Code-a-pedia
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/kaihuan-huang/wavebreak">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href="https://stormy-anchorage-90135.herokuapp.com/posts">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      live
                    </button>
                  </a>
                </div>
              </div>
            </div>

             {/* Grid item */}
             <div
              style={{ backgroundImage: `url(${WorkDayScheduler})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  Code-a-pedia
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/kaihuan-huang/wavebreak">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href="https://stormy-anchorage-90135.herokuapp.com/posts">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      live
                    </button>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
