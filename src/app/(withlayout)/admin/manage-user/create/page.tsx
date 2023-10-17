"use client";
import { Button, Col, Input, Row, Upload, message } from "antd";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { uploadImageToImgBB } from "@/utils/uploadImageWithImgBB";
import {
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { registrationSchema } from "@/schemas/registration";
import { useUserSignupMutation } from "@/redux/api/user.Api";
import Image from "next/image";
import registrationImage from "../../../../../assets/Secure login.gif";
import TMSBreadCrumb from "@/components/ui/TMSBreadCrumb";

type FormValues = {
  id: string;
  password: string;
};

const Registration = () => {
  // const [imageUrl, setImageUrl] = useState<string | undefined>();

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

  // {
  //   "name": "emy1",
  //   "email": "sishahin093@gmail.com",
  //   "password": "103511",
  //   "role": "admin",
  //   "contactNo": "0177777778",
  //   "address": "CTG",
  // "profileImg":"limk"
  // }

  console.log("imageUrl", imageUrl);

  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    const registrationData = { profileImg: imageUrl, ...data };
    console.log({ ...registrationData });
    try {
      const res = await userSignup({ ...registrationData });
      console.log("res: ", res);
      if (res) {
        router.push("/admin/manage-user");
        message.success("User Sign up  successfully!");
      }

      console.log({ imageUrl, ...data });
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
            label: "Manage-user",
            link: "/admin/manage-user",
          },
        ]}
      />
      <div
        style={{
          background: "#e6fffb",
          border: "radius",
          padding: "20px",
        }}
      >
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(registrationSchema)}
        >
          <h2
            style={{
              fontSize: "20px",
            }}
          >
            User Creating{" "}
          </h2>
          <Row
            justify="center"
            align="middle"
            style={{
              minHeight: "40vh",
              gap: "10px",
              background: "#d9d9d9",
              padding: "10px",
            }}
          >
            <Col sm={12} md={16} lg={10}>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  label="User Name"
                  required
                />
              </div>
            </Col>

            <Col sm={12} md={16} lg={10}>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="User Email"
                  required
                />
              </div>
            </Col>

            <Col sm={12} md={16} lg={10}>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                  required
                />
              </div>
            </Col>

            <Col sm={12} md={16} lg={10}>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="contactNo"
                  type="text"
                  size="large"
                  label="User Contact No"
                  required
                />
              </div>
            </Col>

            <Col sm={12} md={16} lg={10}>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="address"
                  type="text"
                  size="large"
                  label="User Address"
                  required
                />
              </div>
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

            <Col sm={12} md={16} lg={32}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
