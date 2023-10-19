"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import TMSBreadCrumb from "@/components/ui/TMSBreadCrumb";
import {
  serviceCategoryOptions,
  serviceScheduleOptions,
  serviceStatusOptions,
} from "@/constants/global";
import {
  useServiceQuery,
  useServicesQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import {
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { serviceSchema } from "@/schemas/service";
import { uploadImageToImgBB } from "@/utils/uploadImageWithImgBB";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Col, Row, Upload, message } from "antd";
import { useState } from "react";
import {
  useBookingQuery,
  useUpdateBookingMutation,
} from "@/redux/api/bookingApi";
import { useRouter } from "next/navigation";
type IDProps = {
  params: any;
};

const EditDepartmentPage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useBookingQuery(id);
  console.log("data", data);
  const [updateBooking] = useUpdateBookingMutation();

  //@ts-ignore

  const onSubmit = async (values: any) => {
    const data = { id, ...values };
    console.log("values : ", data);
    message.loading("Creating...");
    try {
      const res = await updateBooking(data);
      console.log("res ", res);
      if (!!res) {
        message.success("Booking updated successfully!");
        router.push("/admin/manage-booking");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    serviceName: data?.serviceName || "",
    serviceAuthor: data?.serviceAuthor || "",
    status: data?.status || "",
    schedule: data?.schedule || "",
    price: data?.price || "",
    location: data?.location || "",
    category: data?.category || "",
    description: data?.description || "",
    serviceCode: data?.serviceCode || "",
  };

  return (
    <div>
      <TMSBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin/manage-booking",
          },
        ]}
      />

      <ActionBar title="Update Booking"> </ActionBar>

      <div>
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          // resolver={yupResolver(serviceSchema)}
        >
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Booking Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="category"
                  options={serviceCategoryOptions}
                  label="category"
                  placeholder="Select"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="schedule"
                  options={serviceScheduleOptions}
                  label="schedule"
                  placeholder="Select"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="status"
                  options={serviceStatusOptions}
                  label="status"
                  placeholder="Select"
                />
              </Col>
            </Row>
          </div>

          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditDepartmentPage;
