
// Case studies data for featured projects
export const CaseStudiesData = [
  {
    id: 1, // E-Commerce Platform
    title: "E-Commerce Platform",
    overview: "A scalable e-commerce platform with product catalog, shopping cart, user accounts, payments integration, and order management.",
    challenges: [
      "Building a scalable architecture that can handle traffic spikes during sales",
      "Implementing secure payment processing with multiple providers",
      "Creating a responsive design that works across all devices",
      "Optimizing database queries for fast product searches and filters"
    ],
    solutions: [
      "Developed a microservices architecture with separate services for products, orders, and users",
      "Integrated with Stripe and PayPal with a unified payment abstraction layer",
      "Used React with Tailwind CSS for a fully responsive design system",
      "Implemented database indexing and caching strategies for performance"
    ],
    outcomes: [
      "Platform supports thousands of concurrent users with 99.9% uptime",
      "Increased conversion rate by 35% through optimized checkout flow",
      "Reduced page load times by 60% through code splitting and lazy loading",
      "Successfully processed over $50,000 in transactions during testing phase"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Stripe API"],
    duration: "4 months",
    role: "Full Stack Developer"
  },
  {
    id: 2, // AI-Powered Task Manager
    title: "AI-Powered Task Manager",
    overview: "An intelligent task management application that uses natural language processing to categorize, prioritize, and set deadlines for tasks.",
    challenges: [
      "Developing an accurate natural language understanding model for task analysis",
      "Creating an intuitive UI that doesn't overwhelm users with AI features",
      "Ensuring real-time updates across multiple devices",
      "Balancing server processing with client-side capabilities"
    ],
    solutions: [
      "Trained a custom NLP model on task-specific datasets using TensorFlow",
      "Implemented a clean, minimal UI with progressive disclosure of advanced features",
      "Used WebSockets for real-time synchronization across devices",
      "Optimized the application with a hybrid approach of server and client processing"
    ],
    outcomes: [
      "Achieved 87% accuracy in task categorization and priority assignment",
      "Reduced time spent on task organization by 40% according to user feedback",
      "Application maintains sub-200ms response times even with complex analysis",
      "Featured in ProductHunt with over 500 upvotes"
    ],
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "SQLite", "Natural Language Processing"],
    duration: "3 months",
    role: "AI Developer & Frontend Engineer"
  },
  {
    id: 3, // Real-Time Chat Application
    title: "Real-Time Chat Application",
    overview: "A feature-rich chat platform supporting text, voice, and video communication with end-to-end encryption and group channels.",
    challenges: [
      "Implementing secure end-to-end encryption for all communication",
      "Handling WebRTC connections for peer-to-peer video calls",
      "Ensuring message delivery even with unreliable connections",
      "Scaling WebSocket connections for thousands of concurrent users"
    ],
    solutions: [
      "Developed custom encryption protocol using the Web Crypto API",
      "Created a signaling server for WebRTC negotiation with fallback mechanisms",
      "Implemented message queuing with delivery receipts and offline support",
      "Used Socket.io with a horizontally scalable architecture on Node.js"
    ],
    outcomes: [
      "Successfully encrypted all communications with zero reported breaches",
      "Achieved high-quality video calls with adaptive bitrate based on connection quality",
      "Reduced message delivery failures by 98% compared to previous solutions",
      "Platform supports over 10,000 concurrent connections with minimal latency"
    ],
    technologies: ["React", "Socket.io", "WebRTC", "Express", "MongoDB", "JWT"],
    duration: "5 months",
    role: "Lead Developer"
  },
  {
    id: 7, // E-Commerce Backend
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
    id: 9, // AI Image Generation Platform
    title: "AI Image Generation Platform",
    overview: "A web application that utilizes Generative Adversarial Networks (GANs) to create unique, high-quality images based on text descriptions.",
    challenges: [
      "Training GAN models capable of generating high-resolution, realistic images",
      "Building a user-friendly interface for text-to-image generation",
      "Optimizing the inference process for reasonable response times",
      "Managing computational resources efficiently for cost-effectiveness"
    ],
    solutions: [
      "Fine-tuned pre-existing GAN models on specific domains to improve quality",
      "Created an intuitive UI with real-time previews and generation options",
      "Implemented a queuing system for handling multiple generation requests",
      "Used AWS Elastic Container Service for scalable, on-demand processing"
    ],
    outcomes: [
      "Platform generates images with 85% user satisfaction rating",
      "Reduced image generation time from minutes to seconds",
      "Successfully created a gallery of over 10,000 AI-generated images",
      "Integrated with social media platforms for direct sharing"
    ],
    technologies: ["Python", "TensorFlow", "GANs", "Flask", "React", "AWS S3"],
    duration: "6 months",
    role: "Machine Learning Engineer & Full Stack Developer"
  },
  {
    id: 10, // Blockchain Voting System
    title: "Blockchain Voting System",
    overview: "A secure, transparent voting platform built on Ethereum blockchain that ensures vote integrity and prevents tampering or double-voting.",
    challenges: [
      "Ensuring voter anonymity while maintaining verification of eligibility",
      "Creating a user-friendly interface for non-technical voters",
      "Minimizing Ethereum gas costs for voting transactions",
      "Providing transparency in the vote counting process"
    ],
    solutions: [
      "Implemented zero-knowledge proofs for anonymous yet verifiable voting",
      "Designed a step-by-step interface that abstracts blockchain complexity",
      "Optimized smart contract code to reduce gas consumption",
      "Created a real-time dashboard showing voting progress and results"
    ],
    outcomes: [
      "Successfully conducted a pilot election with 500 participants",
      "Reduced transaction costs by 60% compared to similar blockchain voting systems",
      "Achieved 100% accuracy in vote tallying with cryptographic verification",
      "System received security audit with no critical vulnerabilities found"
    ],
    technologies: ["Solidity", "Ethereum", "React", "Web3.js", "Truffle", "Metamask"],
    duration: "7 months",
    role: "Blockchain Developer & Frontend Engineer"
  }
];
