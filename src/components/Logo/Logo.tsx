import { useTheme } from "@helpers/ThemeContext";
import React from "react";

export const Logo = () => {
  const { darkMode } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="none"
      viewBox="0 0 200 200"
    >
      <circle
        cx="100"
        cy="100"
        r="100"
        fill={darkMode ? "#FFF" : "#000"}
      ></circle>
      <path
        fill={darkMode ? "#000" : "#FFF"}
        d="M57.368 141.258V54.701h39.4c17.699 0 26.548 7.738 26.548 23.215 0 10.466-6.89 19.134-20.669 26.004l27.458 37.459H109.86l-26.367-37.762v-7.335c15.355-2.626 23.033-8.587 23.033-17.88 0-6.386-3.596-9.578-10.79-9.578H73.735v72.434H57.368zM150.775 126.529v14.85h-16.063v-14.85h16.063z"
      ></path>
    </svg>
  );
};
