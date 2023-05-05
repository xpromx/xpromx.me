import React, { FC, ReactNode } from "react";
import styles from "./Title.module.css";

interface TitleProps {
  className?: string;
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  return <h1 className={`${styles.root} ${className}`}>{children}</h1>;
};
