"use client";

import TMSModal from "@/components/ui/TMSModal";
import TMSTable from "@/components/ui/TMSTable";
import { useDeleteBookingMutation } from "@/redux/api/bookingApi";
import { useMyProfileQuery } from "@/redux/api/profileApi";
import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
  ReloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Descriptions,
  Row,
  Statistic,
  Tabs,
  message,
} from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const { TabPane } = Tabs;

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Association">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="Remarks">
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);

const MyBookingPage = () => {
  //@ts-ignore
  const { data, isLoading } = useMyProfileQuery(undefined);
  const [deleteBooking] = useDeleteBookingMutation();
  console.log("profile data: ", (data && data) || "");
  const [open, setOpen] = useState<boolean>(false);
  const [serviceId, setServiceId] = useState<string>("");
  const userData: any = data?.user;
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
  ];

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
      <TMSTable
        loading={isLoading}
        columns={columns}
        dataSource={data?.user}
        // pageSize={size}
        // totalPages={meta?.total}
        showSizeChanger={true}
        // onPaginationChange={onPaginationChange}
        // onTableChange={onTableChange}
        showPagination={true}
        rowClassName={customRowClassName} // Provide the custom row class name function
      />

      <div>
        <h2>Review and Remove Booking</h2>
        <Row gutter={16}>
          {data &&
            data?.user.map((userData: any, index: number) => (
              <Col key={index} span={8}>
                <Card style={{ margin: "13px" }}>
                  <div className="testimonials-container-profile">
                    <Button
                      type="primary"
                      onClick={() => {
                        setOpen(true);
                        setServiceId(userData?.service?.id);
                      }}
                      danger
                      style={{ marginLeft: "3px" }}
                    >
                      <DeleteOutlined />
                    </Button>

                    <Button
                      type="primary"
                      onClick={() => {
                        // setOpen(true);
                        setServiceId(userData?.id);
                      }}
                      danger
                      style={{ marginLeft: "3px" }}
                    >
                      Review
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>

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

export default MyBookingPage;
