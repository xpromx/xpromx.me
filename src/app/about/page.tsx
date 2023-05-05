import React, { FC, ReactNode } from "react";
import {
  Icon,
  IconType,
  Layout,
  Paragraph,
  Subtitle,
  Title,
} from "@components";
import Link from "next/link";
import { GITHUB, LINKEDIN, TWITTER } from "../../constants";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
};

interface ItemProps {
  icon: IconType;
  href: string;
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ children, icon, href }) => {
  return (
    <a href={href} target="blank" className={styles.item}>
      <Icon icon={icon} size="lg" />
      <div className={styles.itemBody}>{children}</div>
    </a>
  );
};

export default function AboutPage() {
  return (
    <Layout>
      <Layout.Main>
        <Title>About</Title>

        <div className={styles.social}>
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

        <Subtitle>Who am I?</Subtitle>
        <Paragraph>
          My name is Rodrigo Ramirez, I&apos;m a Full-stack developer,
          entrepreneur, and Argentinian. I have been living in Tokyo, Japan
          since 2014.
        </Paragraph>

        <Subtitle>What can I do?</Subtitle>
        <Paragraph>
          I have experience as a project manager leading different types of
          projects and team sizes. I use Agile methodology and adapt the process
          depending on the project and resources available.
          <br />
          <br />
          As a developer, I have more than 7 years of experience with PHP +
          Laravel. In my last 4 years, I have been working with React + Node.JS.
          <br />
          <br />I don&apos;t limit myself just as a developer. I am also
          interested in UI/UX and Marketing. I always try to keep myself updated
          with the latest trends.
          <br />
          <br />
          One of my strongest points is my broad knowledge of different fields
          such as Programming, Marketing, Design, Project Management, etc. that
          allow me to communicate better with different teams in order to
          achieve the company goals.
        </Paragraph>
        <Link href="/uses" className={styles.link}>
          Learn more about the technologies and tools I use →
        </Link>
      </Layout.Main>
    </Layout>
  );
}
