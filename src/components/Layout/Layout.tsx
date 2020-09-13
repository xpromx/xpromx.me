import React, { FC } from "react";
import Head from "./Head";
import { Navbar } from "../Navbar";
interface LayoutProps {
  title: string;
  description?: string;
  image?: string;
}

export const Wrapper: FC = ({ children }) => (
  <div
    style={{
      minHeight: "500px",
    }}
  >
    {children}
  </div>
);

export const Main: FC<{ className?: string }> = ({
  children,
  className = "",
}) => <div className={`py-4 px-4 md:px-8 ${className}`}>{children}</div>;

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
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

Layout.Main = Main;

export default Layout;
