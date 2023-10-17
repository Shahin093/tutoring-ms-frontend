"use client";

import {
  useBookingsQuery,
  useDeleteBookingMutation,
} from "@/redux/api/bookingApi";
import { useDebounced } from "@/redux/hooks";
import { Button, message } from "antd";
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

const ManageBooking = () => {
  const query: Record<string, any> = {};
  const [deleteBooking] = useDeleteBookingMutation();

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const [serviceId, setServiceId] = useState<string>("");

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
  const { data, isLoading } = useBookingsQuery({ ...query });

  console.log("Booking data: ", data);

  const bookings = data?.bookings;
  console.log("bookings 53: ", bookings);
  const meta = data?.meta;

  const columns = [
    // {
    //   // title: "Name",
    //   dataIndex: "user.email",
    //   key: "email",
    //   render: (text: string) => text,
    // },
    // {
    //   title: "Slot Name",
    //   dataIndex: "user",
    //   key: "id",
    //   render: (item: any) => Object.keys(item)[6],
    // },

    {
      title: " Name",
      dataIndex: "user",
      key: "email",
      render: (user: any) => {
        const keys = Object.keys(user);
        const attributeName = keys[1]; // Assuming you want the 1th key
        return user[attributeName];
      },
    },

    {
      title: "student_type",
      dataIndex: "student_type",
    },

    {
      title: "Schedule",
      dataIndex: "schedule",
    },
    {
      title: "Duration",
      dataIndex: "category",
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
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/manage-booking/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/admin/manage-booking/edit/${data}`}>
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
                setServiceId(data);
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
      const res = await deleteBooking(id);
      if (res) {
        message.success("Service Successfully Deleted!");
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
      <h1>Manage Booking</h1>
      <TMSTable
        loading={isLoading}
        columns={columns}
        dataSource={bookings}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
        rowClassName={customRowClassName} // Provide the custom row class name function
      />

      <TMSModal
        title="Remove Booking"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteServiceHandler(serviceId)}
      >
        <p className="my-5">Do you want to remove this Booking?</p>
      </TMSModal>
    </div>
  );
};

export default ManageBooking;
