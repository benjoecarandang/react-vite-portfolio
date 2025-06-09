
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import ExperienceItem from "./ExperienceItem";
import { experienceData } from "./experienceData"; 

const ExperienceTimeline = () => {
  return (
    <section className="pb-0">
      <Container>
        <SectionHeadings tagline="Experiences" title="My Resume">
          <p>
            Full Stack Web developer with 6+ years of hands-on experience in
            designing, developing, and implementing applications and solutions
            using range of technologies and programming languages.
          </p>
        </SectionHeadings>

        <div className="pt-12 relative">
          <div className="bg-gray-200 h-full block absolute left-2 top-0 w-[1px] lg:left-1/2" />
          <div className="flex flex-wrap -mx-4">
            {experienceData.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} />
            ))}
          </div>
        </div>
      </Container>
      <div className="bottom-divider-diagonal"></div>
    </section>
  );
};

export default ExperienceTimeline;