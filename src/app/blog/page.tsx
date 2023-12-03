"use client";
import { useContentsQuery } from "@/redux/api/contentApi";
import { Collapse, CollapseProps, Row } from "antd";

const BlogPage = () => {
  const { data } = useContentsQuery(undefined || null);

  const items: CollapseProps["items"] =
    data &&
    data.map((content: any) => ({
      key: `${content.id}`,
      label: <h5>{content.title}</h5>,
      children: <p>{content.description}</p>,
    }));

 
  return (
    <div style={{ margin: "50px 50px" }}>
      <Collapse size="large" items={items} />
    </div>
  );
};

export default BlogPage;
