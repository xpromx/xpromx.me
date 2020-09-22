import React from "react";
import { Layout, icons, Icon, IconType } from "@components";

const Page = () => {
  return (
    <Layout title="Home">
      <Layout.Main>
        <h1 className="text-5xl mb-10">Icons</h1>
        {Object.keys(icons).map((icon) => (
          <div key={icon} className="flex items-center mb-6">
            <Icon icon={icon as IconType} className="mr-4" /> {icon}
          </div>
        ))}
      </Layout.Main>
    </Layout>
  );
};

export default Page;
