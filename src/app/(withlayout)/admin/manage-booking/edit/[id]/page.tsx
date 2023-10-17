"use client";
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
import { useBookingQuery } from "@/redux/api/bookingApi";
import { serviceSchema } from "@/schemas/service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Form, Row, message } from "antd";
import React from "react";

type IDProps = {
  params: any;
};

const BookingUpdatePage = ({ params }: IDProps) => {
  //     id

  //   userId
  //   user

  //   serviceid

  //   service

  //   category

  //   schedule
  //   status
  //   student_type
  const { id } = params;

  const { data, isLoading } = useBookingQuery(id);

  const onSubmit = async (values: any) => {
    console.log("values : ", values);
    message.loading("Creating...");
    try {
      //   const res = await updateService(data);
      //   console.log("res ", res);
      //   if (!!res) {
      //     message.success("Service updated successfully!");
      // }
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
            label: "manage-booking",
            link: "/admin/manage-booking",
          },
        ]}
      />

      <ActionBar title="Update Service"> </ActionBar>

      <div>
        <Form
          submitHandler={onSubmit}
          defaultValues={defaultValues}
          resolver={yupResolver(serviceSchema)}
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
              Service Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="serviceName"
                  size="large"
                  label="Service Name"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="serviceCode"
                  size="large"
                  label="service Code"
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
                <FormInput
                  type="text"
                  name="serviceAuthor"
                  size="large"
                  label="service Author"
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea name="description" label="Description" rows={4} />
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

export default BookingUpdatePage;
