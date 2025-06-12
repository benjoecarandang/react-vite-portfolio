import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import TriangleBackground from "@/components/ui/TriangleBackground";
import { technologyData } from "./technologyData";

const AboutMe = () => {
  return (
    <>
      <section id="technologies" className="pt-20 m-w-5xl">
        <Container className="max-w-5xl">
          <SectionHeadings
            tagline="Technology"
            title="Trusted by the best companies in the business."
          >
            <p>
              I take pride in showcasing my comprehensive knowledge and
              expertise in web development, utilizing a wide range of modern
              tools and technologies to deliver high-quality solutions.
            </p>
          </SectionHeadings>

          <div className="flex justify-center flex-wrap gap-3 p-4 rounded-xl">
            {technologyData.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 bg-[#23202a] text-white rounded-lg text-sm font-medium"
              >
                <img className="w-8 h-8" src={tech.icon} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TriangleBackground bgColor="#1e1b24" />
    </>
  );
};

export default AboutMe;
