import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummy.restapiexample.com/api/v1' }),
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => 'employees',
    }),
    createEmployee: builder.mutation({
      query: (employeeData) => ({
        url: 'create',
        method: 'POST',
        body: employeeData,
      }),
    }),
    updateEmployee: builder.mutation({
      query: ({ employeeId, employeeData }) => ({
        url: `update/${employeeId}`,
        method: 'PUT',
        body: employeeData,
      }),
    }),
  }),
});

export const { useGetEmployeeListQuery, useCreateEmployeeMutation, useUpdateEmployeeMutation } = employeeApi;
