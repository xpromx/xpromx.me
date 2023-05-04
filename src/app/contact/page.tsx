import React, { FC, ReactNode } from "react";
import {
  Icon,
  IconType,
  Layout,
  Paragraph,
  Subtitle,
  Title,
} from "@components";
import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "../../constants";
import type { Metadata } from "next";

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
    <a
      href={href}
      target="blank"
      className="border-2 rounded-md p-4 flex items-center text-xl"
    >
      <Icon icon={icon} className="mr-4 text-2xl" />
      <div>{children}</div>
    </a>
  );
};

export default function ContactPage() {
  return (
    <Layout>
      <Layout.Main>
        <Title>Contact</Title>
        <Paragraph>
          Here’s all my contact information on how to reach me.
        </Paragraph>

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
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
    </Layout>
  );
}
