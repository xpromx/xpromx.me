import React, { FC } from "react";
import { LogoLarge } from "../Logo";

const Nav: FC = ({ children }) => {
  return <ul className="flex items-center h-full">{children}</ul>;
};

const NavItem: FC = ({ children }) => {
  return <li className="px-4 hover:underline text-lg">{children}</li>;
};

export const Navbar = () => {
  return (
    <div className="flex justify-between p-4 border-b dark:border-gray-100">
      <div className="w-64">
        <a href="#">
          <LogoLarge />
        </a>
      </div>
      <div className="w-full justify-center hidden md:flex">
        <Nav>
          <NavItem>
            <a href="#">About Me</a>
          </NavItem>
          <NavItem>
            <a href="#">Blog</a>
          </NavItem>
          <NavItem>
            <a href="#">Uses</a>
          </NavItem>
          <NavItem>
            <a href="#">Contact</a>
          </NavItem>
        </Nav>
      </div>
      <div className="w-64 text-right">...</div>
    </div>
  );
};
