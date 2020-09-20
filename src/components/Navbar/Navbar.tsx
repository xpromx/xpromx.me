import { Icon } from "@components/Icon";
import { useTheme } from "@helpers/ThemeContext";
import React, { FC } from "react";
import { LogoLarge } from "../Logo";

const Nav: FC<{ className?: string }> = ({ children, className = "" }) => {
  return (
    <ul className={`flex items-center h-full ${className}`}>{children}</ul>
  );
};

const NavItem: FC = ({ children }) => {
  return (
    <li className="px-4 hover:underline text-base md:text-lg last:pr-0 first:pl-0">
      {children}
    </li>
  );
};

export const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <div className="flex flex-wrap md:flex-no-wrap justify-between md:border-b dark:border-gray-100">
      {/* Left */}
      <div className="w-1/2 md:w-64 p-4">
        <a href="#">
          <LogoLarge />
        </a>
      </div>

      {/* Right */}
      <div className="w-1/2 md:w-64 p-4 text-right md:order-last">
        <Nav className="flex-row-reverse">
          <NavItem>
            <button
              className="outline-none focus:outline-none flex items-center"
              onClick={() => setDarkMode(!darkMode)}
            >
              <Icon icon={darkMode ? "lightMode" : "darkMode"} size="sm" />
            </button>
          </NavItem>
        </Nav>
      </div>

      {/* Menu */}
      <div className="w-full justify-center flex bg-gray-200 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent py-2 px-4">
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
    </div>
  );
};
