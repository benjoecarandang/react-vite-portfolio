import LaravelLogo from "@/assets/laravel.svg";
import TailwindLogo from "@/assets/tailwind.svg";
import BootstrapLogo from "@/assets/bootstrap.png";
import PhpLogo from "@/assets/php.svg";
import GitLogo from "@/assets/git.svg";
import MysqlLogo from "@/assets/mysql.svg";
import WordpressLogo from "@/assets/wordpress-white.svg";
import JavaLogo from "@/assets/java.svg";

type Technology = {
  name: string;
  icon: string;
  category?: "AI/ML" | "Frontend" | "Backend" | "Database" | "Tools";
};

export const technologyData: Technology[] = [
  // AI & Machine Learning (Highlighted)
  { name: "OpenAI API", icon: "🤖", category: "AI/ML" },
  { name: "Claude API", icon: "🧠", category: "AI/ML" },
  { name: "Machine Learning", icon: "📊", category: "AI/ML" },
  { name: "Prompt Engineering", icon: "✍️", category: "AI/ML" },
  { name: "LLM Integration", icon: "🔗", category: "AI/ML" },
  
  // Frontend Technologies
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Frontend" },
  { name: "JavaScript", icon: "🟨", category: "Frontend" },
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "Tailwind CSS", icon: TailwindLogo, category: "Frontend" },
  { name: "Bootstrap", icon: BootstrapLogo, category: "Frontend" },
  
  // Backend Technologies
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Java", icon: JavaLogo, category: "Backend" },
  { name: "PHP", icon: PhpLogo, category: "Backend" },
  { name: "Laravel", icon: LaravelLogo, category: "Backend" },
  { name: "Express.js", icon: "🚂", category: "Backend" },
  { name: "REST APIs", icon: "🔌", category: "Backend" },
  
  // Database Technologies
  { name: "MySQL", icon: MysqlLogo, category: "Database" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Firebase", icon: "🔥", category: "Database" },
  
  // Tools & Others
  { name: "WordPress", icon: WordpressLogo, category: "Tools" },
  { name: "Git", icon: GitLogo, category: "Tools" },
  { name: "Docker", icon: "🐳", category: "Tools" },
  { name: "AWS", icon: "☁️", category: "Tools" },
  { name: "CI/CD", icon: "🔄", category: "Tools" },
  { name: "Agile", icon: "📋", category: "Tools" },
  { name: "JIRA", icon: "🎫", category: "Tools" },
  { name: "Postman", icon: "📮", category: "Tools" }
];
