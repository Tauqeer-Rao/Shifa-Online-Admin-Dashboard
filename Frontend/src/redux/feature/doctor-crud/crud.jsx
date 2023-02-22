import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAllApi = createApi({
  reducerPath: "getApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/doctor",
  }),
  tagTypes: ["display", "singlePost", "count"],
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "display",
        method: "GET",
      }),
      providesTags: ["display"],
    }),

    getAllPostById: builder.query({
      query: (id) => ({
        url: `display/${id}`,
        method: "GET",
      }),
      providesTags: ["singlePost"],
    }),

    getAllPostCount: builder.query({
      query: () => ({
        url: "count",
        method: "GET",
      }),
      providesTags: ["count"],
    }),

    createDoctor: builder.mutation({
      query: (createDoctorData) => {
        return {
          url: `create`,
          method: "POST",
          body: {
            createDoctorData,
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["display"],
    }),

    updateDoctor: builder.mutation({
      query: ({ id, data }) => {
        console.log("update data: ", data);
        console.log("update id: ", id);
        return {
          url: `update/${id}`,
          method: "PUT",
          body: {
            data,
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["display"],
    }),

    DeletePost: builder.mutation({
      query: (deleteDoctor) => {
        console.log("deleteDoctor: ", deleteDoctor);
        return {
          url: `delete/${deleteDoctor}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["display"],
    }),
  }),
});
export const {
  useGetAllPostQuery,
  useGetAllPostByIdQuery,
  useGetAllPostCountQuery,
  useCreateDoctorMutation,
  useUpdateDoctorMutation,
  useDeletePostMutation,
} = getAllApi;
