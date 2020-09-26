import React, { FC } from "react";
import Link from "next/link";

interface PostProps {
  title: string;
  category: string;
  slug: string;
  description: string;
}

export const Post: FC<PostProps> = ({ title, category, description, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="mb-12">
          <div className="text-gray-600 text-sm uppercase">{category}</div>
          <h2 className="text-2xl leading-8 font-medium mb-1 hover:underline">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
        </article>
      </a>
    </Link>
  );
};
