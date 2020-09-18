import "../styles.css";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@helpers/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
