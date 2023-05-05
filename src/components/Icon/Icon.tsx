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
import styles from "./Icon.module.css";

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
  xs: styles["size--xs"],
  sm: styles["size--sm"],
  md: styles["size--md"],
  lg: styles["size--lg"],
  xl: styles["size--xl"],
};

const colors = {
  nodejs: styles["color--nodejs"],
  react: styles["color--react"],
  php: styles["color--php"],
  css: styles["color--css"],
  default: styles["color--default"],
};

export type IconSize = keyof typeof sizes;
export type IconColor = keyof typeof colors;
interface IconProps {
  icon: IconType;
  color?: IconColor;
  size?: IconSize;
}

export const Icon: FC<IconProps> = ({
  icon,
  size = "md",
  color = "default",
}) => {
  const Component = icons[icon];
  return (
    <Component className={`${sizes[size]} ${colors[color]} ${styles.root}`} />
  );
};
