"use client";
import { Link } from "react-scroll";
import { Carousel, Layout, Menu } from "antd";

const { Header, Content } = Layout;
const HeaderPage = () => {
  return (
    <Carousel autoplay>
      <div>
        <div
          style={{
            width: "1000px",
            height: "600px",
            backgroundColor: "red",
          }}
        ></div>
      </div>
      <div>
        <div
          style={{
            width: "1000px",
            height: "600px",
            backgroundColor: "red",
          }}
        ></div>
      </div>
      <div>
        <div
          style={{
            width: "1000px",
            height: "600px",
            backgroundColor: "red",
          }}
        ></div>
      </div>
      <div>
        <div
          style={{
            width: "1000px",
            height: "600px",
            backgroundColor: "red",
          }}
        ></div>
      </div>
    </Carousel>
  );
};

export default HeaderPage;
