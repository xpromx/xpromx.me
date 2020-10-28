import React from "react";
import Document, { Html, Main, Head, NextScript } from "next/document";
import { FavIcon } from "@components/FavIcon";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
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
