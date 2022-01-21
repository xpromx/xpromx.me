import React, { FC } from "react";
import { Layout, Bookmark, Title } from "@components";
import { getTable, NotionBookmark } from "@helpers/notion";
import { NOTION_BOOKMARK_ID } from "src/constants";

interface PageProps {
  bookmarks: NotionBookmark[];
}

const Page: FC<PageProps> = ({ bookmarks }) => {
  if (!bookmarks) {
    return <Layout.Loading title="Bookmarks" />;
  }
  return (
    <Layout title="Bookmarks">
      <Layout.Main>
        <Title>Bookmarks</Title>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.url} {...bookmark} />
        ))}
      </Layout.Main>
    </Layout>
  );
};

export async function getStaticProps() {
  const bookmarks = await getTable(NOTION_BOOKMARK_ID);
  return {
    props: {
      bookmarks,
    },
    revalidate: 1,
  };
}

export default Page;
