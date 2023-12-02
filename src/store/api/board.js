import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../../helpers/Http'

export const Board = createApi({
  reducerPath: 'Board',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['bd'],
  endpoints: (builder) => ({
    getBoards: builder.query({
        query: () => 'boards',
        providesTags: ['bd']
    }),
    getBoard: builder.query({
        query: (__id__) => `board/${__id__}`,
        providesTags: ['bd']
    }),
    addBoard: builder.mutation({
        query: (board) => ({
            url: 'board',
            method: 'POST',
            body: board,
        }),
        invalidatesTags: ['bd']
    }), 
   
  }),
})

export const { 
  useGetBoardQuery,
  useGetBoardsQuery,
  useAddBoardMutation
} = Board