import React, { FC } from "react";

interface PostProps {
  title: string;
  url: string;
  tags: string[];
}

const Tag: FC = ({ children }) => {
  return (
    <div
      style={{ fontSize: "11px" }}
      className="text-gray-600 leading-none bg-gray-300 dark:bg-gray-200 uppercase rounded-full px-2 py-1 mr-2"
    >
      {children}
    </div>
  );
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
};

export const Bookmark: FC<PostProps> = ({ title, url, tags }) => {
  return (
    <article className="mb-4 border-b border-gray-400 dark:border-gray-100 pb-4 flex items-center">
      <Icon />
      <div className="flex flex-wrap ml-4">
        <h2 className="text-base leading-8 mb-1 hover:underline ">
          <div className="mr-4">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer flex items-center"
            >
              {title}
            </a>
          </div>
        </h2>
        <div className="flex items-center w-full">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
};
