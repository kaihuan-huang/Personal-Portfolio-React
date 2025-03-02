// Using WeatherDashboard image as fallback for missing images
import Wavebreak from '../assets/projects/weather.jpg'
import CodeApedia from '../assets/projects/CodeApedia.png'
import TechOPedia from '../assets/projects/TechOPedia.png'
import JsQuiz from '../assets/projects/quiz.jpg'
import PasswordGenerator from '../assets/projects/password.jpg'
import WeatherDashboard from '../assets/projects/weather.jpg'
// Fallback for missing lightup.jpg
import LightUp from '../assets/projects/weather.jpg'

// Project data
export const Data = [
  {
    id: 0,
    name: "LightUp",
    description: "Revolutionizing donations by fostering genuine connections between young donors and nonprofit organizations.",
    technologies: ["UX/UI", "Product Development", "Figma", "Design Thinking"],
    github: "https://github.com/kaihuan-huang/", 
    live: "https://www.youtube.com/watch?v=Ylx-flD1pOg",
    image: LightUp,
    featured: true,
    hasCaseStudy: true,
    latest: true
  },
  {
    id: 1,
    name: "CodeApedia",
    description: "A comprehensive blog platform where developers can share and discuss coding concepts, solutions, and experiences.",
    technologies: ["Node.js", "Express.js", "Handlebars", "MySQL", "Sequelize ORM"],
    github: "https://github.com/kaihuan-huang/Tech-Blog",
    live: "https://github.com/kaihuan-huang/Tech-Blog",
    image: CodeApedia,
    featured: true,
    hasCaseStudy: false
  },
  {
    id: 2,
    name: "TechOPedia",
    description: "An e-commerce platform for tech products with user authentication, shopping cart, and payment processing capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Stripe API"],
    github: "https://github.com/kaihuan-huang/eCommerce-store",
    live: "https://tech-opedia.herokuapp.com/",
    image: TechOPedia,
    featured: true,
    hasCaseStudy: false
  },
  {
    id: 3,
    name: "JavaScript Quiz Challenge",
    description: "An interactive timed quiz on JavaScript fundamentals that stores high scores to gauge progress compared to peers.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage API"],
    github: "https://github.com/kaihuan-huang/Quiz-Challenge",
    live: "https://kaihuan-huang.github.io/Quiz-Challenge/",
    image: JsQuiz,
    featured: false,
    hasCaseStudy: false
  },
  {
    id: 4,
    name: "Password Generator",
    description: "A tool that generates random passwords based on user-selected criteria for improved security.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kaihuan-huang/Password-Generator",
    live: "https://kaihuan-huang.github.io/Password-Generator/",
    image: PasswordGenerator,
    featured: false,
    hasCaseStudy: false
  },
  {
    id: 5,
    name: "Weather Dashboard",
    description: "A weather application that allows users to search for cities and view current and future weather conditions.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API", "Local Storage"],
    github: "https://github.com/kaihuan-huang/Weather-Dashboard",
    live: "https://kaihuan-huang.github.io/Weather-Dashboard/",
    image: WeatherDashboard,
    featured: false,
    hasCaseStudy: false
  },
  {
    id: 6,
    name: "Wavebreak",
    description: "A music application that allows users to discover new music and create playlists based on their preferences.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Spotify API"],
    github: "https://github.com/kaihuan-huang/Wavebreak",
    live: "https://wavebreak.herokuapp.com/",
    image: Wavebreak,
    featured: false,
    hasCaseStudy: false
  }
];