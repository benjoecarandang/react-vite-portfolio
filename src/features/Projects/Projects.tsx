import React from "react";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import ProjectItem from "./ProjectItem";
import { projects, latestProjects } from "./projectData";
import { Link } from "react-router-dom";

const Projects: React.FC = () => {
  // Get the latest 2 projects for the featured section
  const latestProjectsData = latestProjects;
  const allProjects = projects;

  return (
    <section className="bg-[#1e1b24] pt-20 relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <Container>
        <SectionHeadings
          tagline="Portfolio"
          title="Latest Projects"
          className="text-left !items-start !justify-start"
        >
          <p>
            Here's my most recent work that showcases my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </SectionHeadings>

        {/* Featured Latest Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
            {latestProjectsData.map((project) => (
              <div key={project.id} className="group bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl overflow-hidden border border-white/10 hover:border-white/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Action Button - Only show if project has URL */}
                  {project.projectUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 shadow-xl"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/10 text-white/90 text-sm font-medium rounded-full border border-white/20 group-hover:border-blue-400/30 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.caseStudy && (
                    <div className="flex gap-3">
                      <Link
                        to={`/case-study/${project.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ProjectItem projects={allProjects} />
      </Container>
    </section>
  );
};

export default Projects; 