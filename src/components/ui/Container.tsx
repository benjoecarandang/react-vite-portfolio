import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  let resolvedClassName = className ? className : "max-w-7xl";

  return (
    <div className={`${resolvedClassName} mx-auto px-6 md:px-8 lg:px-8`}>
      {children}
    </div>
  );
};

export default Container;
