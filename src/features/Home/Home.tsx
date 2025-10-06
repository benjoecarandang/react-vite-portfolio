import Hero from "@/features/Hero/Hero";
import Technologies from "@/features/Technologies/Technologies";
import Projects from "@/features/Projects/Projects";
import ExperienceTimeline from "@/features/Experience/ExperienceTimeline";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <About /> */}
      {/* <AI /> */}
      <Technologies />
      <Projects />
      <ExperienceTimeline />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
