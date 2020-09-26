import React, { FC } from "react";
import { Layout, Title } from "@components";

const Page: FC = () => {
  return (
    <Layout title="About">
      <Layout.Main>
        <Title>About</Title>
        ...
      </Layout.Main>
    </Layout>
  );
};

export default Page;
