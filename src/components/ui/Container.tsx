import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-8">{children}</div>
  );
};

export default Container;
