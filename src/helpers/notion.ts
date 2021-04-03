import { BlockMapType } from "react-notion";
import { NotionAPI } from "notion-client";

export interface NotionPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  blocks?: BlockMapType;
  published: boolean;
}

export interface NotionPage {
  id: string;
  [k: string]: string | number | boolean;
}

export const getTable = async <T = NotionPage>(
  pageId: string
): Promise<T[]> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${pageId}`
  ).then((res) => res.json());
};

export const getPageById = async (
  pageId: string
): Promise<ReturnType<NotionAPI["getPage"]>> => {
  const api = new NotionAPI();
  return api.getPage(pageId);
};
