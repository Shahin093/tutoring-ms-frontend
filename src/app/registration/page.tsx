import Registration from "@/components/Registration/Registration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UMS | Signup",
};

const RegistrationPage = () => {
  return (
    <>
      <Registration />
    </>
  );
};

export default RegistrationPage;
