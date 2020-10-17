import React, { FC } from "react";
import {
  Icon,
  IconType,
  Layout,
  Paragraph,
  Subtitle,
  Timezone,
  Title,
} from "@components";
import Link from "next/link";
import { GITHUB, LINKEDIN, TWITTER } from "src/constants";
interface ItemProps {
  icon: IconType;
  href: string;
}

const Item: FC<ItemProps> = ({ children, icon, href }) => {
  return (
    <a
      href={href}
      target="blank"
      className="rounded-md mr-10 mb-8 flex items-center text-lg"
    >
      <Icon icon={icon} className="mr-2" size="md" />
      <div className="text-gray-700 dark:text-gray-500">{children}</div>
    </a>
  );
};

const Page: FC = () => {
  return (
    <Layout title="About">
      <Layout.Main>
        <Title>About</Title>

        <div className="flex flex-wrap">
          <Item icon="github" href={GITHUB}>
            Github
          </Item>

          <Item icon="twitter" href={TWITTER}>
            Twitter
          </Item>

          <Item icon="linkedin" href={LINKEDIN}>
            Linkedin
          </Item>
        </div>

        <Subtitle className="mt-10">Who am I?</Subtitle>
        <Paragraph>
          I am Rodrigo Ramirez, a Full-Stack developer and entrepreneur. I am
          from Argentina, and I have been living in Japan since 2018.
        </Paragraph>
        <Subtitle className="mt-20">Timezone</Subtitle>
        <Timezone />

        <Subtitle className="mt-20">What can I do?</Subtitle>
        <Paragraph>
          I have experience managing projects with Agile Methodologies and I
          always adapt myself to the team and the project type providing the
          speed and the flexibility to achieve the goals of the project.
          <br />
          <br />
          As a developer, I have more than 7 years of experience in PHP +
          Laravel. In my last 4 years, I have been working with React + Node.JS.
          <br />
          <br />I am also passionate about UI/UX and Marketing. I believe this
          knowledge is great to have to make the right decisions about
          requirements.
        </Paragraph>
        <Link href="/uses">
          <a className="text-blue-700 dark:text-blue-400 underline block mt-6">
            Learn more about the technologies and tools I use →
          </a>
        </Link>
      </Layout.Main>
    </Layout>
  );
};

export default Page;
