import React, { FC } from "react";
import Head from "./Head";
import { Navbar } from "../Navbar";
import { useTheme } from "@helpers/ThemeContext";
import { Spinner } from "@components/Spinner";
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

interface LoadingProps {
  className?: string;
  title?: string;
}

export const Loading: FC<LoadingProps> = ({ title, children, className }) => {
  return (
    <Layout title={title || "Loading"}>
      <Main>
        <div className="text-center">
          <Spinner className={className} />
        </div>
        {children}
      </Main>
    </Layout>
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
  Loading: typeof Loading;
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
Layout.Loading = Loading;

export default Layout;
