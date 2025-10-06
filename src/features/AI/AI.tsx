import React from "react";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import { FaBrain, FaRobot, FaChartLine, FaCode, FaDatabase, FaCloud } from "react-icons/fa";

const AI: React.FC = () => {
  const aiSkills = [
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Understanding of ML algorithms, supervised/unsupervised learning, and model training processes",
      level: "Intermediate"
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Generative AI",
      description: "Experience with GPT models, text generation, and AI-powered content creation tools",
      level: "Intermediate"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "LLM Integration",
      description: "API integration with OpenAI, Claude, and other large language models for web applications",
      level: "Intermediate"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "AI Development",
      description: "Building AI-powered features, chatbots, and intelligent automation systems",
      level: "Intermediate"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Data Processing",
      description: "Working with AI datasets, data preprocessing, and model input/output handling",
      level: "Intermediate"
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "AI Services",
      description: "Integration with cloud AI services like AWS AI, Google AI, and Azure Cognitive Services",
      level: "Intermediate"
    }
  ];

  const aiProjects = [
    {
      title: "AI-Powered Chatbot",
      description: "Built an intelligent chatbot using OpenAI API for customer support automation",
      technologies: ["OpenAI API", "React", "Node.js", "WebSocket"]
    },
    {
      title: "Content Generation Tool",
      description: "Developed a tool that uses GPT models to generate marketing content and product descriptions",
      technologies: ["GPT-3.5", "Python", "FastAPI", "PostgreSQL"]
    },
    {
      title: "Smart Form Validation",
      description: "Implemented AI-powered form validation using natural language processing",
      technologies: ["NLP", "JavaScript", "TensorFlow.js", "React"]
    }
  ];

  return (
    <section className="bg-[#1e1b24] pt-20">
      <Container>
        <SectionHeadings
          tagline="AI & Machine Learning"
          title="Leveraging AI to Build Smarter Applications"
          className="text-left !items-start !justify-start"
        >
          <p>
            I'm passionate about integrating AI and machine learning into web applications to create 
            more intelligent, efficient, and user-friendly experiences. My knowledge spans from 
            basic ML concepts to practical implementation of generative AI and LLM technologies.
          </p>
        </SectionHeadings>

        <div className="mt-16">
          {/* AI Skills Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">AI & ML Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{skill.title}</h4>
                      <span className="text-sm text-blue-400 font-medium">{skill.level}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">AI-Enhanced Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {aiProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Learning Journey */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">My AI Learning Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">What I've Learned</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    Understanding of neural networks and deep learning fundamentals
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    Practical experience with OpenAI, Claude, and other LLM APIs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    Building AI-powered features for web applications
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    Data preprocessing and model integration techniques
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Current Focus</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">→</span>
                    Advanced prompt engineering and LLM optimization
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">→</span>
                    Vector databases and semantic search implementation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">→</span>
                    Fine-tuning models for specific use cases
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">→</span>
                    AI ethics and responsible AI development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </section>
  );
};

export default AI;
