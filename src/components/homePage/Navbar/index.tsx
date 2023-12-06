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

function AppMenu({ isInLine = false }) {
  const { role } = getUserInfo() as any;
  const router: any = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  let loginButton;

  // if (role) {
  //   loginButton = <span onClick={logOut}>Logout</span>;
  // } else {
  //   loginButton = <Link href="/login">Login</Link>;
  // }
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <div>
    //     <Link href="/">
    //       <h2 style={{ fontSize: "30px" }}>Tutor</h2>
    //     </Link>
    //   </div>
    //   <Menu
    //     style={{
    //       color: "black",
    //       fontSize: 24,
    //       border: "none",
    //       display: "flex",
    //       justifyContent: "center",
    //     }}
    //     mode={isInLine ? "inline" : "horizontal"}
    //     items={[
    //       {
    //         label: loginButton,
    //         key: "login",
    //       },
    //       {
    //         label: <Link href="/profile">Dashboard</Link>,
    //         key: "profile",
    //       },
    //       {
    //         label: (
    //           <Link href="/service-booking">
    //             <Button type="primary" shape="round" size="large">
    //               Booking
    //             </Button>
    //           </Link>
    //         ),
    //         key: "booking",
    //       },
    //     ]}
    //   ></Menu>
    // </div>
    <div></div>
  );
}

export default Navbar;
