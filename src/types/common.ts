export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IService = {
  serviceName: string;
  serviceCode: number;
  category: string;
  schedule: string;
  description: string;
  location: string;
  serviceAuthor: string;
  status: string;
  service_image: string;
};

export type IUser = {
  name: string;
  email: string;
  password: string;
  contactNo: string;
  address: string;
};
