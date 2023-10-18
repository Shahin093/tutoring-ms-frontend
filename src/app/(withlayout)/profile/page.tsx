"use client";
import { useMyProfileQuery } from "@/redux/api/profileApi";
import { IService } from "@/types";
import { Button, Col, Row, Card } from "antd";
import { Image } from "antd";
import Link from "next/link";

const testimonials = [
  { name: "Jane Smith", content: "I love using Next.js with Ant Design." },
  { name: "Jane Smith", content: "I love using Next.js with Ant Design." },
  { name: "Jane Smith", content: "I love using Next.js with Ant Design." },
  // Add more testimonials here
];

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
            <Image width={200} src={(data && data?.profileImg) || ""} />
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
          <h4> {(data && data?.name) || ""}</h4>
          <h4>{(data && data?.email) || ""}</h4>
          <h4>{(data && data?.address) || ""}</h4>
          <h4>{(data && data?.contactNo) || ""}</h4>
        </Col>
        <Link href={`/profileEdit/${data?.id}`}>
          {" "}
          <Button type="primary">Update Profile</Button>
        </Link>
      </Row>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <h2>My Booking Services</h2>
        <Row gutter={16}>
          {data &&
            data?.user.map((bookingService: any, index: number) => (
              <Col key={index} span={8}>
                <Card style={{ margin: "13px" }}>
                  <div className="testimonials-container-profile">
                    <h1>{bookingService?.service?.serviceName}</h1>
                    {bookingService?.status}
                    <p>{bookingService?.schedule}</p>
                    <p>{bookingService?.category}</p>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default ProfilePage;
