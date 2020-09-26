import React, { FC } from "react";
import { Layout, Title } from "@components";
import { getAllPosts, getPostBySlug, PostType } from "@helpers/notion";
import { NotionRenderer } from "react-notion";

interface PageProps {
  post: PostType;
}

const Page: FC<PageProps> = ({ post }) => {
  return (
    <Layout title={post.title} description={post.description}>
      <Layout.Main>
        <div className="text-gray-600 text-sm uppercase">{post.category}</div>
        <Title>{post.title}</Title>
        <div className="blog-post">
          {post.blocks && <NotionRenderer blockMap={post.blocks} />}
        </div>
      </Layout.Main>
    </Layout>
  );
};

interface Params {
  params: {
    slug: string;
  };
}

export const getStaticProps = async ({ params }: Params) => {
  return {
    props: {
      post: await getPostBySlug(params?.slug),
    },
  };
};

export async function getStaticPaths() {
  const table = await getAllPosts();
  return {
    paths: table.map((row) => `/blog/${row.slug}`),
    fallback: true,
  };
}

export default Page;
