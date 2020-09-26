import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps {
  className?: string;
}

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className = "", ...props }) => {
  const defaultStyles = "text-black border-black";

  const darkModeStyles = "dark:text-white dark:border-white";

  const animationStyles =
    "transform transition-all duration-100 ease-in-out hover:scale-105";

  return (
    <button
      {...props}
      className={`px-6 py-3 outline-none rounded-md border font-medium text-lg ${animationStyles} ${defaultStyles} ${darkModeStyles} ${className}`}
    >
      {children}
    </button>
  );
};
