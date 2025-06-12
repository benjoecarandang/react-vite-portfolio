import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import TriangleBackground from "@/components/ui/TriangleBackground";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const ProjectGallery: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration.",
      imageUrl: "https://placehold.co/600x400/2563eb/white?text=E-commerce",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work.",
      imageUrl: "https://placehold.co/600x400/7c3aed/white?text=Portfolio",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity app for organizing daily tasks and projects.",
      imageUrl: "https://placehold.co/600x400/059669/white?text=Task+App",
      tags: ["React", "Firebase", "Tailwind"]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast.",
      imageUrl: "https://placehold.co/600x400/f59e0b/black?text=Weather",
      tags: ["API", "JavaScript", "CSS"]
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "Dashboard for tracking engagement across platforms.",
      imageUrl: "https://placehold.co/600x400/d946ef/white?text=Analytics",
      tags: ["React", "Chart.js", "Node.js"]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile app for tracking workouts and nutrition.",
      imageUrl: "https://placehold.co/600x400/ec4899/white?text=Fitness",
      tags: ["React Native", "Firebase"]
    }
  ];

  const initialSlide = Math.floor(projects.length / 2);

  return (
    <section className=" bg-[#1e1b24] ">
      <Container>
        <SectionHeadings
          tagline="Projects"
          title="I create digital products that help you get ahead"
          className="text-left !items-start !justify-start"
        >
          <p>
            From fresh ideas to fully-realized designs, we cover every aspect of
            your digital presence.
          </p>
        </SectionHeadings>

        <div className="py-12 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              initialSlide={initialSlide}
              loop={true}
              coverflowEffect={{
                rotate: -5, // Strong horizontal rotation
                stretch: 0, // No horizontal offset
                depth: 150, // Deep z-space to give spherical illusion
                modifier: 2.5, // Multiplier for exaggeration
                slideShadows: false, // Gives dimensionality
                scale: 0.9 // Slightly shrinks side slides
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }}
              modules={[EffectCoverflow, Navigation]}
              className="mySwiper"
              onSlideChange={(swiper) => {
                swiper.slides.forEach((slide, index) => {
                  const slideEl = slide as HTMLElement;
                  slideEl.style.opacity =
                    index === swiper.activeIndex ? "1" : "0.5";
                });
              }}
              onInit={(swiper) => {
                swiper.slides.forEach((slide, index) => {
                  const slideEl = slide as HTMLElement;
                  slideEl.style.opacity =
                    index === swiper.activeIndex ? "1" : "0.6";
                });
              }}
            >
              {projects.map((project) => (
                <SwiperSlide
                  key={project.id}
                  className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm transition-opacity duration-300"
                >
                  <div className="h-full flex flex-col">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <div className="swiper-button-prev !w-12 !h-12 bg-white rounded-full shadow-md hover:bg-gray-100 after:!text-base"></div>
            <div className="swiper-button-next !w-12 !h-12 bg-white rounded-full shadow-md hover:bg-gray-100 after:!text-base"></div>
          </div>
        </div>
      </Container>

      <TriangleBackground bgColor="#19181f" revert={true} />
    </section>
  );
};

export default ProjectGallery;
