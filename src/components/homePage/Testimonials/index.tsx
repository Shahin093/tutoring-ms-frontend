"use client";
import { Card, Row, Col } from "antd";

const testimonials = [
  { name: "Jane Smith", content: "I love using Next.js with Ant Design." },
  { name: "Jane Smith", content: "I love using Next.js with Ant Design." },
  { name: "Jane Smith", content: "I love using Next.js with Ant Design." },
  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <div style={{ margin: "16px", marginBottom: "100px" }}>
      <h1>Testimonials</h1>
      <Row gutter={16}>
        {testimonials.map((testimonial, index) => (
          <Col key={index}  span={24} md={8} lg={8}>
            <Card style={{ margin: "13px" }}>
              <div className="testimonials-container">
                <h1>{testimonial.name}</h1>
                {testimonial.content}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
