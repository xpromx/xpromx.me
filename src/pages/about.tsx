import React, { FC } from "react";
import { Layout, Paragraph, Subtitle, Timezone, Title } from "@components";

const Page: FC = () => {
  return (
    <Layout title="About">
      <Layout.Main>
        <Title>About</Title>

        <Subtitle className="mt-20">Who I am?</Subtitle>
        <Paragraph>
          I am Rodrigo Ramirez, a Full-Stack developer, and entrepreneur. I am
          from Argentina, and I have been living in Tokyo, Japan since 2018.
        </Paragraph>
        <Subtitle className="mt-20">Timezone</Subtitle>
        <Timezone />

        <Subtitle className="mt-20">What can I do?</Subtitle>
        <Paragraph>
          I have many years of experience managing projects using Agile
          Methodologies. I always adapt myself to the team and the project type
          providing the speed and the flexibility to achieve the goals of the
          project.
          <br />
          <br />
          As a developer, I have more than seven years of experience working
          with PHP + Laravel. In the last four years, I have been working with
          React + Node.JS.
          <br />
          <br />I am also passionate about UI/UX and Marketing. I believe this
          knowledge is great to have to make the right decisions about
          requirements.
        </Paragraph>
      </Layout.Main>
    </Layout>
  );
};

export default Page;
