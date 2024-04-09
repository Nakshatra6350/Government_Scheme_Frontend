import { GET_SCHEMES } from "../../constant";
import { apiSlice } from "../apislice";

export const getSchemeSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getScheme: builder.query({
      query: () => ({
        url: `${GET_SCHEMES}`,
        // method: "GET",
        keepUnusedDataFor: 5,
      }),
    }),
  }),
});

export const { useGetSchemeQuery } = getSchemeSlice;
