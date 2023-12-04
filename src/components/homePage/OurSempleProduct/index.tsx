"use client";
import { Card, Row, Col, Rate, Button } from "antd";
const { Meta } = Card;
const ourProduct = [
  {
    name: "E-BOOK",
    content: "Unlock Your Potential: A Guide To Personal Transformation",
    image:
      "https://happylifeclub.tokotema.com/wp-content/uploads/2023/09/Ebook-Guide-To-Personal-Transformation.png",
    price: "350",
  },
  {
    name: "E-BOOK",
    content: "Mastering the Art of Problem Solving",
    image:
      "https://happylifeclub.tokotema.com/wp-content/uploads/2023/09/Ebook-Mastering-the-Art-of-Problem-Solving.png",
    price: "350",
  },
  {
    name: "E-BOOK",
    content: "Mastering the Art of Problem Solving",
    image:
      "https://happylifeclub.tokotema.com/wp-content/uploads/2023/09/Ebook-A-Comprehensive-Guide-To-Stress-Management.png",
    price: "350",
  },
  // Add more testimonials here
];

const SempleProduct = () => {
  return (
    <div style={{ margin: "16px", marginTop: "200px" }}>
      <Row gutter={16} style={{ marginBottom: "50px", padding: "50px" }}>
        <Col span={12}>
          <div className="">
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "21px",
              }}
            >
              Our Products
            </h1>
            <p>
              At faucibus donec adipiscing amet turpis. Ac a nisl mattis et
              massa. Odio interdum quisque massa ut mattis eget. Rhoncus sed
              convallis nulla sit.
            </p>
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
              See All Products
            </Button>
            {/* {testimonial.content} */}
          </div>
        </Col>
      </Row>
      <Row gutter={24}>
        {ourProduct.map((product, index) => (
          <Col key={index} span={24} md={8} lg={8}>
            <Card cover={<img alt="product-image" src={product.image} />}>
              <Meta title={product.name} description={product?.content} />

              <div
                style={{
                  display: "flex",
                  // justifyContent: "end",
                  alignItems: "center",
                  marginTop: "20px",
                  gap: "30px",
                }}
              >
                <h3>$ {product.price}</h3>
                <Rate
                  allowHalf
                  style={{ display: "flex", justifyContent: "end" }}
                  defaultValue={5}
                  disabled
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SempleProduct;
