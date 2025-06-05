import Container from "./ui/Container";
import SectionHeadings from "./ui/SectionHeadings";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="pt-10 pb-20 bg-[#1e1b24] relative overflow-hidden"
    >
      <div>
        <Container>
          <SectionHeadings
            tagline="Projects"
            title="I create digital products that help you get ahead"
            description={[]}
            textEnder="From fresh ideas to fully-realized designs, we cover every aspect of your digital presence."
            className="text-left !items-start !justify-start"
          />

          <div className="flex flex-wrap gap-3 rounded-xl">
            <div className="w-11/12 relative">
              <img src="https://crator.tailawesome.com/_next/image?url=%2Fstock%2Fwork%2Ffeatured-work-image-01.jpg&w=1200&q=75"
              alt="Project 1"
              className="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutMe;
