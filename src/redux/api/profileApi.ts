import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const PROFILE_URL = "/profiles";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myProfile: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: PROFILE_URL,
          method: "GET",
          params: arg,
        };
      },
      providesTags: [tagTypes.profile],
    }),

    updateProfile: build.mutation({
      query: (data) => ({
        url: `${PROFILE_URL}/${data.id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.profile],
    }),

    deleteProfile: build.mutation({
      query: (id) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});

export const { useMyProfileQuery, useUpdateProfileMutation } = adminApi;
