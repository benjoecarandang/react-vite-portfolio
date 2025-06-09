import DiversifyLogo from "@/assets/diversify.jpg";
import PILogo from "@/assets/PI.svg";
import ACNLogo from "@/assets/ACN.png";
import ENRALogo from "@/assets/ENRA.png";

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
      "Developed and maintained web applications using PHP and JavaScript.",
    period: "2016 - 2017",
    width: "w-24"
  },
  {
    title: "Full Stack Web Developer",
    company: "ENRA Innovations",
    logo: ENRALogo,
    position: "right",
    description:
      "Developed and maintained web applications using PHP and JavaScript.",
    period: "2016 - 2017",
    width: "w-12"
  },
  {
    title: "Full Stack Web Developer",
    company: "Diversify Offshoring Staffing Solutions",
    logo: DiversifyLogo,
    position: "left",
    description:
      "Developed and maintained web applications using PHP and JavaScript.",

    period: "2016 - 2017"
  },
  {
    title: "Custom Software Engineering Sr Analyst",
    company: "Accenture",
    logo: ACNLogo,
    position: "right",
    description:
      "Developed and maintained web applications using PHP and JavaScript.",
    period: "2016 - 2017"
  }
];
