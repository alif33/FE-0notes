import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://aidyb.vercel.app/api/' }),
  endpoints: (builder) => ({
    getPatterns: builder.query({
      query: () => 'patterns',
    }),
    getProjects: builder.query({
      query: () => 'projects',
    }),
    getPattern: builder.query({
      query: (__id__) => `pattern/${__id__}`,
    }),
    getProject: builder.query({
      query: (__id__) => `project/${__id__}`,
    }),
  }),
})

export const { 
  useGetPatternsQuery, 
  useGetPatternQuery, 
  useGetProjectsQuery, 
  useGetProjectQuery 
} = Api