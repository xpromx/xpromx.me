import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@helpers/ThemeContext";

// styles
import "../styles/main.css";
import "../styles/prismjs.css";
import "../styles/notion.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
