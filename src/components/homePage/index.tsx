import React from "react";
import Navbar from "./Navbar";
import HeaderPage from "./Header";
import MyStory from "./MyStory";
import ProfessionalSection from "./professionals";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";
// import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeaderPage />
      <MyStory />
      <ProfessionalSection />
    </div>
  );
};

export default HomePage;
