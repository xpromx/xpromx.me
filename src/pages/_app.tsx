import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@helpers/ThemeContext";
import { DEFAULT_SEO } from "@constants";
import { DefaultLayout } from "@components/Layout";

// styles
import "../styles/main.css";
import "../styles/prismjs.css";
import "../styles/notion.css";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Layout = (Component as any).Layout || DefaultLayout;
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
