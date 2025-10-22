import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import type { Project } from "./projectData";
import { Link } from "react-router-dom";

interface ProjectItemProps {
  projects: Project[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ projects }) => {
  return (
    <div className="py-20 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">All Projects</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my complete portfolio of web applications, each showcasing different aspects of my development skills.
          </p>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1.2,
            slideShadows: false,
            scale: 0.8
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="modern-project-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="max-w-md transition-all duration-700"
            >
              <div className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-[1.02]">
                {/* Project Image with Hover Effects */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Action Button - Only show if project has URL */}
                  {project.projectUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-110 shadow-xl"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/10 text-white/90 text-sm font-medium rounded-full border border-white/20 group-hover:border-blue-400/30 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105"
                      >
                        Visit Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.caseStudy && (
                      <Link
                        to={`/case-study/${project.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-all duration-300 group/link text-lg"
                      >
                        <span className="mr-3">Learn More</span>
                        <svg className="w-5 h-5 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modern Navigation Arrows */}
        <div className="swiper-button-prev !w-16 !h-16 bg-white/10 backdrop-blur-md rounded-full shadow-2xl hover:bg-white/20 after:!text-xl after:!text-white border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"></div>
        <div className="swiper-button-next !w-16 !h-16 bg-white/10 backdrop-blur-md rounded-full shadow-2xl hover:bg-white/20 after:!text-xl after:!text-white border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"></div>
      </div>
    </div>
  );
};

export default ProjectItem;
