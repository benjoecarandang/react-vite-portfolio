import { type FC } from "react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import SectionRibbonTitle from "@/components/ui/SectionRibbonTitle";
const HeroPicture = "/assets/HeroPicture1.jpg";
import TriangleOverlay from "@/components/ui/TirangleOverlay";

const Hero: FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('get-in-touch');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="mx-4 md:mx-8 lg:mx-16 rounded-2xl bg-blue bg-right bg-no-repeat h-full bg-cover bg-[#23202A] mb-8">
      <div className="rounded-2xl p-10 overflow-hidden relative">
        <TriangleOverlay />
        <div className="absolute top-0 bottom-0 left-1/2 w-1/2 h-full bg-[#1e1b24] rounded-tr-2xl rounded-br-2xl z-1" />

        <Container>
          <div className="flex flex-wrap">
            <div className="flex flex-col text-center md:text-left items-center md:items-start justify-center md:pr-2 py-14 w-full md:w-7/12 z-[100]">
              <SectionRibbonTitle className="from-[#1e1b24] to-[#19181f]">
                Available for Opportunities
              </SectionRibbonTitle>

              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5 font-bold leading-[1.25] text-white">
                Benjoe — Full-Stack Developer
              </h1>

              <p className="mb-6 text-center md:text-left w-full md:w-11/12 lg:w-8/12 leading-7 text-[#c2c6dd] text-lg md:text-xl">
                Passionate about building scalable web applications and solving complex problems through clean, efficient code.
              </p>

              <p className="mb-10 text-center md:text-left w-full md:w-11/12 lg:w-8/12 leading-7 text-[#a0a0a0] text-base">
                Specializing in React, Node.js, and modern web technologies. 9+ years of experience delivering high-quality solutions.
              </p>

              <div className="flex justify-center flex-wrap gap-4">
                <Link
                  to="/case-study"
                  className="w-45 py-3 bg-blue-600 hover:bg-blue-700 px-7 rounded-full text-lg font-semibold shadow-lg text-white transition-all text-center"
                >
                  View Projects
                </Link>

                <button
                  onClick={scrollToContact}
                  className="w-45 px-7 py-3 rounded-full text-lg font-semibold shadow-lg text-white bg-[#19181f] hover:bg-black transition-all text-center cursor-pointer"
                >
                  Get In Touch
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">9+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </div>

            <div className="flex relative items-center w-full md:w-5/12 z-3 mt-8 md:mt-0">
              <img
                src={HeroPicture}
                className="rounded-3xl w-full max-w-md md:max-w-full shadow-lg"
                alt="Benjoe - Full-Stack Developer"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
