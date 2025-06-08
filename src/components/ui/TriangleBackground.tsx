type TriangleBackgroundProps = {
  className?: string;
  revert?: boolean;
  bgColor?: string;
};

const TriangleBackground = ({
  className = "",
  revert = false,
  bgColor = "dark-800"
}: TriangleBackgroundProps) => {
  const points = revert ? "100,0 100,100 0,100" : "0,0 0,100 100,100";

  const colorClass =
    bgColor.includes("#") || bgColor.includes("rgb") ? "" : `text-${bgColor}`;

  return (
    <div className="h-48 relative">
      <svg
        className={`absolute w-full h-full ${colorClass} ${className}`}
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        fill="currentColor"
        style={
          bgColor.includes("#") || bgColor.includes("rgb")
            ? { color: bgColor }
            : undefined
        }
      >
        <polygon points={points} />
      </svg>
    </div>
  );
};

export default TriangleBackground;
