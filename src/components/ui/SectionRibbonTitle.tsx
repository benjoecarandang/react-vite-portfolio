import { type ReactNode } from "react";

interface SectionRibbonTitlteProps {
  children: ReactNode;
  className?: string;
}

const SectionRibbonTitle = ({
  children,
  className
}: SectionRibbonTitlteProps) => {
  const resolvedClassName =
    className === null ? "from-[#1e1b24] to-[#19181f]" : className;

  return (
    <p
      className={`rounded-full px-6 py-2 mb-5 text-white font-semibold text-sm rounded-bl-none bg-gradient-to-r shadow-xl ${resolvedClassName}`}
    >
      {children}
    </p>
  );
};

export default SectionRibbonTitle;
