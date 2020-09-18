import React, {
  useState,
  FC,
  createContext,
  useContext,
  useEffect,
} from "react";

interface ContextProps {
  readonly darkMode?: boolean;
  readonly setDarkMode: (darkMode: boolean) => void;
}

export const ThemeContext = createContext<ContextProps>({
  darkMode: false,
  setDarkMode: () => null,
});

export const ThemeProvider: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    setDarkMode(isDarkMode);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
