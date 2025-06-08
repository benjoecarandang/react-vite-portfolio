import "./App.css";
import Technologies from "./components/Technologies/Technologies";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/ui/Navbar";
import Timeline from "./components/Experience/ExperienceTimeline";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Timeline />
      <Footer />
    </>
  );
}

//plans
{
  /* <Navbar />
<Hero />
<AboutMe />          // Personal intro
<Technologies />
<RecentProjects />   // With case-study links
<Timeline />         // Education/Work Experience
<Testimonials />     // Social proof //confidential
<BlogOSS />          // Optional: Blog/Open Source
<ContactCTA />       // "Hire Me" section
<Footer /> */
}

export default App;
