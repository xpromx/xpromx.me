import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { LogoLarge } from "../Logo";

const Nav: FC<{ className?: string, children: ReactNode; }> = ({ children, className = "" }) => {
  return (
    <ul className={`flex items-center h-full ${className}`}>{children}</ul>
  );
};

const NavItem: FC<{children: ReactNode;}> = ({ children }) => {
  return (
    <li className="px-3 sm:px-4 hover:underline text-base md:text-lg last:pr-0 first:pl-0">
      {children}
    </li>
  );
};

export const Navbar = () => {
  return (
    <div className="flex flex-wrap md:flex-no-wrap justify-between md:border-b">
      {/* Left */}
      <div className="w-1/2 md:w-64 p-4">
        <Link href="/">
          <LogoLarge />
        </Link>
      </div>

      {/* Right */}
      <div className="w-1/2 md:w-64 p-4 text-right md:order-last"></div>

      {/* Menu */}
      <div className="w-full justify-center flex bg-gray-200 md:bg-transparent py-2 px-4">
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
    </div>
  );
};
