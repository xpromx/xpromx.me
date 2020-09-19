import React, { FC } from "react";
import { DarkMode } from "./DarkMode";
import { LightMode } from "./LightMode";

const icons = {
  darkMode: DarkMode,
  lightMode: LightMode,
};

const sizes = {
  xs: "h-4 w-4",
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
  custom: "",
};

interface IconProps {
  icon: keyof typeof icons;
  size?: keyof typeof sizes;
  className?: string;
}

export const Icon: FC<IconProps> = ({ icon, className, size = "md" }) => {
  const Component = icons[icon];
  return <Component className={`${sizes[size]} ${className}`} />;
};
