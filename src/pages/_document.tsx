import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { FavIcon } from "@components/FavIcon";
import { DEFAULT_LOCALE } from "src/constants";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={DEFAULT_LOCALE}>
        <Head>
          <FavIcon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
