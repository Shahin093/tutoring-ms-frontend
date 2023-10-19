import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const FEEDBACK_URL = "/feedbacks";

export const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addFeedbackData: build.mutation({
      query: (data) => ({
        url: `${FEEDBACK_URL}/create-feedback`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.feedback],
    }),

    feedbacks: build.query({
      query: () => {
        return {
          url: FEEDBACK_URL,
          method: "GET",
        };
      },

      providesTags: [tagTypes.feedback],
    }),
  }),
});

export const { useAddFeedbackDataMutation, useFeedbacksQuery } = feedbackApi;
