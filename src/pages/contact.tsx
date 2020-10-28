import React, { FC } from "react";
import {
  Head,
  Icon,
  IconType,
  Paragraph,
  Subtitle,
  Timezone,
  Title,
} from "@components";
import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "src/constants";

interface ItemProps {
  icon: IconType;
  href: string;
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

const Page = () => {
  return (
    <>
      <Head title="Contact" />
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

      <Subtitle className="mt-20">Timezone</Subtitle>
      <Timezone />
    </>
  );
};

export default Page;
