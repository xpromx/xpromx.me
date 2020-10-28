import React, { FC } from "react";
import { Head, Loading, Post, Title } from "@components";
import { getAllPosts, PostType } from "@helpers/notion";

interface PageProps {
  posts: PostType[];
}

const Page: FC<PageProps> = ({ posts }) => {
  if (!posts) {
    return <Loading />;
  }
  return (
    <>
      <Head title="Blog" />
      <Title>Blog</Title>
      {posts.map(
        (post) => post.published && <Post key={post.slug} {...post} />
      )}
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default Page;
