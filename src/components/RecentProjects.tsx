import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils/cn";

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
    <section className="px-4 py-12 max-w-6xl mx-auto">
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

      <motion.div
        layout
        transition={{ layout: { duration: 0.3 } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeIn" }}
              className="rounded-lg overflow-hidden shadow hover:shadow-md transition bg-white"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
