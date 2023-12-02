import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../../helpers/Http'

export const Pattern = createApi({
  reducerPath: 'Pattern',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['art'],
  endpoints: (builder) => ({
    getPatterns: builder.query({
        query: () => 'patterns',
    }),
    getPattern: builder.query({
        query: (__id__) => `pattern/${__id__}`,
    }),
   
  }),
})

export const { 
  useGetPatternsQuery,
  useGetPatternQuery
} = Pattern