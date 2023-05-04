import React, { FC, ReactNode } from "react";

interface SubtitleProps {
  className?: string;
  children: ReactNode;
}

export const Subtitle: FC<SubtitleProps> = ({ children, className }) => {
  const fontSize = className?.includes("text-") ? "" : "text-2xl lg:text-2xl";
  return (
    <h3 className={`leading-snug font-medium mb-10 ${fontSize} ${className}`}>
      {children}
    </h3>
  );
};
