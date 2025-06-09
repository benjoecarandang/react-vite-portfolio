import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeadings from "@/components/ui/SectionHeadings";
import TriangleBackground from "@/components/ui/TriangleBackground";
import TabSelector from "./TabSelector";
import ProjectItem from "./ProjectItem";
import { projectData } from "./projectData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projectData
      : projectData.filter((project) => project.category.includes(activeTab));

  return (
    <section className=" bg-[#1e1b24] ">
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

        <TabSelector activeTab={activeTab} onChange={setActiveTab} />

        <ProjectItem projects={filteredProjects} />
      </Container>

      <TriangleBackground bgColor="#19181f" revert={true} />
    </section>
  );
}
