
// Case studies data for featured projects
export const CaseStudiesData = [
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
    title: "Social Network API",
    overview: "A MongoDB-based API for social networking applications featuring user profiles, thought sharing, friend connections, and reaction capabilities.",
    challenges: [
      "Designing a NoSQL database structure optimized for social interactions",
      "Handling complex nested data like comments and reactions",
      "Managing user relationships (friends, followers) efficiently",
      "Ensuring scalability for potentially viral content"
    ],
    solutions: [
      "Leveraged MongoDB's document model for flexible data structures",
      "Used Mongoose schema validation to ensure data integrity",
      "Implemented aggregation pipelines for complex data retrieval",
      "Created reusable controllers for similar operations across models"
    ],
    outcomes: [
      "Built a complete API with user, thought, and reaction models",
      "Achieved sub-100ms response times for most API endpoints",
      "Created a system capable of handling millions of user interactions",
      "Developed comprehensive API documentation for frontend developers"
    ],
    technologies: ["MongoDB", "Mongoose", "Express", "Node.js"],
    duration: "5 weeks",
    role: "Backend Developer"
  }
];
