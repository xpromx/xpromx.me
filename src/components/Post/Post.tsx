import React, { FC } from "react";
import Link from "next/link";
import { NotionPage } from "@helpers/notion";

interface PostProps {
  fragment: NotionPage
}

export const Post = ({ fragment }: PostProps) => {
  const { title, description, category, slug } = fragment;
  return (
    <Link href={`/blog/${slug}`}>
      <article className="mb-12">
        <div className="text-gray-600 text-sm uppercase">{category}</div>
        <h2 className="text-2xl leading-8 font-medium mb-1 hover:underline">
          {title}
        </h2>
        <p className="text-gray-600">{description}</p>
      </article>
    </Link>
  );
};
