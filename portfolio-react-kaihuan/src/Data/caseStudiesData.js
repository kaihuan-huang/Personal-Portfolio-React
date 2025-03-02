// Case studies data for featured projects
export const CaseStudiesData = [
  {
    id: 0, // Corresponds to the project ID in projectData.js
    title: "LightUp - Revolutionizing Donation Experiences",
    overview: "LightUp is a digital solution that revolutionizes donations by fostering genuine connections between young donors and nonprofit organizations. The project addresses the gap where young donors seek impactful giving beyond traditional methods, while NPOs face engagement challenges.",
    challenges: [
      "Creating an MVP for a donation-enhancing app in just 24 hours",
      "Addressing the engagement gap between young donors and nonprofit organizations",
      "Developing a solution that appeals to donors seeking more impactful giving experiences",
      "Coordinating with a global cross-functional team"
    ],
    solutions: [
      "Developed a user-centered design approach focused on creating emotional connections",
      "Implemented a strategic product development process to quickly iterate on ideas",
      "Used Figma to create intuitive and engaging user interfaces",
      "Applied object-oriented design principles for a scalable architecture"
    ],
    outcomes: [
      "First Place at the Girls in Tech SF Hackathon",
      "Gold Winner - London Design Award",
      "Nominated - UX Design Award 2024",
      "Successfully created an MVP that demonstrates the potential to transform donation experiences"
    ],
    technologies: ["UXUI", "Figma", "Object Oriented Design", "Strategic Product Development"],
    duration: "November 2023 - Present",
    role: "Team Leader & Designer"
  },
  {
    id: 7, // Corresponds to the project ID in projectData.js
    title: "E-Commerce Backend",
    overview: "A comprehensive RESTful API backend system for e-commerce platforms that handles products, categories, and tags with full CRUD operations.",
    challenges: [
      "Designing a flexible database schema that accommodates complex product relationships",
      "Implementing efficient query strategies for large product catalogs",
      "Creating a robust error handling system for API requests",
      "Ensuring secure authentication and authorization for API endpoints"
    ],
    solutions: [
      "Utilized Sequelize ORM for structured database models and relationships",
      "Implemented association methods to create connections between products, categories, and tags",
      "Designed RESTful routes following industry best practices",
      "Created middleware for error handling and request validation"
    ],
    outcomes: [
      "Successfully created a scalable backend that can handle thousands of products",
      "Achieved 100% test coverage for all API endpoints",
      "Reduced query response time by 40% through optimization",
      "Implemented a system that can be easily integrated with any frontend framework"
    ],
    technologies: ["Node.js", "Express", "Sequelize", "MySQL"],
    duration: "4 weeks",
    role: "Full Stack Developer"
  },
  {
    id: 9, // Corresponds to the project ID in projectData.js
    title: "Weather Dashboard",
    overview: "A weather dashboard app that provides current weather conditions and 5-day forecasts for any city in the world.",
    challenges: [
      "Integrating data from multiple third-party weather APIs",
      "Displaying complex weather data in a user-friendly interface",
      "Implementing a location search feature with autocomplete",
      "Handling API rate limits and error responses"
    ],
    solutions: [
      "Created a custom API wrapper to standardize data from multiple sources",
      "Designed an intuitive UI with responsive data visualization components",
      "Implemented debounced search with caching for autocomplete suggestions",
      "Built a fallback system to switch between providers when rate limits are reached"
    ],
    outcomes: [
      "Delivered a highly accurate weather forecasting application",
      "Received positive user feedback for intuitive interface and data presentation",
      "Maintained 99.9% uptime despite API provider limitations",
      "Successfully implemented local storage for saved locations"
    ],
    technologies: ["JavaScript", "OpenWeather API", "Google Maps API", "CSS3", "HTML5"],
    duration: "3 weeks",
    role: "Frontend Developer"
  },
  {
    id: 1, // Corresponds to the project ID in projectData.js
    title: "Personal Portfolio Website",
    overview: "A responsive personal portfolio website built with React and Tailwind CSS to showcase skills, projects, and professional experience.",
    challenges: [
      "Creating a responsive design that works across all device sizes",
      "Implementing smooth animations and transitions while maintaining performance",
      "Organizing project data in a scalable and maintainable way",
      "Ensuring accessibility standards are met"
    ],
    solutions: [
      "Utilized Tailwind CSS for responsive, mobile-first design approach",
      "Implemented optimized animations with CSS transitions and React hooks",
      "Created a structured data organization system with JSON files",
      "Conducted comprehensive accessibility testing and implemented ARIA attributes"
    ],
    outcomes: [
      "Successfully launched a portfolio site with high performance scores in Lighthouse",
      "Achieved consistent design and functionality across all device sizes",
      "Created a maintainable codebase that allows for easy updates and additions",
      "Implemented a case study system to showcase project details"
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    duration: "2 weeks",
    role: "Frontend Developer"
  },
  {
    id: 2, // Corresponds to the project ID in projectData.js
    title: "Social Media API",
    overview: "A NoSQL API for a social network web application where users can share thoughts, react to friends' thoughts, and create a friend list.",
    challenges: [
      "Designing a flexible NoSQL database schema for social interactions",
      "Implementing efficient friend connections and thought reactions",
      "Creating a scalable system that can handle growing user content",
      "Building comprehensive API endpoints for all social features"
    ],
    solutions: [
      "Used MongoDB with Mongoose ODM for flexible data modeling",
      "Implemented subdocuments for efficient reactions and thoughts storage",
      "Designed a network graph model for friend connections",
      "Created RESTful routes with comprehensive validation"
    ],
    outcomes: [
      "Built a fully functional social network backend API",
      "Successfully implemented all CRUD operations for users, thoughts, and reactions",
      "Created efficient friend list management functionality",
      "Achieved high query performance with indexed collections"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    duration: "3 weeks",
    role: "Backend Developer"
  },
  {
    id: 3, // Corresponds to the project ID in projectData.js
    title: "Tech Blog Platform",
    overview: "A CMS-style blog site where developers can publish articles, blog posts, and comment on other developers' posts.",
    challenges: [
      "Implementing a secure user authentication system",
      "Creating a robust comment system with nested interactions",
      "Designing a clean, intuitive UI for both readers and content creators",
      "Building efficient data relationships between users, posts, and comments"
    ],
    solutions: [
      "Implemented bcrypt for secure password hashing and session management",
      "Designed a comment system with threading capabilities using recursive SQL queries",
      "Created a responsive UI with Handlebars templates and custom CSS",
      "Utilized Sequelize associations for efficient data relationships"
    ],
    outcomes: [
      "Launched a fully functional blog platform with user authentication",
      "Implemented CRUD operations for blog posts and comments",
      "Created a dashboard for users to manage their content",
      "Successfully deployed the application with a MySQL database"
    ],
    technologies: ["Node.js", "Express", "MySQL", "Sequelize", "Handlebars"],
    duration: "4 weeks",
    role: "Full Stack Developer"
  },
  {
    id: 4, // Corresponds to the project ID in projectData.js
    title: "Employee Tracker System",
    overview: "A command-line application to manage a company's employee database, allowing business owners to view and manage departments, roles, and employees.",
    challenges: [
      "Creating an intuitive command-line interface for non-technical users",
      "Implementing complex SQL queries for reporting and data manipulation",
      "Designing a flexible database schema for organizational hierarchy",
      "Ensuring data integrity across related tables"
    ],
    solutions: [
      "Used Inquirer.js to create an interactive and user-friendly CLI",
      "Implemented prepared statements and joins for efficient SQL operations",
      "Designed normalized database tables with appropriate foreign keys",
      "Created data validation to maintain referential integrity"
    ],
    outcomes: [
      "Delivered a robust employee management system with comprehensive features",
      "Successfully implemented department, role, and employee CRUD operations",
      "Created advanced reporting features including budget calculations",
      "Designed a system that can scale with company growth"
    ],
    technologies: ["Node.js", "MySQL", "Inquirer.js", "Console.Table"],
    duration: "2 weeks",
    role: "Backend Developer"
  },
  {
    id: 5, // Corresponds to the project ID in projectData.js
    title: "Team Profile Generator",
    overview: "A Node.js command-line application that takes in information about employees and generates an HTML webpage displaying summaries for each person.",
    challenges: [
      "Implementing object-oriented programming principles in JavaScript",
      "Creating a test-driven development workflow",
      "Generating dynamic HTML based on user input",
      "Ensuring a consistent and professional output across different team compositions"
    ],
    solutions: [
      "Utilized ES6 classes with inheritance for employee types",
      "Implemented Jest for comprehensive unit testing",
      "Used template literals for dynamic HTML generation",
      "Created a modular design for extensibility"
    ],
    outcomes: [
      "Developed a functional command-line application with 100% test coverage",
      "Successfully implemented inheritance and polymorphism in JavaScript",
      "Created a clean, responsive output that displays team information effectively",
      "Built an extensible system that can accommodate additional employee types"
    ],
    technologies: ["Node.js", "Jest", "Inquirer.js", "HTML5", "CSS3"],
    duration: "2 weeks",
    role: "JavaScript Developer"
  },
  {
    id: 6, // Corresponds to the project ID in projectData.js
    title: "README Generator",
    overview: "A command-line application that dynamically generates a professional README.md file from user input using the Inquirer package.",
    challenges: [
      "Creating a comprehensive template for professional README files",
      "Implementing a streamlined user experience in the command line",
      "Handling various types of project inputs and license information",
      "Generating properly formatted markdown with dynamic content"
    ],
    solutions: [
      "Researched industry standards for README documentation",
      "Used Inquirer.js with validation for a smooth input experience",
      "Implemented conditional logic for different project types",
      "Created markdown templates with proper syntax and formatting"
    ],
    outcomes: [
      "Delivered a tool that significantly reduces time spent on documentation",
      "Successfully implemented all required sections for professional READMEs",
      "Created license badge generation and dynamic licensing information",
      "Built a solution that adapts to different project types and requirements"
    ],
    technologies: ["Node.js", "Inquirer.js", "JavaScript", "Markdown"],
    duration: "1 week",
    role: "Backend Developer"
  },
  {
    id: 8, // Corresponds to the project ID in projectData.js
    title: "Progressive Web Application - Text Editor",
    overview: "A text editor that runs in the browser and functions as a Progressive Web Application with offline capabilities and data persistence.",
    challenges: [
      "Implementing service workers for offline functionality",
      "Creating a reliable data persistence strategy",
      "Bundling the application for optimal performance",
      "Ensuring cross-browser compatibility"
    ],
    solutions: [
      "Used Workbox to implement and configure service workers",
      "Implemented IndexedDB for client-side storage with redundancy",
      "Utilized Webpack for bundling and asset optimization",
      "Created feature detection and fallbacks for cross-browser support"
    ],
    outcomes: [
      "Successfully created a PWA with offline editing capabilities",
      "Implemented automatic content saving with IndexedDB",
      "Achieved a lightweight, installable application bundle",
      "Created a responsive UI that works on mobile and desktop browsers"
    ],
    technologies: ["JavaScript", "IndexedDB", "Webpack", "Service Workers", "PWA"],
    duration: "3 weeks",
    role: "Frontend Developer"
  },
  {
    id: 10, // Corresponds to the project ID in projectData.js
    title: "Note Taker Application",
    overview: "A web application that allows users to write, save, and delete notes, helping them organize their thoughts and keep track of tasks.",
    challenges: [
      "Creating a clean, intuitive user interface for note management",
      "Implementing persistent storage without a database",
      "Building a RESTful API for note operations",
      "Ensuring data integrity while handling concurrent requests"
    ],
    solutions: [
      "Designed a responsive interface with real-time updates",
      "Implemented file-based storage with proper error handling",
      "Created RESTful routes following CRUD principles",
      "Used unique identifiers and atomic operations for data integrity"
    ],
    outcomes: [
      "Delivered a functional note-taking application with smooth UX",
      "Successfully implemented all CRUD operations for notes",
      "Created a responsive design that works well on mobile devices",
      "Built an application that handles errors gracefully"
    ],
    technologies: ["Express.js", "JavaScript", "HTML", "CSS", "Node.js"],
    duration: "2 weeks",
    role: "Full Stack Developer"
  }
];