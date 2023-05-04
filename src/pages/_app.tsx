import React from "react";
import type { AppProps } from "next/app";

// styles
import "../styles/main.css";
import "../styles/prismjs.css";
import "../styles/notion.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
