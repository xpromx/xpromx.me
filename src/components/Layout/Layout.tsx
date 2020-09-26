import React, { FC } from "react";
import Head from "./Head";
import { Navbar } from "../Navbar";
import { useTheme } from "@helpers/ThemeContext";
interface LayoutProps {
  title: string;
  description?: string;
  image?: string;
}

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

export const Main: FC<{ className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`py-20 px-8 max-w-3xl mx-auto ${className}`}>{children}</div>
);

interface LayoutComponents {
  Main: typeof Main;
}

const Layout: LayoutComponents & FC<LayoutProps> = ({
  children,
  title,
  image,
  description,
}) => {
  return (
    <>
      <Head title={title} description={description} image={image} />
      <Wrapper>
        <Navbar />
        {children}
      </Wrapper>
    </>
  );
};

Layout.Main = Main;

export default Layout;
