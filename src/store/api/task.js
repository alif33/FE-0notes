import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../../helpers/Http'

export const Task = createApi({
  reducerPath: 'Task',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['task'],
  endpoints: (builder) => ({
    getTasks: builder.query({
        query: () => 'tasks',
        providesTags: ['task']
    }),
    getTask: builder.query({
        query: (__id__) => `task/${__id__}`,
        providesTags: ['task']
    }),
    updateTask: builder.mutation({
        query: (task) => ({
            url: `task?_id=${task._id}`,
            method: 'PUT',
            body: task,
        }),
        invalidatesTags: ['task']
    }),
   
  }),
})

export const { 
  useGetTasksQuery,
  useGetTaskQuery,
  useUpdateTaskMutation
} = Task