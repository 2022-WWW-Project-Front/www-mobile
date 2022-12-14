import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Artist {
  id: number;
  "genre": string,
  "name": string,
  "nickname": string,
  "email": string,
  "contact": string,
  "description": string,
  "bio": string
}

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  credentials: 'include',
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: builder => ({
    artistList: builder.mutation({
      query: () => ({
        url: '/artists',
        method: 'GET'
      }),
      transformResponse: (response:{data:Artist[]}) => {
        return response.data
      }
    }),
    artistDetail: builder.mutation({
      query: (artistID) => ({
        url: `/artists/${artistID}`,
        method: 'GET'
      }),
      transformResponse: (response: {data:Artist}) => {
        return response.data
      }
    })
  })
})