import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta, IService } from "@/types";

const BOOKING_URL = "/reviews";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addReviewData: build.mutation({
      query: (data) => ({
        url: `${BOOKING_URL}/create-review`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    reviews: build.query({
      query: () => {
        return {
          url: BOOKING_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.review],
    }),
  }),
});

export const { useAddReviewDataMutation, useReviewsQuery } = bookingApi;
