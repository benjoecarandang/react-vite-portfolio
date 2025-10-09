const PokemonProjectImage = "/assets/Project_Pokemon.jpg";
const GrowAGardenToolsLogo = "/assets/growagardentools.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl?: string;
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    technologies: string[];
    features: string[];
    learnings: string[];
  } | null;
}

export const projects: Project[] = [
  {
    id: 3,
    title: "Tenzies",
    description:
      "A simple game that rolls the dice until all dice are the same.",
    imageUrl:
      "https://pbs.twimg.com/media/FYhFPnPUYAAMlYe?format=jpg&name=900x900",
    tags: ["React", "Node.js", "MongoDB"],
    caseStudy: null
  },
  {
    id: 4,
    title: "MyDiversify App",
    description:
      "An electron app that connects into MyDiversify API. It captures mouse and keyboard clicks. It records the task activity of the employee.",
    imageUrl:
      "https://pbs.twimg.com/media/FYhkmvxUYAE1XNL?format=png&name=900x900",
    tags: ["Electron", "JavaScript", "HTML5", "REST API", "Screenshot Capture", "System Monitoring"],
    caseStudy: {
      overview:
        "MyDiversify App is a comprehensive time tracking and employee monitoring solution built during the COVID-19 pandemic to help companies track remote work activities without relying on expensive third-party services. The application was developed as an in-house alternative to costly tracking solutions, saving the company significant monthly expenses while providing full control over employee data and privacy.",
      challenge:
        "During the pandemic lockdown, companies needed to track remote employee activities but faced high costs from third-party tracking services (approximately $10 per employee per month). The company needed a cost-effective, in-house solution that could capture screenshots, monitor keyboard and mouse activity, and integrate with their existing API infrastructure. The solution needed to be cross-platform and provide an alternative login method to their web application.",
      solution:
        "Developed a cross-platform Electron application that connects to the MyDiversify API, providing comprehensive employee activity tracking. The app captures screenshots at configurable intervals, tracks mouse clicks and keyboard presses, and sends all data to the web application for analysis. The solution also serves as an alternative login method, reducing dependency on the web platform. Built with 90% solo development effort, the application successfully replaced expensive third-party tracking services.",
      technologies: [
        "Electron",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Node.js",
        "REST API",
        "Screenshot Capture",
        "System Monitoring"
      ],
      features: [
        "Cross-platform desktop application (Windows, macOS)",
        "Configurable screenshot capture with admin-controlled timing",
        "Real-time mouse click and keyboard press tracking",
        "API integration with MyDiversify backend",
        "Alternative login/time-in functionality",
        "Data synchronization with web application",
        "Admin dashboard for viewing employee activities",
        "Privacy-focused local data processing"
      ],
      learnings: [
        "Electron provides excellent cross-platform capabilities for desktop applications",
        "Building in-house solutions can significantly reduce operational costs",
        "System-level monitoring requires careful consideration of user privacy",
        "API integration is crucial for seamless data flow between applications",
        "Solo development projects can be highly successful with proper planning",
        "Cost savings from avoiding third-party subscriptions can be substantial",
        "Employee monitoring tools must balance productivity tracking with privacy concerns"
      ]
    }
  },
  {
    id: 5,
    title: "Rewards Portal",
    description:
      "Developed a Rewards Portal used by client to reward their staff.",
    imageUrl:
      "https://pbs.twimg.com/media/FYr48FlVsAEKzCE?format=jpg&name=large",
    tags: ["React", "Firebase", "Tailwind"],
    caseStudy: null
  },
  {
    id: 6,
    title: "Pokedex",
    description:
      "Pokedex is a web application that allows you to search for Pokémon by name and view their details.",
    imageUrl: PokemonProjectImage,
    tags: ["Poke API", "React JS", "Tailwind CSS"],
    caseStudy: null
  },
  {
    id: 7,
    title: "Virtuallio Time Tracker",
    description:
      "An electron app that capture screenshots, mouse and keyboard clicks, and determines user productivity.",
    imageUrl:
      "https://pbs.twimg.com/media/FYguXiNUIAIDeTj?format=png&name=medium",
    tags: ["React", "Chart.js", "Node.js"],
    caseStudy: null
  }
];

export const latestProjects: Project[] = [
  {
    id: 1,
    title: "Grow a Garden Tools",
    description:
      "A Next JS and Tailwind CSS website for Grow a Garden Roblox Game.",
    imageUrl: GrowAGardenToolsLogo,
    tags: ["Next JS", "Tailwind CSS", "AdSense"],
    projectUrl: "https://growagardentools.org",
    caseStudy: {
      overview:
        "Grow a Garden Tools is a comprehensive web application built to support the popular Roblox game 'Grow a Garden', which achieved over 20 million concurrent users. The project emerged from identifying gaps in the game's functionality and creating external tools to enhance the player experience.",
      challenge:
        "While playing Grow a Garden, I noticed several features required manual computation that weren't available in-game. The game lacked essential calculators and tools that players needed for optimal gameplay. Additionally, as the user base grew, hosting costs on Vercel's free tier became unsustainable, requiring a monetization strategy.",
      solution:
        "Developed a pure frontend application using Next.js and Tailwind CSS to create a suite of calculators and tools. Implemented Google AdSense for monetization to support hosting costs and continued development. Built a comprehensive feature set including multiple calculators, a design gallery, and a blog section to provide ongoing value to the gaming community.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Google AdSense",
        "Vercel",
        "React",
        "TypeScript"
      ],
      features: [
        "Pet Weight Calculator",
        "Crop Value Calculator", 
        "Pet Ability Calculator",
        "Drop Chance Calculator",
        "Garden Design Gallery",
        "Blog Page with gaming tips",
        "Responsive design for all devices",
        "SEO optimization for discoverability"
      ],
      learnings: [
        "Identifying market gaps in gaming communities can lead to successful side projects",
        "Monetization strategies are crucial for sustaining free-tier applications",
        "Social media marketing can significantly boost user acquisition",
        "Regular feature updates and maintenance are key to user retention",
        "Understanding your target audience's pain points drives product development"
      ]
    }
  },
  {
    id: 2,
    title: "Nimble",
    description: "A MERN Stack website created for online barber booking.",
    imageUrl: "https://placehold.co/600x400/7c3aed/white?text=Portfolio",
    tags: ["React JS", "Express JS", "Tailwind CSS"],
    caseStudy: null
  }
];
