import React, { FC } from "react";
import { Layout, Title } from "@components";
import { getPageById, getTable, NotionPost } from "@helpers/notion";
import { BlockMapType, NotionRenderer } from "react-notion";
import { NOTION_BLOG_ID } from "src/constants";

interface PageProps {
  post: NotionPost;
  blockMap: BlockMapType;
}

const Page: FC<PageProps> = ({ post, blockMap }) => {
  if (!post) {
    return <Layout.Loading />;
  }

  return (
    <Layout title={post.title} description={post.description}>
      <Layout.Main>
        <div className="text-gray-600 text-sm uppercase mb-2">
          {post.category}
        </div>
        <Title className="text-4xl">{post.title}</Title>
        <div className="blog-post">
          {blockMap && <NotionRenderer blockMap={blockMap} />}
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
  const posts = await getTable(NOTION_BLOG_ID);
  const post = posts.find((post) => post.slug === params.slug);
  const page = post ? await getPageById(post.id) : null;

  return {
    props: {
      post: post,
      blockMap: page?.block,
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const posts = await getTable(NOTION_BLOG_ID);
  return {
    paths: posts.map((row) => `/blog/${row.slug}`),
    fallback: true,
  };
}

export default Page;
