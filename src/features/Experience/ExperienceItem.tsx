import { cn } from "../../lib/utils/cn";
import { type JSX } from "react";

type ExperienceItemProps = {
  experience: {
    title: string;
    company: string;
    period: string;
    description?: string;
    logo?: string;
    position?: "left" | "right";
    width?: string; // Optional width for the logo
  };
};

const ExperienceItem = ({ experience }: ExperienceItemProps): JSX.Element => {
  const isRight = experience.position === "right";
  const logoWidthClass = experience.width || "w-6";

  return (
    <>
      <div className="w-full lg:w-1/2 px-4">
        <div
          className={cn(
            "w-full lg:w-[428px] xl:w-[490px] lg:px-0 pb-12 sm:pl-11 relative",
            isRight
              ? "lg:text-left pl-8 lg:pr-8 mr-auto lg:ml-5"
              : "lg:text-right pl-8 ml-auto lg:mr-5"
          )}
        >
          <span
            className={cn(
              "bg-black border-gray-300 rounded-full border-4 w-4 h-4 top-1 left-0 absolute",
              isRight
                ? "lg:-left-11 lg:right-auto right-0"
                : "lg:-right-11 lg:left-auto left-0"
            )}
          />

          <h3 className="text-neutral-100 font-bold text-xl mb-1">
            {experience.title}
          </h3>

          <div
            className={cn(
              "flex items-center",
              isRight ? "lg:justify-start" : "lg:justify-end"
            )}
          >
            {experience.logo && (
              <img
                className={cn(
                  "block hover:opacity-10 transition-all mr-4",
                  logoWidthClass // Dynamic width based on logo dimensions
                )}
                src={experience.logo}
                alt={experience.company}
              />
            )}
            <p className="text-neutral-400 font-medium leading-6 mb-0">
              {experience.company}
            </p>
          </div>

          <p className="text-black bg-gray-100 px-4 py-1 font-bold text-sm leading-6 rounded-full inline-flex mb-5 mt-3">
            {experience.period}
          </p>

          <p className="text-neutral-300">
            {experience.description || "No description provided"}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2" />
      <div className="w-full lg:w-1/2" />
    </>
  );
};

export default ExperienceItem;
