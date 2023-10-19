import { IMeta, IUser } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdminData: build.mutation({
      query: (adminData) => ({
        url: `/users/create-admin`,
        method: "POST",
        data: adminData,
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    admins: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ADMIN_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),

    admin: build.query({
      query: (id) => {
        return {
          url: `${ADMIN_URL}/${id}`,
          method: "GET",
        };
      },

      providesTags: [tagTypes.admin],
    }),

    updateAdmin: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data.id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useAddAdminDataMutation,
  useAdminsQuery,
  useAdminQuery,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = adminApi;
