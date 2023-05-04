import React from "react";
import { Layout, Post, Title } from "@components";
import { getTable } from "@helpers/notion";
import { NOTION_BLOG_ID } from "../../constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogList() {
  const posts = await getTable(NOTION_BLOG_ID);

  if (!posts) {
    return <Layout.Loading title="Blog" />;
  }
  return (
    <Layout>
      <Layout.Main>
        <Title>Blog</Title>
        {posts.map(
          (post) => post.published && <Post key={post.id} fragment={post} />
        )}
      </Layout.Main>
    </Layout>
  );
}

export const revalidate = 15;
