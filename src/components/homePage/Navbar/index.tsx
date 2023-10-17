"use client";
import { Menu, Row, Col, Avatar, Input, Button } from "antd";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";

const Navbar = () => {
  const handleSearch = (value: string) => {
    // Implement your search logic here
    console.log("Searching for:", value);
  };

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
              key="dashboard"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/profile">Dashboard</Link>
            </Menu.Item>
            <Menu.Item
              key="about"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/about">About</Link>
            </Menu.Item>
            <Menu.Item
              key="about"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/about"></Link>
            </Menu.Item>
            <Menu.Item
              key="signup"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/signup">Sign Up</Link>
            </Menu.Item>
            <Menu.Item
              key="login"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Link href="/login">Login</Link>
            </Menu.Item>
            <Menu.Item
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Avatar size={64} src="your-image-url.jpg" alt="Your Name" />
            </Menu.Item>
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

            <Menu.Item>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <Button
                  type="primary"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  BOOKING NOW
                </Button>
              </div>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
