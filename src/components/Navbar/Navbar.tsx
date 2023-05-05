import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { LogoLarge } from "../Logo";
import styles from "./Navbar.module.css";

const Nav: FC<{ children: ReactNode }> = ({ children }) => {
  return <ul className={styles.nav}>{children}</ul>;
};

const NavItem: FC<{ children: ReactNode }> = ({ children }) => {
  return <li className={styles.navItem}>{children}</li>;
};

export const Navbar = () => {
  return (
    <div className={styles.root}>
      {/* Left */}
      <div className={styles.left}>
        <Link href="/">
          <LogoLarge />
        </Link>
      </div>

      {/* Menu */}
      <div className={styles.menu}>
        <Nav>
          <NavItem>
            <Link href="/about">About Me</Link>
          </NavItem>
          <NavItem>
            <Link href="/blog">Blog</Link>
          </NavItem>
          <NavItem>
            <Link href="/uses">Uses</Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">Contact</Link>
          </NavItem>
        </Nav>
      </div>

      {/* Right */}
      <div className={styles.right}></div>
    </div>
  );
};
