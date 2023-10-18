import HeaderPage from "./Header";
import MyStory from "./MyStory";
import ProfessionalSection from "./professionals";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeaderPage />
      <MyStory />
      <ProfessionalSection />
    </div>
  );
};

export default HomePage;
