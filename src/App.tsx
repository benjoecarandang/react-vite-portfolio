import "./App.css";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RecentProjects from "./components/RecentProjects";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <RecentProjects />
      <Projects />
    </>
  );
}

export default App;
