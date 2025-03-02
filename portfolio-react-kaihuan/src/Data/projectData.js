
// Using WeatherDashboard image for Wavebreak since the file seems to be missing
import Wavebreak from '../assets/projects/weather.jpg'
import CodeApedia from '../assets/projects/CodeApedia.png'
import TechOPedia from '../assets/projects/TechOPedia.png'
import JsQuiz from '../assets/projects/quiz.jpg'
import PasswordGenerator from '../assets/projects/password.jpg'
import WeatherDashboard from '../assets/projects/weather.jpg'
import LightUp from '../assets/projects/weather.jpg' // Temporary using weather image

export const Data = [
  {
    id: 0,
    name: "LightUp",
    image: LightUp,
    github: "https://github.com/yourusername/lightup",
    live: "https://www.youtube.com/watch?v=Ylx-flD1pOg",
    description: "Digital solution revolutionizing donations by fostering genuine connections between young donors and NPOs.",
    technologies: ["UXUI", "Figma", "Object Oriented Design", "Strategic Product Development"],
    category: "Full Stack",
    featured: true
  },
    {
        id: 1,
        name: "Code-a-pedia",
        description: "A comprehensive coding resource platform for developers of all skill levels",
        image: CodeApedia,
        github: "https://github.com/kaihuan-huang/Code-a-pedia",
        live: "https://codeapedia.herokuapp.com/",
        technologies: ["JavaScript", "Node.js", "Express", "MySQL", "Handlebars"],
        featured: true,
        category: "Full Stack"
    },
    {
        id: 2,
        name: "Wavebreak Application",
        description: "An interactive Beach Dashboard application that allows users to search for nearby beaches in California",
        image: Wavebreak,
        github: "https://github.com/kaihuan-huang/wavebreak",
        live: "",
        technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
        featured: false,
        category: "Frontend"
    },
    {
        id: 3,
        name: "Tech-O-Pedia",
        description: "A tech blog platform allowing users to share and discuss the latest in technology",
        image: TechOPedia,
        github: "https://github.com/kaihuan-huang/Tech-Blog",
        live: "https://stormy-anchorage-90135.herokuapp.com/posts",
        technologies: ["Node.js", "Express", "MySQL", "MVC Pattern"],
        featured: true,
        category: "Full Stack"
    },
    {
        id: 4,
        name: "JavaScript Quiz",
        description: "An interactive quiz testing JavaScript knowledge with a timer and high score tracking",
        image: JsQuiz,
        github: "https://github.com/kaihuan-huang",
        live: "",
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
        featured: false,
        category: "Frontend"
    },
    {
        id: 5,
        name: "Password Generator",
        description: "An application that generates secure random passwords based on user-selected criteria",
        image: PasswordGenerator,
        github: "https://github.com/kaihuan-huang",
        live: "",
        technologies: ["JavaScript", "CSS", "HTML"],
        featured: false,
        category: "Frontend"
    },
    {
        id: 6,
        name: "Weather Dashboard",
        description: "A weather application that displays current and forecast weather data for cities worldwide",
        image: WeatherDashboard,
        github: "https://github.com/kaihuan-huang",
        live: "",
        technologies: ["JavaScript", "OpenWeather API", "Bootstrap", "Local Storage"],
        featured: false,
        category: "Frontend"
    },
    {
        id: 7,
        name: "E-Commerce Backend",
        description: "A robust RESTful API backend for e-commerce applications with product, category, and tag management",
        image: WeatherDashboard,
        github: "https://github.com/kaihuan-huang/E-Commerce-Back-End",
        live: "",
        technologies: ["Node.js", "Express", "Sequelize", "MySQL"],
        featured: true,
        category: "Backend"
    },
    {
        id: 8,
        name: "Team Profile Generator",
        description: "A command-line application that generates an HTML webpage displaying summaries for each team member",
        image: PasswordGenerator,
        github: "https://github.com/kaihuan-huang/Team-Profile-Generator",
        live: "",
        technologies: ["Node.js", "Jest", "Inquirer", "OOP"],
        featured: false,
        category: "Backend"
    },
    {
        id: 9,
        name: "Social Network API",
        description: "A MongoDB-based API for a social network application with user, thought, and reaction models",
        image: TechOPedia,
        github: "https://github.com/kaihuan-huang/Social-Network-API",
        live: "",
        technologies: ["MongoDB", "Mongoose", "Express", "Node.js"],
        featured: true,
        category: "Backend"
    }
]
