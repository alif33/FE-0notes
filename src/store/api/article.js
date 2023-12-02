import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../../helpers/Http'

export const Article = createApi({
  reducerPath: 'Article',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['article'],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => 'articles',
    }),
   

  }),
})

export const { 
  useGetArticlesQuery,
} = Article