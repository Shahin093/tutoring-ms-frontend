"use client";
import { UpCircleOutlined } from "@ant-design/icons";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        cursor: "pointer",
        fontSize: "40px",
      }}
    >
      <UpCircleOutlined onClick={handleScrollToTop} />
    </div>
  );
};

export default ScrollToTopButton;
