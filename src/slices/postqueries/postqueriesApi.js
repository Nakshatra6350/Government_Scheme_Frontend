import { POST_SCHEMES } from "../../constant";
import { apiSlice } from "../apislice";

export const postSchemeSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addScheme: builder.mutation({
      query: ({ formData }) => ({
        url: `${POST_SCHEMES}`,
        method: "POST",
        body: formData,
        withCredentials: true,
        credentials: "include",
      }),
    }),
  }),
});

export const { useAddSchemeMutation } = postSchemeSlice;
