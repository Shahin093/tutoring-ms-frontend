import HeaderPage from "./Header";
import MyStory from "./MyStory";
import Testimonials from "./Testimonials";
import ProfessionalSection from "./professionals";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeaderPage />
      <MyStory />
      <ProfessionalSection />
      <Testimonials />
    </div>
  );
};

export default HomePage;
