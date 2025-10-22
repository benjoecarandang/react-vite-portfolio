const DiversifyLogo = "/assets/diversify.jpg";
const PILogo = "/assets/PI.svg";
const ACNLogo = "/assets/ACN.png";
const ENRALogo = "/assets/ENRA.png";

type Experience = {
  title: string;
  company: string;
  logo: string;
  position: "left" | "right";
  description: string;
  period: string;
  width?: string; // Optional width for the logo
};

export const experienceData: Experience[] = [
  {
    title: "Full Stack Web Developer",
    company: "Portal Integrators",
    logo: PILogo,
    position: "left",
    description:
      "Worked in an Agile/Scrum environment, designing custom responsive WordPress themes and drag-and-drop page builders. Created interactive web mockups and integrated social media APIs into WordPress plugins.",
    period: "June 2016 - August 2017",
    width: "w-24"
  },
  {
    title: "Full Stack Web Developer",
    company: "ENRA Innovations",
    logo: ENRALogo,
    position: "right",
    description:
      "Developed web solutions across frontend, backend, and desktop environments. Built job marketplace platform using WordPress, created e-commerce platforms with PayKickStart integration, and developed cross-platform time tracker app using Electron.",
    period: "October 2017 - December 2018",
    width: "w-12"
  },
  {
    title: "Full Stack Web Developer",
    company: "Diversify Offshoring Staffing Solutions",
    logo: DiversifyLogo,
    position: "left",
    description:
      "Led redesign of company's Laravel web application and WordPress site using Bootstrap 4. Developed custom Time Tracker desktop app using Electron and jQuery, integrating with Laravel API to log work hours and capture screenshots.",

    period: "May 2019 - September 2022"
  },
  {
    title: "Custom Software Engineering Sr Analyst",
    company: "Accenture",
    logo: ACNLogo,
    position: "right",
    description:
      "Led team of four developers in building internal Bulletin Board web app using Next.js, React.js, and Material UI. Deployed to Oracle Xstore Point of Sale project supporting 50+ countries. Delivered critical bug fixes and performance enhancements under strict deadlines.",
    period: "October 2022 - Present"
  }
];
