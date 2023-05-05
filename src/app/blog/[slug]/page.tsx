import React from "react";
import { Layout, Title } from "@components";
import { getPageById, getTable } from "@helpers/notion";
import { BlockMapType, NotionRenderer } from "react-notion";
import { NOTION_BLOG_ID } from "../../../constants";
import "../../../styles/notion.css";
import "../../../styles/prismjs.css";
import { Metadata } from "next/types";
import styles from "./page.module.css";
interface PageProps {
  params: {
    slug: string;
  };
}

async function getPostBySlug(slug: string) {
  const posts = await getTable(NOTION_BLOG_ID);
  const post = posts.find((post) => post.slug === slug);
  const page = post ? await getPageById(post.id) : null;

  return { post, block: page?.block };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { post } = await getPostBySlug(params.slug);
  return {
    title: post?.title,
    description: post?.description,
  };
}

export default async function BlogDetail({ params }: PageProps) {
  const { post, block } = await getPostBySlug(params.slug);

  if (!post) {
    return <div>...</div>;
  }

  return (
    <Layout.Main>
      <div className={styles.root}>{post.category}</div>
      <Title>{post.title}</Title>
      <div className="blog-post">
        {block && <NotionRenderer blockMap={block as BlockMapType} />}
      </div>
    </Layout.Main>
  );
}

export const revalidate = 15;
