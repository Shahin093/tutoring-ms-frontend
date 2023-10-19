"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import TMSBreadCrumb from "@/components/ui/TMSBreadCrumb";
import {
  serviceCategoryOptions,
  serviceScheduleOptions,
  serviceStatusOptions,
} from "@/constants/global";
import {
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useAddServiceDataMutation } from "@/redux/api/serviceApi";

import { Button, Col, Row, Upload, message } from "antd";
import { useState } from "react";
import { uploadImageToImgBB } from "@/utils/uploadImageWithImgBB";
import { serviceSchema } from "@/schemas/service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const CreateServicePage = () => {
  const [addServiceData] = useAddServiceDataMutation();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const beforeUpload = (file: File) => {
    // You can add validation logic here if needed.
    return true;
  };

  const handleUpload = async (file: File) => {
    const imageUrl = await uploadImageToImgBB(file);
    if (imageUrl) {
      setImageUrl(imageUrl);
      message.success("Image uploaded successfully!");
    } else {
      message.error("Failed to upload image.");
    }
  };
  //@ts-ignore

  const onSubmit = async (values: any) => {
    console.log("values : ", values);
    const data = { service_image: imageUrl, ...values };
    message.loading("Creating...");
    try {
      const res = await addServiceData(data);
      console.log("res ", res);
      if (!!res) {
        message.success("Service created successfully!");
        router.push("/admin/service");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <div>
      <TMSBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin/service",
          },
        ]}
      />
      <h1>Service Create </h1>

      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
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
                  type="number"
                  name="price"
                  size="large"
                  label="Price"
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

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea name="location" label="Location" rows={4} />
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

              <Col sm={12} md={16} lg={10}>
                <div className="flex" style={{ maxWidth: "20%" }}>
                  <Upload
                    name="avatar"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    beforeUpload={beforeUpload}
                    customRequest={async ({ file }) => {
                      //@ts-ignore
                      await handleUpload(file);
                    }}
                  >
                    {/* <Button icon={<UploadOutlined />}>Upload Image</Button> */}
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: "100%" }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </div>
              </Col>
            </Row>
          </div>

          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateServicePage;
