import React from "react";

const TriangleOverlay: React.FC = () => {
  return (
    <svg
      className="absolute top-0 bottom-0 right-[25%] w-1/4 h-full text-[#23202a] z-2"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <polygon points="0,0 100,0 0,100" />
    </svg>
  );
};

export default TriangleOverlay;
