import { type FC } from "react";
import Container from "./ui/Container";
import SectionRibbonTitle from "./ui/SectionRibbonTitle";
import HeroPicture from "../assets/HeroPicture1.jpg";
import TriangleOverlay from "./ui/TirangleOverlay";

const Hero: FC = () => {
  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log("Download CV clicked");
  };

  return (
    <section className="mx-4 md:mx-8 lg:mx-16 rounded-2xl bg-blue bg-right bg-no-repeat h-full bg-cover bg-[#23202A]">
      <div className="rounded-2xl p-10 overflow-hidden relative">
        <TriangleOverlay />
        <div className="absolute top-0 bottom-0 left-1/2 w-1/2 h-full bg-[#1e1b24] rounded-tr-2xl rounded-br-2xl z-1" />

        <Container>
          <div className="flex flex-wrap">
            <div className="flex flex-col text-center md:text-left items-center md:items-start justify-center md:pr-2 py-14 w-full md:w-7/12">
              <SectionRibbonTitle className="from-[#1e1b24] to-[#19181f]">
                Welcome
              </SectionRibbonTitle>

              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5 font-bold leading-[1.25] text-white">
                Benjoe — a Fullstack Web Developer
              </h1>

              <p className="mb-10 text-center md:text-left w-full md:w-11/12 lg:w-8/12 leading-7 text-[#c2c6dd] text-lg md:text-xl">
                I want to build things that will make a positive difference.
              </p>

              <div className="flex justify-center flex-wrap gap-4">
                <button
                  onClick={handleDownloadCV}
                  className="w-45 bg-white px-7 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-neutral-100 transition-all"
                >
                  Download CV
                </button>

                <a
                  href="#about-me"
                  className="w-40 px-7 py-3 rounded-full text-lg font-semibold shadow-lg text-white bg-[#19181f] hover:bg-black transition-all text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="flex relative items-center w-full md:w-5/12 z-3 mt-8 md:mt-0">
              <img
                src={HeroPicture}
                className="rounded-3xl w-full max-w-md md:max-w-full shadow-lg"
                alt="Benjoe - Fullstack Web Developer"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
