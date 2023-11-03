"use client";
import CategoryWiseServices from "./CategoryWiseServices";
import HeaderPage from "./Header";
import MyStory from "./MyStory";
import SempleProduct from "./OurSempleProduct";
import Review from "./Reviews";
import Testimonials from "./Testimonials";
import ProfessionalSection from "./professionals";

const HomePage = () => {
  return (
    <div>
      {/* <HeaderPage /> */}
      <MyStory />
      <CategoryWiseServices />
      <SempleProduct />
      <ProfessionalSection />

      <Testimonials />
      <Review />
    </div>
  );
};

export default HomePage;
