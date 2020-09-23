import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps {
  className?: string;
}

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className = "", ...props }) => {
  const defaultStyles =
    "text-black border-black  hover:bg-black  hover:text-white";

  const darkModeStyles =
    "dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black";

  return (
    <button
      {...props}
      className={`px-6 py-3 outline-none rounded border  ${defaultStyles} ${darkModeStyles} ${className}`}
    >
      {children}
    </button>
  );
};
