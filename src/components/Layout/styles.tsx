import React, { FC } from "react";
import { useTheme } from "@helpers/ThemeContext";

export const Wrapper: FC = ({ children }) => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`${darkMode ? "dark" : ""} h-screen`}
      style={{
        minHeight: "500px",
      }}
    >
      <div className="h-screen bg-white text-black dark:bg-black dark:text-white">
        {children}
      </div>
    </div>
  );
};
