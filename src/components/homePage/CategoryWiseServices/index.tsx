"use client";
import { useServiceCategoryQuery } from "@/redux/api/serviceApi";
import { Card, Col, Row } from "antd";

const { Meta } = Card;
const CategoryWiseServices = () => {
  const { data } = useServiceCategoryQuery(undefined);
  const banglaCategory =
    data &&
    data?.filter(
      (categoryData: any) => categoryData.serviceName === "Bangla"
    )[0];
  const englishCategory =
    data &&
    data?.filter(
      (categoryData: any) => categoryData.serviceName === "English"
    )[0];
  const mathCategory =
    data &&
    data?.filter((categoryData: any) => categoryData.serviceName === "Math")[0];

  console.log("datbangla Categorya: ", banglaCategory);
  console.log(" english Category: ", englishCategory);
  console.log("  math Category: ", mathCategory);
  return (
    <div
      style={{
        marginTop: "80px",
        marginBottom: "80px",
        backgroundColor: "#fff1f0",
        height: "600px",
      }}
    >
      <Row
        gutter={16}
        justify="center"
        style={{
          padding: "35px",
        }}
      >
        <Col span={8}>
          <Card
            title="Bangla Specialize"
            bordered={false}
            style={{
              backgroundColor: "#fff1f0",
            }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt="service-image"
                  src={
                    banglaCategory?.service_image ||
                    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  }
                  style={{
                    width: "90%",
                    height: "50%",
                    justifyContent: "center",
                    justifyItems: "center",
                    marginLeft: "15px",
                  }}
                />
              }
            >
              <Meta
                title={
                  banglaCategory?.serviceAuthor +
                  ",  " +
                  banglaCategory?.serviceName
                }
                description={banglaCategory?.description}
              />
            </Card>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="English Specialize"
            bordered={false}
            style={{
              backgroundColor: "#fff1f0",
            }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt="service-image"
                  src={
                    englishCategory?.service_image ||
                    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  }
                  style={{
                    width: "90%",
                    height: "50%",
                    justifyContent: "center",
                    justifyItems: "center",
                    marginLeft: "15px",
                  }}
                />
              }
            >
              <Meta
                title={
                  englishCategory?.serviceAuthor +
                  ",  " +
                  englishCategory?.serviceName
                }
                description={englishCategory?.description}
              />
            </Card>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Math Specialize"
            bordered={false}
            style={{
              backgroundColor: "#fff1f0",
            }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt="service-image"
                  src={
                    mathCategory?.service_image ||
                    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  }
                  style={{
                    width: "90%",
                    height: "50%",
                    justifyContent: "center",
                    justifyItems: "center",
                    marginLeft: "15px",
                  }}
                />
              }
            >
              <Meta
                title={
                  mathCategory?.serviceAuthor + ", " + mathCategory?.serviceName
                }
                description={mathCategory?.description}
              />
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CategoryWiseServices;
