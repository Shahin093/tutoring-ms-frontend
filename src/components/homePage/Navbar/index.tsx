"use client";
import { Menu, Row, Col, Input, Button, Layout, MenuProps } from "antd";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useState } from "react";
import { authKey } from "@/constants/storageKey";
const { Header: AntHeader } = Layout;

const Navbar = () => {
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const handleSearch = (value: string) => {
    // Implement your search logic here
    console.log("Searching for:", value);
  };

  const { role } = getUserInfo() as any;

  return (
    <div className="custom-navbar bg-slate-300">
      <Row justify="space-between" align="middle">
        <Col xs={6} md={4}>
          <div className="logo">TUTOR MS</div>
        </Col>
        <Col xs={18} md={20}>
          <Menu mode="horizontal">
            <Menu.Item
              key="home"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item
              key="home"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/">About</Link>
            </Menu.Item>
            <Menu.Item
              key="home"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item
              key="dashboard"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/profile">Dashboard</Link>
            </Menu.Item>


            <Menu.Item
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <Link href="/login">Login</Link>
              </Menu.Item>

            {/* {role ? (
              <Menu.Item
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <Button onClick={logOut} type="text" danger>
                  Logout
                </Button>
              </Menu.Item>
            ) : (
              <Menu.Item
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <Link href="/login">Login</Link>
              </Menu.Item>
            )} */}
            <Menu.Item
              style={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              <div>
                <Input
                  placeholder="Search..."
                  allowClear
                  suffix={
                    <Button
                      type="primary"
                      icon={<SearchOutlined />}
                      onClick={() => handleSearch("Your search query")}
                    />
                  }
                />
              </div>
            </Menu.Item>
            <Menu.Item
              key="dashboard"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/service-booking">BOOKING NOW</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
