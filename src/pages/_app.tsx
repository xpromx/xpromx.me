import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@helpers/ThemeContext";
import { DEFAULT_SEO } from "@constants";

// styles
import "../styles/main.css";
import "../styles/prismjs.css";
import "../styles/notion.css";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
