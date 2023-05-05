import React, { FC, ReactNode } from "react";
import { Icon, Layout, Paragraph, Title } from "@components";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Uses",
};

const Category: FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className={styles.category}>{children}</h2>
);

interface ItemProps {
  title: string;
  extra?: string;
  description?: string;
  icon?: React.ReactNode;
}

const Item: FC<ItemProps> = ({ title, description, extra, icon }) => (
  <div className={styles.item}>
    <div className={styles.itemIcon}>{icon || "●"}</div>
    <div>
      <div className={styles.itemBody}>
        <h3 className={styles.itemTitle}>{title}</h3>
        {extra && <div className={styles.itemExtra}>({extra})</div>}
      </div>
      {description && <p className={styles.itemDescription}>{description}</p>}
    </div>
  </div>
);

const backend = [
  {
    title: "PHP",
    extra: "+7 years",
    description: "Laravel, Lumen, Docker, PHPUnit",
    icon: <Icon icon="php" color="php" />,
  },
  {
    title: "Node.JS",
    extra: "+4 years",
    description: "Typescript, GraphQL, Jest, Express",
    icon: <Icon icon="nodeJS" color="nodejs" />,
  },
];

const frontend = [
  {
    title: "React",
    extra: "+4 years",
    description:
      "Typescript, Apollo GraphQL, Next.JS, Jest, React-testing-library, Cypress",
    icon: <Icon icon="react" color="react" />,
  },
  {
    title: "Styles",
    description: "CSS Modules, TailwindCSS, Styled-Components",
    icon: <Icon icon="css" color="css" />,
  },
];

const mobile = [
  {
    title: "React Native",
    extra: "3 apps",
  },
  {
    title: "Ionic",
    extra: "1 app",
  },
];

const databases = [
  {
    title: "MySQL",
  },
  {
    title: "PostgreSQL",
  },
  {
    title: "Amazon Aurora",
    extra: "serverless",
  },
  {
    title: "DynamoDB",
    extra: "serverless",
  },
];

const devops = [
  {
    title: "Hosting",
    description: "DigitalOcean, AWS, GCP, Laravel Forge, Vercel",
  },
  {
    title: "Mailing",
    description: "Mailgun, Amazon SES, Mailchimp",
  },
  {
    title: "Tools",
    description:
      "Terraform, Docker, Docker Swarm, Serverless (AWS, Vercel), Cloudflare, Github, Gitlab",
  },
];

const developmentTools = [
  {
    title: "Visual Studio Code",
    description: "As my main IDE for development",
  },
  {
    title: "Insomia",
    description: "Design, Debug, and Deploy APIs",
  },
  {
    title: "Sizzy",
    description:
      "Sizzy is a browser made specifically for responsive development. It allows you to preview a website on multiple devices at once",
  },
  {
    title: "BrowserStack",
    description:
      "Instant access to 2000+ browsers and real iOS and Android devices for cross browser testing. ",
  },
];

const design = [
  {
    title: "Figma",
    description:
      "Figma is a cross-platform and collaborative design tools in your browser, It allow you to access your design anywhere and share them with your team to get quick feedbacks.",
  },
  {
    title: "Balsamic Mockups",
    description:
      "Quick and Easy Wireframing Tool, Ideal for making quick ideas and get everyone on the same page.",
  },
  {
    title: "SVGOMG",
    description: "Allows optimizing SVGs online with a live preview",
  },
  {
    title: "ImageOptim",
    description:
      "Perfect tool to optimizing images for the web by reducing the file size dramatically without difference in the quality.",
  },
];

const business = [
  {
    title: "Jira",
    description:
      "I have tried many tasks management tools in my career, but Jira is the most mature tool for Agile teams, allowing you to plan, track, and design your workflows.",
  },
  {
    title: "Zendesk",
    description:
      "I have experience implementing and integrated Zendesk in all my companies, I was in charge of creating the workflows for the customer support team, and integrating zendesk with our services.",
  },
  {
    title: "Google Apps",
    description:
      "The best option for companies for hosting their email, documents, calendar, etc.",
  },
  {
    title: "Notion",
    description:
      "The best tool for planning, documenting, and collaborate with all staff in the company.",
  },
  {
    title: "Slack",
    description:
      "An internal communication tool, that can be integrated with many of the services mentioned here.",
  },
  {
    title: "Redash",
    description:
      "Redash helps you make sense of your data, Connect and query your data sources, build dashboards to visualize data and share them with your company.",
  },
  {
    title: "Miro",
    description:
      "The online collaborative whiteboard platform to bring teams together, anytime, anywhere.",
  },
];

const marketing = [
  {
    title: "Ads",
    description: "Google Ads, Facebook Ads, Bing Ads, ClickCease",
  },
  {
    title: "SEO",
    description: "SEMRush, Google Analytics, Webmaster Tools, Hotjar",
  },
  {
    title: "Social Media",
    description: "Buffer",
  },
];

export default function UsesPage() {
  return (
    <Layout.Main>
      <Title>Uses</Title>
      <Paragraph>
        What I use at work on a day to day basis, changes from time to time but
        I’ll try to keep this up to date.
      </Paragraph>

      {/* Backend */}
      <Category>Backend</Category>
      {backend.map((item) => (
        <Item key={item.title} {...item} />
      ))}

      {/* Frontend */}
      <Category>Frontend</Category>
      {frontend.map((item) => (
        <Item key={item.title} {...item} />
      ))}

      {/* Mobile */}
      <Category>Mobile</Category>
      {mobile.map((item) => (
        <Item key={item.title} {...item} />
      ))}

      {/* Databases */}
      <Category>Databases</Category>
      {databases.map((item) => (
        <Item key={item.title} {...item} />
      ))}

      {/* DevOps */}
      <Category>DevOps</Category>
      {devops.map((item) => (
        <Item key={item.title} {...item} />
      ))}

      {/* Development Tools */}
      <Category>Development Tools</Category>
      {developmentTools.map((item) => (
        <Item key={item.title} {...item} />
      ))}

      {/* Design */}
      <Category>Design</Category>
      {design.map((item) => (
        <Item key={item.title} {...item} />
      ))}

      {/* Business */}
      <Category>Business</Category>
      {business.map((item) => (
        <Item key={item.title} {...item} />
      ))}

      {/* Marketing */}
      <Category>Marketing</Category>
      {marketing.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </Layout.Main>
  );
}
