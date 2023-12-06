"use client";
import { Col, Row, Carousel } from "antd";

const HeaderPage = () => {
  return (
    <div className="heroBlock">
      <Row gutter={[24, 24]}>
        {/* carousel */}
        <Col xs={24} lg={18}>
          <Carousel autoplay>
            <div>
              <img
                alt="product-image"
                src={
                  "https://www.instamojo.com/blog/wp-content/uploads/2020/11/books-online-2-1.png"
                }
                style={{ height: "400px" }}
              />
            </div>
            <div>
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/w_800/f_auto,q_auto/v1/attachments/generic_asset/asset/030c66be9e2e4bc6f6870498a3359604-1608799224201/Book%20selling%20on%20Amazon-min.jpg"
                alt="banner 2"
                style={{ height: "400px" }}
              />
            </div>
            <div>
              <img
                src="https://i2-prod.mylondon.news/incoming/article16259631.ece/ALTERNATES/s810/1_library.jpg"
                alt="banner 3"
                style={{ height: "400px" }}
              />
            </div>
          </Carousel>
        </Col>
        {/* hero blocks */}
        <Col xs={24} lg={6}>
          <div className="heroBlocks">
            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div className="content">
                <h3>Free Shipping &amp; Return</h3>
                <p>Free shipping on orders over £20</p>
              </div>
            </div>
            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="content">
                <h3>Money Back Guarantee</h3>
                <p>100% money back guarantee</p>
              </div>
            </div>
            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="content">
                <h3>Online Support 24/7</h3>
                <p>Excepteur sint occaecat cupidatat</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderPage;
