"use client";
import { Card, Row, Col, Button } from "antd";

const testimonials = [
  { name: "Jane Smith", content: "I love using Next.js with Ant Design." },
  { name: "Jane Smith", content: "I love using Next.js with Ant Design." },
  //   { name: "Jane Smith", content: "I love using Next.js with Ant Design." },
  // Add more testimonials here
];

const OurSuccess = () => {
  return (
    <div style={{ margin: "16px", marginBottom: "100px" }}>
      <Row
        justify="center"
        align="middle"
        gutter={16}
        style={{ marginBottom: "20px", padding: "30px" }}
      >
        <Col span={12}>
          <div className="">
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "21px",
              }}
            >
              Stats that explain everything about #Our success
            </h1>
          </div>
        </Col>
        <Col span={12}>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Button type="primary" shape="round" size="large">
              See How It Works
            </Button>
            {/* {testimonial.content} */}
          </div>
        </Col>
      </Row>
      <Row
        gutter={16}
        justify="center"
        align="middle"
        // style={{ backgroundColor: "#fff1f0" }}
      >
        <Col span={12}>
          <Card style={{ margin: "3px" }}>
            <div>
              <Row
                justify="center"
                align="middle"
                gutter={16}
                style={{ marginBottom: "5px", padding: "3px" }}
              >
                <Col span={12}>
                  <div className="">
                    <img
                      alt="service-image"
                      src="https://demos.wp-guppy.com/tuturn/wp-content/uploads/2022/05/Placeholder-4-100x100.png"
                      style={{
                        //   width: "90%",
                        //   height: "50%",
                        justifyContent: "center",
                        justifyItems: "center",
                        marginLeft: "15px",
                      }}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    className=""
                    style={{
                      //   display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      justifyItems: "center",
                    }}
                  >
                    <h1>560,616</h1>
                    <p>Courses available for verified and top tutors</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{ margin: "3px" }}>
            <div>
              <Row
                justify="center"
                align="middle"
                gutter={16}
                style={{ marginBottom: "5px", padding: "3px" }}
              >
                <Col span={12}>
                  <div className="">
                    <img
                      alt="service-image"
                      src="https://demos.wp-guppy.com/tuturn/wp-content/uploads/2022/05/Placeholder-1-2-100x100.png"
                      style={{
                        //   width: "90%",
                        //   height: "50%",
                        justifyContent: "center",
                        justifyItems: "center",
                        marginLeft: "15px",
                      }}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    className=""
                    style={{
                      //   display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      justifyItems: "center",
                    }}
                  >
                    <h1>760,616</h1>
                    <p>Total tuition job posted on the platform till date</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{ margin: "3px" }}>
            <div>
              <Row
                justify="center"
                align="middle"
                gutter={16}
                style={{ marginBottom: "5px", padding: "3px" }}
              >
                <Col span={12}>
                  <div className="">
                    <img
                      alt="service-image"
                      src="https://demos.wp-guppy.com/tuturn/wp-content/uploads/2022/05/Placeholder-2-1-100x100.png"
                      style={{
                        justifyContent: "center",
                        justifyItems: "center",
                        marginLeft: "15px",
                      }}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    className=""
                    style={{
                      //   display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      justifyItems: "center",
                    }}
                  >
                    <h1>20+ Hours</h1>
                    <p>User daily average time spent on the platform</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card style={{ margin: "10px" }}>
            <div>
              <Row
                justify="center"
                align="middle"
                gutter={16}
                style={{ marginBottom: "5px", padding: "3px" }}
              >
                <Col span={12}>
                  <div className="">
                    <img
                      alt="service-image"
                      src="https://demos.wp-guppy.com/tuturn/wp-content/uploads/2022/05/Placeholder-3-1-100x100.png"
                      style={{
                        //   width: "90%",
                        //   height: "50%",
                        justifyContent: "center",
                        justifyItems: "center",
                        marginLeft: "15px",
                      }}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    className=""
                    style={{
                      //   display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      justifyItems: "center",
                    }}
                  >
                    <h1>7+ Millions</h1>
                    <p>
                      Active instructor and students available on the platform
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OurSuccess;
