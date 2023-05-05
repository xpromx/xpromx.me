import React, { FC, ReactNode } from "react";
import styles from "./Subtitle.module.css";
interface SubtitleProps {
  className?: string;
  children: ReactNode;
}

export const Subtitle: FC<SubtitleProps> = ({ children, className }) => {
  return <h3 className={`${styles.root} ${className}`}>{children}</h3>;
};
