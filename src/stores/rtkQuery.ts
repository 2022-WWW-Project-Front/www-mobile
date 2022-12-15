import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Artist {
  id: number;
  genre: string;
  name: string;
  nickname: string;
  profileImage: string;
  email: string;
  contact: string;
  description: string;
  bio: string;
}

const rtkQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL
});

export const apiSlice = createApi({
  baseQuery: rtkQuery,
  endpoints: (builder) => ({
    artistList: builder.query<any, void>({
      query: () => ({
        url: '/artists',
        method: 'GET'
      }),
      transformResponse: (response: { data: Artist[] }) => {
        return response.data;
      }
    }),
    artistDetail: builder.query<any, number>({
      query: (artistId) => ({
        url: `/artists/${artistId}`,
        method: 'GET'
      }),
      transformResponse: (response: { data: Artist }) => {
        return response.data;
      }
    }),
    artworkListByGenre: builder.query<any, string>({
      query: (genre) => ({
        url: `/api/assets/${genre}`,
        method: 'GET'
      })
    }),
    artworkDetailByArtist: builder.query<any, number>({
      query: (artistCode) => ({
        url: `/api/assets`,
        method: 'GET',
        body: { code: artistCode }
      })
    })
  })
});

export const {
  useArtistListQuery,
  useArtistDetailQuery,
  useArtworkListByGenreQuery,
  useArtworkDetailByArtistQuery
} = apiSlice;
