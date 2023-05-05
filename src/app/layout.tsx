import { ReactNode } from "react";
import "../styles.css";
import { SITE_DESCRIPTION, SITE_NAME } from "../constants";
import type { Metadata } from "next";
import { FavIcon } from "@components/FavIcon";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <FavIcon />
      </head>
      <body>{children}</body>
    </html>
  );
}
