import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { FavIcon } from "@components/FavIcon";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
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
