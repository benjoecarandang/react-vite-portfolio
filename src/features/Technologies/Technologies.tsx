import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import { technologyData } from "./technologyData";

const Technologies = () => {
  const frontendTechnologies = technologyData.filter(tech => tech.category === "Frontend");
  const backendTechnologies = technologyData.filter(tech => tech.category === "Backend");
  const databaseTechnologies = technologyData.filter(tech => tech.category === "Database");
  const toolTechnologies = technologyData.filter(tech => tech.category === "Tools");

  const renderTechnologyGrid = (technologies: typeof technologyData, title: string, highlight = false) => (
    <div className={`${highlight ? 'order-first' : ''}`}>
      <h4 className={`text-xl font-semibold mb-4 text-center ${highlight ? 'text-blue-400' : 'text-white'}`}>
        {title}
        {highlight && <span className="ml-2 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-400/30">HOT</span>}
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className={`group p-4 rounded-xl border transition-all duration-300 text-center ${
              highlight 
                ? 'bg-blue-500/20 border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-500/30' 
                : 'bg-white/5 border-white/10 hover:border-blue-400/50 hover:bg-white/10'
            }`}
          >
            <div className="flex justify-center mb-3 h-12 items-center">
              {typeof tech.icon === 'string' && tech.icon.length <= 2 ? (
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
              ) : (
                <img 
                  className="w-12 h-12 max-w-12 max-h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
                  src={tech.icon as string} 
                  alt={tech.name}
                />
              )}
            </div>
            <h5 className={`text-sm font-medium ${highlight ? 'text-blue-300' : 'text-white'} group-hover:text-blue-400 transition-colors`}>
              {tech.name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section id="technologies" className="py-20 bg-[#19181f] relative overflow-hidden">
        {/* Professional grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        <Container className="max-w-7xl">
          <SectionHeadings
            tagline="Technologies & Skills"
            title="Technologies I Work With"
            className="text-left !items-start !justify-start"
          >
            <p>
              I've worked with a wide range of technologies throughout my career, with a special focus on 
              AI and machine learning. Here are the key tools and frameworks I use to build modern, 
              intelligent web applications.
            </p>
          </SectionHeadings>

          <div className="mt-16 space-y-16">
            {/* AI & Machine Learning - Highlighted Section */}
            {/* <div className="p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-blue-400/30">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">🤖 AI & Machine Learning</h3>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  My expertise in AI technologies allows me to build smarter, more intelligent applications 
                  that leverage the power of machine learning and generative AI.
                </p>
              </div>
              {renderTechnologyGrid(aiTechnologies, "AI & ML Technologies", true)}
            </div> */}

            {/* Other Technology Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {renderTechnologyGrid(frontendTechnologies, "Frontend Technologies")}
              {renderTechnologyGrid(backendTechnologies, "Backend Technologies")}
              {renderTechnologyGrid(databaseTechnologies, "Database Technologies")}
              {renderTechnologyGrid(toolTechnologies, "Tools & DevOps")}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-16 p-8 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Development Practices</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Agile/Scrum Methodology</li>
                  <li>• Test-Driven Development</li>
                  <li>• Code Review & Pair Programming</li>
                  <li>• Git Workflow Management</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Architecture & Design</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Microservices Architecture</li>
                  <li>• RESTful API Design</li>
                  <li>• Database Design & Optimization</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Artificial Intelligence</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Prompt Engineering</li>
                  <li>• AI Ethics & Responsible AI</li>
                  <li>• Generative AI</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Technologies;
