import { Navbar } from "@components/Navbar";
import React, { FC } from "react";
import { Wrapper } from "./styles";

export const DefaultLayout: FC = ({ children }) => (
  <Wrapper>
    <Navbar />
    <div className="py-20 px-8 max-w-3xl mx-auto">{children}</div>
  </Wrapper>
);

export const HomeLayout: FC = ({ children }) => (
  <Wrapper>
    <Navbar />
    <div className="py-20 px-8 max-w-3xl mx-auto flex md:h-screen md:-mt-20">
      {children}
    </div>
  </Wrapper>
);
