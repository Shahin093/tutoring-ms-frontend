"use client";
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Space,
  Badge,
  Drawer,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useState } from "react";
const { Header: AntHeader } = Layout;

const Header = () => {
  // const [open, setOpen] = useState(false);

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

  // const router = useRouter();

  // const logOut = () => {
  //   removeUserInfo(authKey);
  //   router.push("/login");
  // };

  // const items: MenuProps["items"] = [
  //   {
  //     key: "0",
  //     label: (
  //       <Button onClick={logOut} type="text" danger>
  //         Logout
  //       </Button>
  //     ),
  //   },
  // ];
  // const { role } = getUserInfo() as any;
  return (
    <div></div>
    // <AntHeader
    //   style={{
    //     background: "#fff",
    //   }}
    // >
    //   <Row
    //     justify="end"
    //     align="middle"
    //     style={{
    //       height: "100%",
    //       gap: "5px",
    //     }}
    //   >
    //     <p
    //       style={{
    //         margin: "0px 5px",
    //       }}
    //     >
    //       {role}
    //     </p>

    //     <Dropdown menu={{ items }}>
    //       <a>
    //         <Space wrap size={16}>
    //           <Avatar size="large" icon={<UserOutlined />} />
    //         </Space>
    //       </a>
    //     </Dropdown>
    //     <a href="#" onClick={showDrawer}>
    //       <Badge count={5}>
    //         <Avatar shape="square" size="large" />
    //       </Badge>
    //     </a>
    //   </Row>

    //   <Drawer
    //     title="Basic Drawer"
    //     placement="right"
    //     onClose={onClose}
    //     open={open}
    //   >
    //     <p>Some contents...</p>
    //     <p>Some contents...</p>
    //     <p>Some contents...</p>
    //   </Drawer>
    // </AntHeader>
  );
};

export default Header;
