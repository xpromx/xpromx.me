import React, { FC } from "react";
import Link from "next/link";
import { NotionPage } from "@helpers/notion";
import styles from "./Post.module.css";

interface PostProps {
  fragment: NotionPage;
}

export const Post = ({ fragment }: PostProps) => {
  const { title, description, category, slug } = fragment;
  return (
    <Link href={`/blog/${slug}`}>
      <article className={styles.root}>
        <div className={styles.category}>{category}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </article>
    </Link>
  );
};
