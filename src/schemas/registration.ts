import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().required("email is required"),
  password: yup.string().min(6).max(32).required(),
  contactNo: yup.string().required("contactNo is required"),
  address: yup.string().required("address is required"),
  // profileImg: yup.string().required("profileImg is required"),
});
