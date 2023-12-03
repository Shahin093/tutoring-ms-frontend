import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const FEEDBACK_URL = "/contents";

export const contentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addContentData: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK_URL}/create-content`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.content],
    }),

    contents: build.query({
      query: () => {
        return {
          url: FEEDBACK_URL,
          method: "GET",
        };
      },

      providesTags: [tagTypes.content],
    }),
  }),
});

export const { useAddContentDataMutation, useContentsQuery } = contentApi;
