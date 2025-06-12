import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import type { Project } from "./projectData";

interface ProjectItemProps {
  projects: Project[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ projects }) => {
  const initialSlide = Math.floor(projects.length / 2);

  return (
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
            rotate: -5,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
            scale: 0.9
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
              className="bg-white rounded-lg shadow-xl overflow-hidden max-w-sm transition-opacity duration-300 "
            >
              <div className="h-full flex flex-col">
                <div className="p-2">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl shadow"
                  />
                </div>

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
  );
};

export default ProjectItem;
