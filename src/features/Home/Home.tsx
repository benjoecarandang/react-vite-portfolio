import Hero from "@/features/Hero/Hero";
import Technologies from "@/features/Technologies/Technologies";
import Projects from "@/features/Projects/Projects";
import ExperienceTimeline from "@/features/Experience/ExperienceTimeline";
import ProjectGallery from "../Projects/newDesign";

const Home = () => {
  return (
    <>
      <Hero />
      <Technologies />
      <Projects />
      <ExperienceTimeline />
    </>
  );
};

export default Home;
