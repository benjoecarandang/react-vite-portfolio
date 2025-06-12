import { useParams, useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container";
import { projects } from "../Projects/projectData";
import { ArrowLeft } from "lucide-react";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-screen bg-[#1e1b24] text-white flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <button
              onClick={() => navigate("/case-study")}
              className="text-blue-400 hover:text-blue-300"
            >
              Return to Case Studies
            </button>
          </div>
        </Container>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen bg-[#1e1b24] text-white py-10">
      <Container>
        <button
          onClick={() => navigate("/case-study")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-8 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Case Studies
        </button>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content Sections */}
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">{caseStudy.overview}</p>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-300 leading-relaxed">{caseStudy.challenge}</p>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-gray-300 leading-relaxed">{caseStudy.solution}</p>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {caseStudy.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Learnings */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {caseStudy.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudyDetail;
