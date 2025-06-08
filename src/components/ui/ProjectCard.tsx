import autoAnimate from "@formkit/auto-animate";
import { useState, useEffect, useRef } from "react";
import Container from "./Container";
import SectionHeadings from "./SectionHeadings";
import { cn } from "../../lib/utils/cn";
import { Flipper, Flipped } from "react-flip-toolkit";

const TABS = ["All", "Web Design", "Application", "Feature"];

const PROJECTS = [
  {
    title: "Startup landing page",
    category: ["Web Design"],
    img: "https://crator.tailawesome.com/_next/image?url=%2Fstock%2Fwork%2Ffeatured-work-image-01.jpg&w=1200&q=75"
  },
  {
    title: "Job portal landing page",
    category: ["Web Design"],
    img: "https://crator.tailawesome.com/_next/image?url=%2Fstock%2Fwork%2Ffeatured-work-image-01.jpg&w=1200&q=75"
  },
  {
    title: "SaaS landing page",
    category: ["Application"],
    img: "https://crator.tailawesome.com/_next/image?url=%2Fstock%2Fwork%2Ffeatured-work-image-01.jpg&w=1200&q=75"
  },
  {
    title: "Business & corporate template",
    category: ["Feature"],
    img: "https://crator.tailawesome.com/_next/image?url=%2Fstock%2Fwork%2Ffeatured-work-image-01.jpg&w=1200&q=75"
  }
];

export default function RecentProjects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category.includes(activeTab));

  return (
    <section className="mx-auto bg-[#1e1b24]">
      <Container>
        <SectionHeadings
          tagline="Projects"
          title="I create digital products that help you get ahead"
        >
          <p>
            From fresh ideas to fully-realized designs, we cover every aspect of
            your digital presence.
          </p>
          <p>
            I'm seeking to leverage broad development experience and hands-on
            technical expertise in a challenging role as a Full Stack Developer.
          </p>
        </SectionHeadings>

        <div className="flex justify-center mb-8 gap-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition",
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <Flipper flipKey={filteredProjects.map((p) => p.title).join("-")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <Flipped key={project.title} flipId={project.title}>
                <div className="rounded-lg overflow-hidden shadow hover:shadow-md transition bg-white min-h-[300px] flex flex-col cursor-default">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 flex-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </Flipped>
            ))}
          </div>
        </Flipper>
      </Container>
    </section>
  );
}
