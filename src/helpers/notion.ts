import { NOTION_BLOG_ID } from "src/constants";
import { BlockMapType } from "react-notion";

export interface PostType {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  blocks?: BlockMapType;
  published: boolean;
}

export const getAllPosts = async (): Promise<PostType[]> => {
  const posts: PostType[] = await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());

  return posts.filter((post) => post.published);
};

export const getPostBlocksById = async (postId: string) => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/page/${postId}`
  ).then((res) => res.json());
};

export const getPostBySlug = async (slug: string) => {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((p) => p.slug === slug);

  // fetch post blocks
  const blocks: BlockMapType = await getPostBlocksById(post?.id || "");

  return {
    ...post,
    blocks,
  };
};
