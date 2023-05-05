import React, { FC, ReactNode } from "react";
import { Icon, IconType, Layout, Paragraph, Title } from "@components";
import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "../../constants";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
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
      <div>{children}</div>
    </a>
  );
};

export default function ContactPage() {
  return (
    <Layout.Main>
      <Title>Contact</Title>
      <Paragraph>
        Here’s all my contact information on how to reach me.
      </Paragraph>

      <div className={styles.items}>
        <Item icon="github" href={GITHUB}>
          Github
        </Item>

        <Item icon="twitter" href={TWITTER}>
          Twitter
        </Item>

        <Item icon="linkedin" href={LINKEDIN}>
          Linkedin
        </Item>

        <Item icon="email" href={`mailto:${EMAIL}`}>
          Email
        </Item>
      </div>
    </Layout.Main>
  );
}
