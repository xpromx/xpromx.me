import React, { FC } from "react";
import Head from "next/head";
import { SITE_NAME, DEFAULT_LOCALE, SITE_DESCRIPTION } from "src/constants";

interface Props {
  title: string;
  description?: string;
  image?: string;
}

const HeadTag: FC<Props> = ({
  title,
  description = SITE_DESCRIPTION,
  image,
}) => {
  return (
    <Head>
      <title>
        {title} - {SITE_NAME}
      </title>
      <meta httpEquiv="content-language" content={DEFAULT_LOCALE} />
      <meta name="language" content={DEFAULT_LOCALE} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default HeadTag;
