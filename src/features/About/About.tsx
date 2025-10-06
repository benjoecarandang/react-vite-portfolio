import React from "react";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import { FaBrain, FaRobot, FaChartLine } from "react-icons/fa";

const About: React.FC = () => {
  const skills = [
    { 
      category: "AI & Machine Learning", 
      items: ["Machine Learning", "Generative AI", "LLM Integration", "OpenAI API", "Claude API", "Prompt Engineering"],
      highlight: true,
      icon: <FaBrain className="w-6 h-6" />
    },
    { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
    { category: "Backend", items: ["Node.js", "PHP", "Laravel", "Express.js", "REST APIs", "GraphQL"] },
    { category: "Database", items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "CI/CD", "Agile", "JIRA", "Postman"] }
  ];

  const achievements = [
    "6+ years of full-stack development experience",
    "Led development of 15+ web applications",
    "Mentored 3 junior developers",
    "Reduced application load time by 40%",
    "Implemented CI/CD pipelines for 5 projects",
    "Built AI-powered features using OpenAI and Claude APIs",
    "Integrated machine learning models into web applications"
  ];

  const aiHighlights = [
    "Experience with GPT-3.5, GPT-4, and Claude models",
    "Built AI-powered chatbots and content generation tools",
    "Understanding of neural networks and deep learning fundamentals",
    "Practical knowledge of prompt engineering and LLM optimization"
  ];

  return (
    <section className="bg-[#23202A] py-20">
      <Container>
        <SectionHeadings
          tagline="About Me"
          title="Full-Stack Developer with AI Expertise"
          className="text-left !items-start !justify-start"
        >
          <p>
            I'm a dedicated full-stack developer with over 6 years of experience creating 
            scalable web applications and digital solutions. I specialize in modern web technologies 
            and have developed a strong foundation in AI, machine learning, and generative AI technologies.
          </p>
        </SectionHeadings>

        {/* AI Skills Highlight Section */}
        <div className="mb-16 p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-400/30">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-blue-400">
              <FaRobot className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">AI & Machine Learning Expertise</h3>
          </div>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            I'm passionate about integrating cutting-edge AI technologies into web applications to create 
            more intelligent and user-friendly experiences. My knowledge spans from basic ML concepts to 
            practical implementation of generative AI and large language models.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-blue-400 mt-1 text-lg">✓</span>
                <span className="text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Who I Am</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm passionate about building applications that not only meet technical requirements 
                but also provide exceptional user experiences. My approach combines technical expertise 
                with creative problem-solving to deliver solutions that drive business value.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying updated with industry best practices, especially 
                in the rapidly evolving field of AI and machine learning.
              </p>
              <p>
                I'm currently seeking new opportunities where I can leverage my full-stack development 
                skills combined with my AI knowledge to build innovative solutions and grow as a developer 
                while contributing to meaningful projects.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <div className="flex items-center gap-3 mb-3">
                    {skillGroup.icon && (
                      <div className="text-blue-400">
                        {skillGroup.icon}
                      </div>
                    )}
                    <h4 className={`text-lg font-semibold ${skillGroup.highlight ? 'text-blue-400' : 'text-blue-400'}`}>
                      {skillGroup.category}
                      {skillGroup.highlight && (
                        <span className="ml-2 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-400/30">
                          HOT
                        </span>
                      )}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                          skillGroup.highlight 
                            ? 'bg-blue-500/20 text-blue-400 border-blue-400/30 hover:border-blue-400/50' 
                            : 'bg-white/10 text-white border-white/20 hover:border-blue-400/50'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-blue-400">6+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
