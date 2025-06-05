import React from "react";
import SectionRibbonTitle from "./SectionRibbonTitle";

interface SectionHeadingsProps {
  tagline: string;
  className?: string;
  gradientClass?: string;
  description?: string[] | null;
  title: string;
  textEnder?: string | null;
}

const SectionHeadings: React.FC<SectionHeadingsProps> = ({
  tagline,
  className = "",
  gradientClass = "",
  description = [],
  title,
  textEnder = null
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center mb-10 text-center ${className}`}
    >
      <SectionRibbonTitle className="from-[#333139] to-[#23202a]">
        {tagline}
      </SectionRibbonTitle>

      <h2 className="text-5xl mb-5 font-bold leading-[1.25] text-white">
        {title}
      </h2>

      <div className="w-full lg:w-9/12 leading-7">
        {description?.map((item, key) => (
          <p key={key}>{item}</p>
        ))}

        {textEnder && (
          <p className="text-lg text-neutral-200 tracking-wide">{textEnder}</p>
        )}
      </div>
    </div>
  );
};

export default SectionHeadings;
