"use client";
import { Button, Menu } from "antd";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.service";

const LeftMenu = ({ mode }: any) => {
  const { role } = getUserInfo() as any;
  return (
    <Menu mode={mode}>
      <Menu.Item key="blog">
        <Link href="/blog">Blog</Link>
      </Menu.Item>

      <Menu.Item key="dashboard">
        <Link href="/profile">Dashboard</Link>
      </Menu.Item>

      <Menu.Item key="contact">
        <Link href="/login">Login</Link>
      </Menu.Item>

      <Menu.Item
        key="dashboard"
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          // backgroundColor: "green",
        }}
      >
        <Link href="/service-booking">
          <Button type="primary" shape="round" size="large">
            Booking Now
          </Button>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
