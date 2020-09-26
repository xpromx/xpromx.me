import React, { FC } from "react";

interface TitleProps {
  className?: string;
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  const fontSize = className?.includes("text-") ? "" : "text-4xl lg:text-5xl";
  return (
    <h1 className={`leading-snug font-medium mb-10 ${fontSize} ${className}`}>
      {children}
    </h1>
  );
};
