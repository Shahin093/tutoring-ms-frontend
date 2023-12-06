"use client";
import {
  Menu,
  Row,
  Col,
  Input,
  Button,
  Layout,
  MenuProps,
  Drawer,
  Anchor,
} from "antd";
// import Link from "next/link";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { authKey } from "@/constants/storageKey";
import { CloseOutlined, UnorderedListOutlined } from "@ant-design/icons";
const { Link } = Anchor;
const Navbar = () => {
  const router: any = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const { role } = getUserInfo() as any;
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">Tutor MS</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset={65} style={{ marginLeft: "5px" }}>
            <Button size="large">
              <Link href="/" title="Home" />
            </Button>

            <Button size="large">
              <Link href="/blog" title="Blog" />
            </Button>

            <Button size="large">
              <Link href="/profile" title="Dashboard" />
            </Button>

            <Button
              style={{ color: "white" }}
              type="primary"
              shape="round"
              size="large"
              color="white"
            >
              <Link href="/service-booking" title=" Booking Now   " />
            </Button>

            {role ? (
              <Button style={{ color: "white" }} size="large" onClick={logOut}>
                LogOut
              </Button>
            ) : (
              <Button size="large">
                <Link href="/login" title="Login" />
              </Button>
            )}
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset={65}>
              <Link href="/blog" title="Blog" />
              <Link href="/service-booking" title="Booking " />
              <Link href="/profile" title="Dashboard" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
