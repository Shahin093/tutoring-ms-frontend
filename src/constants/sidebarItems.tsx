import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/myBooking`}>My Booking</Link>,
          key: `/MyBooking`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
    },
    {
      label: <Link href={`/manage-feedback`}>Manage Feedback</Link>,
      icon: <TableOutlined />,
      key: `/manage-feedback`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage Service",
      key: "manage-service",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/service`}>All Services</Link>,
          key: `/${role}/service`,
        },
      ],
    },
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
    {
      label: "Manage booking",
      key: "manage-booking",
      icon: <AppstoreOutlined />,
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
      icon: <AppstoreOutlined />,
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
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/manage-content`}>Manage User</Link>,
          key: `/${role}/manage-content`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
    },
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined />,
      key: `/${role}/courses`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
