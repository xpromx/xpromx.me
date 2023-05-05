import React, { FC, ReactNode } from "react";
import { Navbar } from "../Navbar";
import styles from "./Layout.module.css";
interface LayoutProps {
  children: ReactNode;
}

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className={styles.root}
      style={{
        minHeight: "500px",
      }}
    >
      <div className={styles.container}>{children}</div>
    </div>
  );
};

interface LoadingProps {
  className?: string;
  title?: string;
  children?: ReactNode;
}

export const Main: FC<{ className?: string; children: ReactNode }> = ({
  children,
  className = "",
}) => <div className={`${styles.main} ${className}`}>{children}</div>;

interface LayoutComponents {
  Main: typeof Main;
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

export default Layout;
