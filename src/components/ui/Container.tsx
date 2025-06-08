import { type ReactNode } from "react";
import { cn } from "../../lib/utils/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  let resolvedClassName = className ? className : "max-w-7xl";

  return (
    <div className={cn("mx-auto px-6 md:px-8 lg:px-8", resolvedClassName)}>
      {children}
    </div>
  );
};

export default Container;
