"use client";
import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  DoubleRightOutlined,
  AppstoreOutlined,
  DownSquareOutlined,
  UsergroupAddOutlined,
  BookOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/profile`}>My Profile</Link>,
      key: "/profile",
      icon: <ProfileOutlined />,
    },
    {
      label: <Link href={`/myBooking`}>My Booking</Link>,
      icon: <DoubleRightOutlined />,
      key: `/MyBooking`,
    },
    {
      label: <Link href={`/manage-feedback`}>Manage Feedback</Link>,
      icon: <DownSquareOutlined />,
      key: `/manage-feedback`,
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    // ...defaultSidebarItems,
    // ...commonAdminSidebarItems,
    {
      label: "Manage Service",
      key: "manage-service",
      icon: <CustomerServiceOutlined />,
      children: [
        {
          label: <Link href={`/${role}/service`}>All Services</Link>,
          key: `/${role}/service`,
        },
      ],
    },

    {
      label: "Manage booking",
      key: "manage-booking",
      icon: <BookOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-booking`}>Manage Booking</Link>,
          key: `/${role}/manage-booking`,
        },
      ],
    },
    {
      label: "Manage User",
      key: "manage-user",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
          key: `/${role}/manage-user`,
        },
      ],
    },
    {
      label: "Manage Content",
      key: "manage-content",
      icon: <FileTextOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-content`}>Manage User</Link>,
          key: `/${role}/manage-content`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    // ...defaultSidebarItems,
    // ...commonAdminSidebarItems,
    {
      label: "Manage Admin",
      key: "manage-admin",
      icon: <AppstoreOutlined />,   
      children: [
        {
          label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
          key: `/${role}/manage-admin`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [...defaultSidebarItems];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
