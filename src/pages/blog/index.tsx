import React, { FC } from "react";
import { Layout, Post, Title } from "@components";
import { getTable, NotionPost } from "@helpers/notion";
import { NOTION_BLOG_ID } from "src/constants";

interface PageProps {
  posts: NotionPost[];
}

const Page: FC<PageProps> = ({ posts }) => {
  if (!posts) {
    return <Layout.Loading title="Blog" />;
  }
  return (
    <Layout title="Blog">
      <Layout.Main>
        <Title>Blog</Title>
        {posts.map(
          (post) => post.published && <Post key={post.slug} {...post} />
        )}
      </Layout.Main>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getTable(NOTION_BLOG_ID);
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default Page;
