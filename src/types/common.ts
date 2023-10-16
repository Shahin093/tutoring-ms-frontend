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
// {
//     "serviceName":"English",
//     "serviceCode": 4563,
//     "category":"MONTHLY",
//     "schedule":"AFTERNOON_4_6",
//     "price":5999,
//     "description":"This is a good Package in the world.",
//     "location":"Dhaka",
//     "serviceAuthor":"MD Shidul",
//     "status":  "ONGOING",
//     "service_image":"shahin.png"
// }

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
