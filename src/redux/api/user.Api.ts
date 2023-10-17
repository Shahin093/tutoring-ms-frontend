import { IMeta, IUser } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const AUTH_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userSignup: build.mutation({
      query: (signupData) => ({
        url: `/users/create-user`,
        method: "POST",
        data: signupData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    users: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: AUTH_URL,
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
      providesTags: [tagTypes.user],
    }),

    user: build.query({
      query: (id) => {
        return {
          url: `${AUTH_URL}/${id}`,
          method: "GET",
        };
      },

      providesTags: [tagTypes.user],
    }),

    updateUser: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/${data.id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `${AUTH_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useUserSignupMutation,
  useUsersQuery,
  useUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
