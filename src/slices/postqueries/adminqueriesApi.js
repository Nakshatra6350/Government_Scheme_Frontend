import { ADMIN_URL } from "../../constant";
import { apiSlice } from "../apislice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/login`,
        method: "POST",
        body: data,
        withCredentials: true,
        credentials: "include",
      }),
    }),
    signupAdmin: builder.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/signup`,
        method: "POST",
        body: data,
        withCredentials: true,
        credentials: "include",
      }),
    }),
    logoutAdmin: builder.mutation({
      query: () => ({
        url: `${ADMIN_URL}/logout`,
        method: "POST",
        withCredentials: true,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useSignupAdminMutation,
  useLogoutAdminMutation,
} = usersApiSlice;
