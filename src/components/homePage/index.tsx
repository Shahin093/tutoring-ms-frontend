"use client";
import CategoryWiseServices from "./CategoryWiseServices";
import HeaderPage from "./Header";
import MyStory from "./MyStory";
import Review from "./Reviews";
import Testimonials from "./Testimonials";
import ProfessionalSection from "./professionals";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeaderPage />
      <MyStory />
      <CategoryWiseServices />
      <ProfessionalSection />
      <Testimonials />
      <Review />
    </div>
  );
};

export default HomePage;
