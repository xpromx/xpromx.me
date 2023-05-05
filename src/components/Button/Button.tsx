import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css";
interface ButtonProps {
  className?: string;
}

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className = "", ...props }) => {
  return (
    <button {...props} className={[styles.root, className].join(" ")}>
      {children}
    </button>
  );
};
