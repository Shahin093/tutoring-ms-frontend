import * as yup from "yup";

export const serviceSchema = yup.object().shape({
  serviceName: yup.string().required("serviceName is required"),
  serviceCode: yup.number().required("serviceCode is required"),
  category: yup.string().required("category is required"),
  schedule: yup.string().required("schedule is required"),
  price: yup.number().required("price is required"),
  description: yup.string().required("description is required"),
  location: yup.string().required("location is required"),
  serviceAuthor: yup.string().required("serviceAuthor is required"),
  status: yup.string().required("status is required"),
});
