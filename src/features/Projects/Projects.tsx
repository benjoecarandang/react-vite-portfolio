import React from "react";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import TriangleBackground from "@/components/ui/TriangleBackground";
import ProjectItem from "./ProjectItem";
import { projects } from "./projectData";

const Projects: React.FC = () => {
  return (
    <section className="bg-[#1e1b24]">
      <Container>
        <SectionHeadings
          tagline="Projects"
          title="I create digital products that help you get ahead"
          className="text-left !items-start !justify-start"
        >
          <p>
            From fresh ideas to fully-realized designs, we cover every aspect of
            your digital presence.
          </p>
        </SectionHeadings>

        <ProjectItem projects={projects} />
      </Container>

      <TriangleBackground bgColor="#19181f" revert={true} />
    </section>
  );
};

export default Projects; 