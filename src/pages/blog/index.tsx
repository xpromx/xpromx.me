import React, { FC } from "react";
import { Layout, Post, Title } from "@components";
import { getAllPosts, PostType } from "@helpers/notion";

interface PageProps {
  posts: PostType[];
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
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Page;
