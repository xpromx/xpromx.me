import React, { FC } from "react";
import { Head, Loading, Title } from "@components";
import { getAllPosts, getPostBySlug, PostType } from "@helpers/notion";
import { NotionRenderer } from "react-notion";

interface PageProps {
  post: PostType;
}

const Page: FC<PageProps> = ({ post }) => {
  if (!post) {
    return <Loading />;
  }

  return (
    <>
      <Head title={post.title} description={post.description} />
      <div className="text-gray-600 text-sm uppercase mb-2">
        {post.category}
      </div>
      <Title className="text-4xl">{post.title}</Title>
      <div className="blog-post">
        {post.blocks && <NotionRenderer blockMap={post.blocks} />}
      </div>
    </>
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
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const table = await getAllPosts();
  return {
    paths: table.map((row) => {
      return {
        params: { slug: row.slug },
      };
    }),
    fallback: true,
  };
}

export default Page;
