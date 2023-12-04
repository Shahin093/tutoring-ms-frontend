import { Col, Row } from "antd";

const MyStory = () => {
  return (
    <div
      style={{
        marginTop: "70px",
        marginBottom: "150px",
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "20vh",
        }}
      >
        <Col sm={12} md={16} lg={8}>
          <img
            src="https://studeon.axiomthemes.com/wp-content/uploads/2017/02/post-6-1170x658.jpg"
            alt=""
            width={400}
            style={{ height: "400px" }}
          />
        </Col>
        <Col sm={12} md={8} lg={12}>
          <h1
            style={{
              fontSize: "25px",
            }}
          >
            My Story
          </h1>
          <span
            style={{
              margin: "20px 0px",
              minHeight: "20vh",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisr sit
            amet, consectetur adipisicing magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laborisr sit amet, consectetur
          </span>
          <span
            style={{
              marginTop: "20px",
              minHeight: "20vh",
            }}
          >
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation .labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
          </span>

          <Row
            justify="center"
            align="middle"
            style={{
              minHeight: "40vh",
            }}
          >
            <Col
              span={12}
              md={16}
              lg={8}
              style={{ display: "flex", margin: "0px 0px" }}
            >
              <img
                src="https://tutor.foxthemes.me/wp-content/themes/tutorpro/assets/images/iconset/tutor/vector.png"
                alt=""
                width={60}
              />
              <div
                style={{
                  margin: "4px",
                }}
              >
                <h1
                  style={{
                    //   margin: "15px 0px",
                    fontSize: "14px",
                  }}
                >
                  12international
                </h1>
                <br />
                <span>certificats</span>
              </div>
            </Col>
            <Col
              span={12}
              md={16}
              lg={8}
              style={{ display: "flex", margin: "8px 0px" }}
            >
              <img
                src="https://tutor.foxthemes.me/wp-content/uploads/2016/11/icon-8.png"
                alt=""
                width={60}
              />
              <div
                style={{
                  margin: "4px",
                }}
              >
                <h1
                  style={{
                    //   margin: "15px 0px",
                    fontSize: "14px",
                  }}
                >
                  15 years of
                </h1>{" "}
                <br />
                <span>experience</span>
              </div>
            </Col>
            <Col
              span={12}
              md={16}
              lg={8}
              style={{ display: "flex", margin: "8px 0px" }}
            >
              <img
                src="https://tutor.foxthemes.me/wp-content/uploads/2016/11/icon-9.png"
                alt=""
                width={60}
              />
              <div
                style={{
                  margin: "4px",
                }}
              >
                <h1
                  style={{
                    //   margin: "15px 0px",
                    fontSize: "14px",
                  }}
                >
                  451 educated
                </h1>
                <br />
                <span>children</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default MyStory;
