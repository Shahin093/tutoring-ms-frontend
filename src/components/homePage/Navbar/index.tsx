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

      {/* <Drawer
        placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "dark" }}
      >
        <AppMenu isInLine={true} />
      </Drawer>  */}
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
        <Link href="/">
          <h2 style={{ fontSize: "30px" }}>Tutor</h2>
        </Link>
      </div>
      <Menu
        style={{
          color: "black",
          fontSize: 24,
          border: "none",
          display: "flex",
          justifyContent: "center",
        }}
        mode={isInLine ? "inline" : "horizontal"}
        items={[
          // {
          //   label: <Link href="/">Home</Link>, // Wrap the label with Link and specify the target route
          //   key: "home",
          // },

          {
            label: loginButton, // Specify the target route for Login
            key: "login",
          },
          {
            label: <Link href="/profile">Dashboard</Link>, // Specify the target route for Dashboard
            key: "profile",
          },
          {
            label: (
              <Link href="/service-booking">
                <Button type="primary" shape="round" size="large">
                  Booking
                </Button>
              </Link>
            ), // Specify the target route for About Us
            key: "booking",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default Navbar;
