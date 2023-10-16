import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta, IService } from "@/types";

const SERVICE_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addServiceData: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/create-service`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),

    services: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: SERVICE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),

    service: build.query({
      query: (id) => {
        return {
          url: `${SERVICE_URL}/${id}`,
          method: "GET",
        };
      },

      providesTags: [tagTypes.service],
    }),

    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),

    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useAddServiceDataMutation,
  useServicesQuery,
  useUpdateServiceMutation,
  useServiceQuery,
} = serviceApi;
