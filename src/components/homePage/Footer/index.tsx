"use client";
import { Layout, Typography, Space } from "antd";
import {
  TwitterOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text } = Typography;

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group, groupIndex) => {
    const links = group.links.map((link, linkIndex) => (
      <Text key={linkIndex}>
        <a
          href={link.link}
          onClick={(event) => event.preventDefault()}
          style={{ textDecoration: "none" }} // Example inline style
        >
          {link.label}
        </a>
      </Text>
    ));

    return (
      <div key={groupIndex}>
        <Text strong>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <Footer style={{ textAlign: "center" }}>
      <div>
        <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
          Build fully functional accessible web applications faster than ever
        </Text>
      </div>
      <div>{groups}</div>
      <div>
        <Text type="secondary" style={{ fontSize: "12px" }}>
          © 2023 mantine.dev. All rights reserved.
        </Text>
        <Space>
          <a href="#">
            <TwitterOutlined
              style={{ fontSize: "18px", borderWidth: "1.5px" }}
            />
          </a>
          <a href="#">
            <YoutubeOutlined
              style={{ fontSize: "18px", borderWidth: "1.5px" }}
            />
          </a>
          <a href="#">
            <InstagramOutlined
              style={{ fontSize: "18px", borderWidth: "1.5px" }}
            />
          </a>
        </Space>
      </div>
    </Footer>
  );
}
