
import Wavebreak from '../assets/projects/Wavebreak.jpg'
import CodeApedia from '../assets/projects/CodeApedia.png'
import TechOPedia from '../assets/projects/TechOPedia.png'
import JsQuiz from '../assets/projects/quiz.jpg'
import PasswordGenerator from '../assets/projects/password.jpg'
import WeatherDashboard from '../assets/projects/weather.jpg'

export const Data = [
    {
        id: 1,
        name: "Code-a-pedia",
        description: "A comprehensive coding resource platform for developers of all skill levels",
        image: CodeApedia,
        github: "https://github.com/kaihuan-huang/Code-a-pedia",
        live: "https://codeapedia.herokuapp.com/",
        technologies: ["JavaScript", "Node.js", "Express", "MySQL", "Handlebars"]
    },
    {
        id: 2,
        name: "Wavebreak Application",
        description: "An interactive Beach Dashboard application that allows users to search for nearby beaches in California",
        image: Wavebreak,
        github: "https://github.com/kaihuan-huang/wavebreak",
        live: "",
        technologies: ["HTML", "CSS", "JavaScript", "API Integration"]
    },
    {
        id: 3,
        name: "Tech-O-Pedia",
        description: "A tech blog platform allowing users to share and discuss the latest in technology",
        image: TechOPedia,
        github: "https://github.com/kaihuan-huang/Tech-Blog",
        live: "https://stormy-anchorage-90135.herokuapp.com/posts",
        technologies: ["Node.js", "Express", "MySQL", "MVC Pattern"]
    },
    {
        id: 4,
        name: "JavaScript Quiz",
        description: "An interactive quiz testing JavaScript knowledge with a timer and high score tracking",
        image: JsQuiz,
        github: "https://github.com/kaihuan-huang",
        live: "",
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage"]
    },
    {
        id: 5,
        name: "Password Generator",
        description: "An application that generates secure random passwords based on user-selected criteria",
        image: PasswordGenerator,
        github: "https://github.com/kaihuan-huang",
        live: "",
        technologies: ["JavaScript", "CSS", "HTML"]
    },
    {
        id: 6,
        name: "Weather Dashboard",
        description: "A weather application that displays current and forecast weather data for cities worldwide",
        image: WeatherDashboard,
        github: "https://github.com/kaihuan-huang",
        live: "",
        technologies: ["JavaScript", "OpenWeather API", "Bootstrap", "Local Storage"]
    }
]
