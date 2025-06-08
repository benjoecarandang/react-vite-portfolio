import { AnimatePresence, motion } from "framer-motion";

type Project = {
  title: string;
  category: string[];
  img: string;
};

type ProjectItemProp = {
  projects: Project[];
};

const ProjectItem = ({ projects }: ProjectItemProp) => {
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.3 } }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
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
  );
};

export default ProjectItem;
