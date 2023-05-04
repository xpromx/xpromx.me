import React, { FC, ReactNode } from "react";
import { Navbar } from "../Navbar";
import { Spinner } from "@components/Spinner";
interface LayoutProps {
  children: ReactNode;
}

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className={`h-screen`}
      style={{
        minHeight: "500px",
      }}
    >
      <div className="h-screen bg-white text-black">{children}</div>
    </div>
  );
};

interface LoadingProps {
  className?: string;
  title?: string;
  children?: ReactNode;
}

export const Loading: FC<LoadingProps> = ({ title, children, className }) => {
  return (
    <Layout>
      <Main>
        <div className="text-center">
          <Spinner className={className} />
        </div>
        {children}
      </Main>
    </Layout>
  );
};

export const Main: FC<{ className?: string; children: ReactNode }> = ({
  children,
  className = "",
}) => (
  <div className={`py-20 px-8 max-w-3xl mx-auto ${className}`}>{children}</div>
);

interface LayoutComponents {
  Main: typeof Main;
  Loading: typeof Loading;
}

const Layout: LayoutComponents & FC<LayoutProps> = ({ children }) => {
  return (
    <>
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
