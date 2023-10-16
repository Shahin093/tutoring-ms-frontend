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
  }),
});

export const { useUserSignupMutation } = userApi;
