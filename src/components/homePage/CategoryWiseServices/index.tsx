"use client";
import { useServiceCategoryQuery } from "@/redux/api/serviceApi";
import { Card, Col, Row } from "antd";

const { Meta } = Card;
const CategoryWiseServices = () => {
  const { data } = useServiceCategoryQuery(undefined);
  const banglaCategory: any =
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
  console.log({ banglaCategory });
  return (
    <div>
      <Row
        gutter={16}
        justify="center"
        style={{
          padding: "5px",
        }}
      >
        <Col span={24} md={8} lg={8}>
          <Card title="Bangla Specialize" bordered={false}>
            <Card
              hoverable
              cover={
                <img
                  alt="service-image"
                  src={
                    banglaCategory?.service_image ||
                    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  }
                  width={300}
                  style={{ height: "400px" }}
                />
              }
            >
              <Meta
                title={
                  banglaCategory?.serviceAuthor +
                  ", Teaching With " +
                  banglaCategory?.serviceName
                }
                description={banglaCategory?.description}
              />
            </Card>
          </Card>
        </Col>

        <Col span={24} md={8} lg={8}>
          <Card title="English Specialize" bordered={false}>
            <Card
              hoverable
              cover={
                <img
                  alt="service-image"
                  src={
                    englishCategory?.service_image ||
                    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  }
                  width={300}
                  style={{ height: "400px" }}
                />
              }
            >
              <Meta
                title={
                  englishCategory?.serviceAuthor +
                  ", Teaching With " +
                  englishCategory?.serviceName
                }
                description={englishCategory?.description}
              />
            </Card>
          </Card>
        </Col>

        <Col span={24} md={8} lg={8}>
          <Card title="Math Specialize" bordered={false}>
            <Card
              hoverable
              cover={
                <img
                  alt="service-image"
                  src={
                    mathCategory?.service_image ||
                    "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  }
                  width={300}
                  style={{ height: "400px" }}
                />
              }
            >
              <Meta
                title={
                  mathCategory?.serviceAuthor +
                  ", Teaching With  " +
                  mathCategory?.serviceName
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
