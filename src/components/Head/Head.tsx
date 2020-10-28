import React, { FC } from "react";
import NextHead from "next/head";
import { NextSeo, NextSeoProps } from "next-seo";

export const Head: FC<NextSeoProps> = (props) => {
  return (
    <>
      <NextSeo
        {...props}
        openGraph={{ title: props.title, description: props.description }}
      />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>
    </>
  );
};
