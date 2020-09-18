import React, { FC } from "react";
import { DarkMode } from "./DarkMode";
import { LightMode } from "./LightMode";

const icons = {
  darkMode: DarkMode,
  lightMode: LightMode,
};

interface IconProps {
  icon: keyof typeof icons;
}

export const Icon: FC<IconProps> = ({ icon }) => {
  const Component = icons[icon];
  return <Component />;
};
