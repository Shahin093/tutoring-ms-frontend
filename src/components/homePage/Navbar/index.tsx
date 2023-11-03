"use client";
import { Menu, Row, Col, Input, Button, Layout, MenuProps, Drawer } from "antd";
import Link from "next/link";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { authKey } from "@/constants/storageKey";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  const router: any = useRouter();
  const currentRoute = router.pathname;
  useEffect(() => {
    setVisible(false);
  }, [currentRoute]);
  // Upto here

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const { role } = getUserInfo() as any;

  return (
    // <nav className="navbar">
    //   <Layout>
    //     <Layout.Header className="nav-header">
    //       <div className="logo">
    //         <Link href="/">
    //           <h3
    //             className="brand-font"
    //             style={{
    //               color: "white",
    //             }}
    //           >
    //             Tutor MS
    //           </h3>
    //         </Link>
    //       </div>
    //       <div className="navbar-menu">
    //         <div className="leftMenu">
    //           <LeftMenu mode={"horizontal"} />
    //         </div>
    //         <Button className="menuButton" type="text" onClick={showDrawer}>
    //           <MenuOutlined />
    //         </Button>
    //         <div className="rightMenu">
    //           <RightMenu mode={"horizontal"} />
    //         </div>

    //         <Drawer
    //           title={"Brand Here"}
    //           placement="right"
    //           closable={true}
    //           onClose={showDrawer}
    //           visible={visible}
    //           style={{ zIndex: 99999 }}
    //         >
    //           <LeftMenu mode={"inline"} />
    //           <RightMenu mode={"inline"} />
    //         </Drawer>
    //       </div>
    //     </Layout.Header>
    //   </Layout>
    // </nav>
    <div style={{ height: "10vh", marginTop: "30px" }}>
      <div
        style={{
          height: "60px",
          color: "black",
          paddingLeft: 12,
          paddingTop: 12,
        }}
        className="menuIcon"
      >
        <MenuOutlined
          onClick={() => {
            setOpenMenu(true);
          }}
          style={{
            color: "black",
            fontSize: 30,
          }}
        />
      </div>

      <span className="menuHeader">
        <AppMenu />
      </span>

      <Drawer
        placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "dark" }}
      >
        <AppMenu isInLine={true} />
      </Drawer>
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

  // Create a variable to hold the button
  let loginButton;

  if (role) {
    // If the user is logged in, show a "Logout" button
    loginButton = <span onClick={logOut}>Logout</span>;
  } else {
    // If the user is not logged in, show a "Login" button
    loginButton = <Link href="/login">Login</Link>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ fontSize: "30px" }}>Tutor MS</h2>
      </div>
      <Menu
        style={{
          // backgroundColor: "gray",
          color: "black",
          fontSize: 24,
          border: "none",
          display: "flex",
          justifyContent: "center",
          // position: "fixed",
        }}
        mode={isInLine ? "inline" : "horizontal"}
        items={[
          {
            label: <Link href="/">Home</Link>, // Wrap the label with Link and specify the target route
            key: "home",
          },

          {
            label: <Link href="/about">About Us</Link>, // Specify the target route for About Us
            key: "about",
          },
          {
            label: loginButton, // Specify the target route for Login
            key: "login",
          },
          {
            label: <Link href="/profile">Dashboard</Link>, // Specify the target route for Dashboard
            key: "profile",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default Navbar;
