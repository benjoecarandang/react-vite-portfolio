import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import TriangleBackground from "@/components/ui/TriangleBackground";
import { projects } from "../Projects/projectData";

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

        <div className="space-y-8 py-12">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={`/case-study/${index + 1}`}
              className="block group"
            >
              <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-xl overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                  <div className="w-full md:w-1/3">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 md:h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {project.tags.join(", ")}
                      </span>
                    </div>
                    <p className="text-gray-400">
                      Click to view detailed case study and learn more about the
                      development process, challenges faced, and solutions
                      implemented.
                    </p>
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
      </Container>
      <TriangleBackground bgColor="#19181f" revert={true} />
    </section>
  );
};

export default CaseStudy;
