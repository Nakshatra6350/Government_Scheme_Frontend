import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { BASE_URL } from "../constant";
import { logout } from "./authslice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  pepareHeaders(headers) {
    const token = Cookies.get("jwt");
    if (token) {
      headers.set("token", token);
    }
    return headers;
  },
});

async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  // Dispatch the logout action on 401.
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
