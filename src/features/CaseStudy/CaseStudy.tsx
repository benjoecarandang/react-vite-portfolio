import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import { projects, latestProjects } from "../Projects/projectData";

const CaseStudy = () => {
  return (
    <section className="bg-[#1e1b24] min-h-screen pt-10">
      <Container>
        <SectionHeadings
          tagline="Case Studies"
          title="Detailed breakdown of my projects"
          className="text-left !items-start !justify-start"
        >
          <p>
            Explore the journey behind each project, from concept to completion.
            Discover the challenges, solutions, and technologies used.
          </p>
        </SectionHeadings>

        {/* Latest Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Latest Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {latestProjects.filter((project) => project.caseStudy !== null).map((project) => (
              <Link
                key={project.id}
                to={`/case-study/${project.id}`}
                className="block group"
              >
                <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl overflow-hidden border border-white/10 hover:border-white/20">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-contain bg-gray-900/50 p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-base leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                      View Case Study
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">All Projects</h2>
          <div className="space-y-6">
            {projects.filter((project) => project.caseStudy !== null).map((project) => (
              <Link
                key={project.id}
                to={`/case-study/${project.id}`}
                className="block group"
              >
                <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl overflow-hidden border border-white/10 hover:border-white/20">
                  <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-48 md:h-32 object-contain bg-gray-900/50 p-4 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudy;
