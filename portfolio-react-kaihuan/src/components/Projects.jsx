import React from "react";
// import { Data } from "../Data/projectData.js";
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
            {/* Grid item1 */}
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
                  <p>An interactive Beach Dashboard application allows users to search the nearby beaches in California</p>
                    <a href="https://github.com/kaihuan-huang/wavebreak">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                      >
                        Github
                      </button>
                    </a>
                    <a href=" https://kaihuan-huang.github.io/wavebreak/">
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

            {/* Grid item2 */}
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
                <p>A knowledge wiki for coding terms/definitions/slangs to user in coding related background</p>
                <div className="pt-8 text-center">
                  <a href="https://github.com/pjsherpa/Code-a-pedia">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href="https://codeapedia.herokuapp.com/">
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

            {/* Grid item3 */}
            <div
              style={{ backgroundImage: `url(${JsQuiz })` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                Quiz App for JavaScript
                </span>
                <div className="pt-8 text-center">
                <p>A time coding quiz with multiple-choice questions</p>
                  <a href="https://kaihuan-huang.github.io/Quiz_App-JavaScript-/">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href="https://kaihuan-huang.github.io/Quiz_App-JavaScript-/">
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

            {/* Grid item4 */}
            <div
              style={{ backgroundImage: `url(${PasswordGenerator})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                Password Generator
                </span>
                <p>Will generate a random password based on your selected criteria.</p>
                <div className="pt-8 text-center">
                  <a href="https://github.com/kaihuan-huang/Password_Generator">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href=" https://kaihuan-huang.github.io/Password_Generator/">
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

            

            {/* Grid item5 */}
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
                <p>CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.</p>
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
                Weather Dashboard Applications
                </span>
                <p>A Weather Dashboard application allows a user to see the weather outlook for multiple cities.</p>
                <div className="pt-8 text-center">
                  <a href=" https://github.com/kaihuan-huang/Weather_Dashboard_App">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href=" https://kaihuan-huang.github.io/Weather_Dashboard_App/">
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
                Work Day Scheduler
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
              style={{ backgroundImage: `url(${ PWATextEditor})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                Text-Editor
                </span>
                <div className="pt-8 text-center">
                  <a href=" https://github.com/kaihuan-huang/Progressive-Web-Applications-PWA--Text-Editor">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Progressive-Web-Applications
                    </button>
                  </a>
                  <a href="https://warm-eyrie-41345.herokuapp.com/">
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
              style={{ backgroundImage: `url(${shopShopCenter})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto projects "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                Shop-Shop-Center
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/kaihuan-huang/shop-shop-center">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Github
                    </button>
                  </a>
                  <a href="/">
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
