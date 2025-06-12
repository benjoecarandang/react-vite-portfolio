import PokemonProjectImage from "@/assets/Project_Pokemon.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    technologies: string[];
    features: string[];
    learnings: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online shopping platform with payment integration.",
    imageUrl: "https://placehold.co/600x400/2563eb/white?text=E-commerce",
    tags: ["React", "Node.js", "MongoDB"],
    caseStudy: {
      overview: "A comprehensive e-commerce platform designed to provide a seamless shopping experience. The project focused on creating a user-friendly interface while maintaining robust backend functionality.",
      challenge: "The main challenges included implementing secure payment processing, managing real-time inventory, and ensuring a smooth user experience across different devices.",
      solution: "We implemented a microservices architecture with React for the frontend and Node.js for the backend. MongoDB was used for flexible data storage, and we integrated Stripe for secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      features: [
        "Secure payment processing",
        "Real-time inventory management",
        "User authentication and authorization",
        "Responsive design",
        "Order tracking system"
      ],
      learnings: [
        "Importance of proper error handling in payment systems",
        "Optimizing database queries for better performance",
        "Implementing effective caching strategies"
      ]
    }
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing creative work.",
    imageUrl: "https://placehold.co/600x400/7c3aed/white?text=Portfolio",
    tags: ["HTML", "CSS", "JavaScript"],
    caseStudy: {
      overview: "A modern portfolio website designed to showcase creative work in an engaging and interactive way.",
      challenge: "Creating a unique and memorable user experience while maintaining performance and accessibility.",
      solution: "Implemented a custom design system with smooth animations and transitions, optimized for performance.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Webpack"],
      features: [
        "Interactive animations",
        "Responsive design",
        "Project showcase",
        "Contact form",
        "Blog section"
      ],
      learnings: [
        "Optimizing animations for performance",
        "Implementing accessible design patterns",
        "Managing complex state in vanilla JavaScript"
      ]
    }
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A productivity app for organizing daily tasks and projects.",
    imageUrl: "https://placehold.co/600x400/059669/white?text=Task+App",
    tags: ["React", "Firebase", "Tailwind"],
    caseStudy: {
      overview: "A comprehensive task management application designed to help users organize their work and personal projects effectively.",
      challenge: "Creating an intuitive interface for complex task management while ensuring real-time synchronization across devices.",
      solution: "Built a React application with Firebase backend, implementing real-time updates and offline capabilities.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux", "Firestore"],
      features: [
        "Real-time task updates",
        "Project organization",
        "Team collaboration",
        "Progress tracking",
        "Deadline management"
      ],
      learnings: [
        "Implementing real-time features with Firebase",
        "Managing complex state in React applications",
        "Optimizing offline functionality"
      ]
    }
  },
  {
    id: 4,
    title: "Pokedex",
    description: "Pokedex is a web application that allows you to search for Pokémon by name and view their details.",
    imageUrl: PokemonProjectImage,
    tags: ["API", "JavaScript", "CSS"],
    caseStudy: {
      overview: "A modern Pokedex application that allows users to explore and learn about different Pokémon. The project focused on creating an engaging user interface while efficiently handling API data.",
      challenge: "Managing large amounts of data from the Pokémon API while maintaining smooth performance and implementing effective search functionality.",
      solution: "Implemented efficient data fetching and caching strategies, along with a responsive design that works well on all devices.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Pokemon API", "Local Storage"],
      features: [
        "Pokemon search functionality",
        "Detailed Pokemon information",
        "Type effectiveness calculator",
        "Favorite Pokemon list",
        "Responsive design"
      ],
      learnings: [
        "Working with external APIs",
        "Implementing efficient search algorithms",
        "Managing application state",
        "Creating responsive layouts"
      ]
    }
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "Dashboard for tracking engagement across platforms.",
    imageUrl: "https://placehold.co/600x400/d946ef/white?text=Analytics",
    tags: ["React", "Chart.js", "Node.js"],
    caseStudy: {
      overview: "A comprehensive analytics dashboard for tracking social media engagement across multiple platforms.",
      challenge: "Processing and visualizing large amounts of social media data in real-time while maintaining performance.",
      solution: "Implemented a scalable architecture with efficient data processing and real-time updates using WebSocket.",
      technologies: ["React", "Chart.js", "Node.js", "WebSocket", "MongoDB"],
      features: [
        "Real-time analytics",
        "Custom dashboard creation",
        "Data export functionality",
        "Automated reporting",
        "Multi-platform integration"
      ],
      learnings: [
        "Working with real-time data",
        "Implementing complex data visualizations",
        "Optimizing database queries for analytics"
      ]
    }
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts and nutrition.",
    imageUrl: "https://placehold.co/600x400/ec4899/white?text=Fitness",
    tags: ["React Native", "Firebase"],
    caseStudy: {
      overview: "A mobile application designed to help users track their fitness journey, including workouts and nutrition.",
      challenge: "Creating an intuitive mobile interface while implementing complex tracking features and data visualization.",
      solution: "Developed a React Native application with Firebase backend, focusing on user experience and data accuracy.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Expo"],
      features: [
        "Workout tracking",
        "Nutrition logging",
        "Progress visualization",
        "Goal setting",
        "Social sharing"
      ],
      learnings: [
        "Mobile-first development",
        "Implementing complex animations",
        "Managing offline data synchronization"
      ]
    }
  }
]; 