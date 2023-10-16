"use client";
import { useMyProfileQuery } from "@/redux/api/profileApi";
import { Button, Col, Row } from "antd";
import { Image } from "antd";

const ProfilePage = () => {
  //@ts-ignore
  const { data, isLoading } = useMyProfileQuery(undefined || null);
  console.log("profile data: ", (data && data) || "");
  return (
    <div>
      <h1>Welcome back to your profile</h1>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "20vh",
        }}
      >
        <Col sm={12} md={16} lg={8}>
          <Image.PreviewGroup
            items={[
              (data && data?.data?.profileImg) || "",
              (data && data?.data?.profileImg) || "",
            ]}
          >
            <Image width={200} src={(data && data?.data?.profileImg) || ""} />
          </Image.PreviewGroup>
        </Col>
        <Col sm={12} md={16} lg={8}>
          <h1
            style={{
              margin: "15px 0px",
            }}
          >
            your account
          </h1>
          <span>Welcome to my tutoring management system.</span>
          <h4> {(data && data?.data?.name) || ""}</h4>
          <h4>{(data && data?.data?.email) || ""}</h4>
          <h4>{(data && data?.data?.address) || ""}</h4>
          <h4>{(data && data?.data?.contactNo) || ""}</h4>
        </Col>
        <Button type="primary">Update Profile</Button>
      </Row>
    </div>
  );
};

export default ProfilePage;
