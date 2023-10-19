"use client";

import {
  useBookingsQuery,
  useDeleteBookingMutation,
} from "@/redux/api/bookingApi";
import { useDebounced } from "@/redux/hooks";
import { Button, message, Avatar, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  ReloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import TMSTable from "@/components/ui/TMSTable";
import TMSModal from "@/components/ui/TMSModal";
import { global } from "styled-jsx/css";
import { useDeleteUserMutation, useUsersQuery } from "@/redux/api/user.Api";
import ActionBar from "@/components/ui/ActionBar";

const ManageUser = () => {
  const query: Record<string, any> = {};
  const [deleteUser] = useDeleteUserMutation();

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useUsersQuery({ ...query });

  console.log("users data: ", data);

  const users = data?.users;
  console.log("bookings 55: ", users);
  const meta = data?.meta;

  const columns = [
    {
      // title: "Avatar",
      dataIndex: "profileImg", // Assuming 'avatar' is the property containing the image URL
      render: (avatar: string) => <Avatar src={avatar} />,
    },
    {
      title: " Name",
      dataIndex: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Address",
      dataIndex: "address",
    },

    {
      title: "ContactNo",
      dataIndex: "contactNo",
    },

    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },

    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/manage-user/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                setUserId(data);
              }}
              danger
              style={{ marginLeft: "3px" }}
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const deleteServiceHandler = async (id: string) => {
    // console.log(id);
    try {
      const res = await deleteUser(id);
      if (res) {
        message.success("User Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const customRowClassName = (record: any, index: any) => {
    // You can implement your custom logic here to determine the row class name
    if (record.someCondition) {
      return "custom-row-class1";
    } else {
      return "custom-row-class2";
    }
  };
  return (
    <div>
      <ActionBar title="Manage All Users">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>
          <Link href="/admin/manage-user/create">
            <Button type="primary">Create User</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <TMSTable
        loading={isLoading}
        columns={columns}
        dataSource={users}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        rowClassName={customRowClassName} // Provide the custom row class name function
      />

      <TMSModal
        title="Remove User"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteServiceHandler(userId)}
      >
        <p className="my-5">Do you want to remove this User?</p>
      </TMSModal>
    </div>
  );
};

export default ManageUser;
