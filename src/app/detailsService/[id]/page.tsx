"use client";

import { useAddBookingDataMutation } from "@/redux/api/bookingApi";
import { useServiceQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Layout, Row, Space, message } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  //   textAlign: "center",
  minHeight: 120,
  lineHeight: "40px",
  color: "#fff",
  alignItems: "center",
  //   backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "60px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

type IDProps = {
  params: any;
};

const ServiceDetailPage = ({ params }: IDProps) => {
  const user = getUserInfo() as any;
  const { id } = params;
  const { data, isLoading } = useServiceQuery(id);
  const [addBookingData] = useAddBookingDataMutation();

  console.log("datas", data);

  const bookingData = {
    userId: user?.userId,
    serviceid: id,
    category: data?.category,
    schedule: data?.schedule,
  };

  const isBooking = data?.service?.filter(
    (booking: any) => booking.userId === user?.userId
  );
  console.log("is Booking ", isBooking);

  const bookingCreate = async () => {
    const data = bookingData;
    const res = await addBookingData(data);
    console.log("res data : ", res);
    message.loading("Creating...");

    if (!!res) {
      message.success("Booking Created successfully");
    }
  };
  console.log("data.", bookingData);
  return (
    <div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Layout>
          {/* <Header style={headerStyle}>Header</Header> */}
          <Layout hasSider>
            <Content style={contentStyle}>
              <Row justify={"center"}>
                <Col
                  span={18}
                  push={6}
                  style={{
                    color: "black",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      marginLeft: "20px",
                    }}
                  >
                    <h2>{data?.serviceName}</h2>
                    <p>{data?.description}</p>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <Col className="gutter-row" span={4}>
                        <div>{data?.schedule}</div>
                      </Col>
                      <Col className="gutter-row" span={4}>
                        <div>{data?.price} $</div>
                      </Col>
                      <Col className="gutter-row" span={4}>
                        <div>{data?.location}</div>
                      </Col>
                      <Col className="gutter-row" span={4}>
                        <div>{data?.status}</div>
                      </Col>
                      <Col className="gutter-row" span={4}>
                        <div>{data?.serviceCode}</div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col
                  span={6}
                  pull={18}
                  style={
                    {
                      // paddingLeft: "10px",
                    }
                  }
                >
                  <img
                    src={data?.service_image}
                    width="100%"
                    height="100%"
                    alt="ds"
                  />
                </Col>
              </Row>
            </Content>
            <Sider style={siderStyle}>
              <Button
                disabled={isBooking && isBooking.length !== 0}
                onClick={bookingCreate}
              >
                BOOKING NOW
              </Button>
              {isBooking && isBooking.length !== 0 && (
                <p>Already Enrolled this Service.</p>
              )}
            </Sider>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
