import React, { FC } from "react";
import { Css } from "./icons/Css";
import { DarkMode } from "./icons/DarkMode";
import { Email } from "./icons/Email";
import { GitHub } from "./icons/Github";
import { LightMode } from "./icons/LightMode";
import { Linkedin } from "./icons/Linkedin";
import { NodeJS } from "./icons/NodeJS";
import { Php } from "./icons/Php";
import { ReactIcon } from "./icons/React";
import { Twitter } from "./icons/Twitter";

export const icons = {
  darkMode: DarkMode,
  lightMode: LightMode,
  github: GitHub,
  twitter: Twitter,
  linkedin: Linkedin,
  email: Email,
  php: Php,
  nodeJS: NodeJS,
  react: ReactIcon,
  css: Css,
};

export type IconType = keyof typeof icons;

const sizes = {
  xs: "h-4 w-4",
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
  custom: "",
};

export type IconSize = keyof typeof sizes;

interface IconProps {
  icon: IconType;
  size?: IconSize;
  className?: string;
}

export const Icon: FC<IconProps> = ({ icon, className, size = "md" }) => {
  const Component = icons[icon];
  return <Component className={`${sizes[size]} ${className}`} />;
};
