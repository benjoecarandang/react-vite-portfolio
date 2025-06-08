import React, { type JSX } from "react";
import SectionRibbonTitle from "./SectionRibbonTitle";

interface SectionHeadingsProps {
  tagline: string;
  title: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  taglineGradient?: string;
  children?: React.ReactNode;
}

const SectionHeadings: React.FC<SectionHeadingsProps> = ({
  tagline,
  title,
  as = "h2",
  className = "",
  taglineGradient = "from-[#333139] to-[#23202a]",
  children,
}) => {
  const HeadingTag = as;

  console.log("Children:", children);
  return (
    <div
      className={`flex flex-col items-center justify-center mb-10 text-center ${className}`}
    >
      <SectionRibbonTitle className={taglineGradient}>
        {tagline}
      </SectionRibbonTitle>

      <HeadingTag className="text-5xl mb-5 font-bold leading-[1.25] text-white">
        {title}
      </HeadingTag>

      {children ? (
        <div className="w-full lg:w-9/12 leading-7 text-neutral-300 space-y-4">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default SectionHeadings;