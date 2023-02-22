import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const LoginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/admin/",
  }),
  endpoints: (builder) => ({
    loginPatient: builder.mutation({
      query: (login) => {
        console.log("Log in: ", login);
        return {
          url: `signin`,
          method: "POST",
          body: {
            login,
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const { useLoginPatientMutation } = LoginApi;
