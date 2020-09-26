import React, { FC } from "react";

interface TitleProps {
  className?: string;
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  return (
    <h1 className={`text-4xl lg:text-5xl font-medium mb-16 ${className}`}>
      {children}
    </h1>
  );
};
