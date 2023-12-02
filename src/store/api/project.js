import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../../helpers/Http'

export const Project = createApi({
  reducerPath: 'Project',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['project'],
  endpoints: (builder) => ({
    getProjects: builder.query({
        query: () => 'projects',
    }),

    getProject: builder.query({
        query: (__id__) => `project/${__id__}`,
    }),
   
  }),
})

export const { 
  useGetProjectsQuery,
  useGetProjectQuery
} = Project