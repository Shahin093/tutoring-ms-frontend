"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import ActionBar from "@/components/ui/ActionBar";
import TMSBreadCrumb from "@/components/ui/TMSBreadCrumb";
import { useUpdateUserMutation, useUserQuery } from "@/redux/api/user.Api";
import { Button, Col, Row, Upload, message } from "antd";
import { useState } from "react";
import { uploadImageToImgBB } from "@/utils/uploadImageWithImgBB";
import { useUpdateAdminMutation } from "@/redux/api/adminApi";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};
const ProfileEditPage = ({ params }: IDProps) => {
  const { id } = params;
  const router = useRouter();

  const { data, isLoading } = useUserQuery(id);
  console.log("data", data);
  const [updateUser] = useUpdateAdminMutation();

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
    const data = { id, ...values };
    console.log("values : ", data);
    message.loading("Creating...");
    try {
      const res = await updateUser(data);
      console.log("res ", res);
      if (!!res) {
        message.success("admin updated successfully!");
        router.push("/admin/manage-admin");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    name: data?.name || "",
    email: data?.email || "",
    contactNo: data?.contactNo || "",
    address: data?.address || "",
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
            label: "manage-admin",
            link: "/admin/manage-admin",
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
              admin creating
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="name" size="large" label="Name" />
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
                  name="email"
                  size="large"
                  label="Email"
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
                  name="contactNo"
                  size="large"
                  label="Contact No"
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
                  name="address"
                  size="large"
                  label="Contact No"
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

          <Button type="primary" htmlType="submit">
            Update Admin
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProfileEditPage;
