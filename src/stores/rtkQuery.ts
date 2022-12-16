import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Artist, Artwork, ArtworkDetailByArtist } from '../types';

const rtkQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL
});

export const apiSlice = createApi({
  baseQuery: rtkQuery,
  endpoints: (builder) => ({
    artistList: builder.query<Artist[], void>({
      query: () => ({
        url: '/artists',
        method: 'GET'
      }),
      transformResponse: (response: { data: Artist[] }) => {
        return response.data;
      }
    }),
    artistDetail: builder.query<Artist, string>({
      query: (artistId) => ({
        url: `/artists/${artistId}`,
        method: 'GET'
      }),
      transformResponse: (response: { data: Artist }) => {
        return response.data;
      }
    }),
    artworkListByGenre: builder.query<Artwork[], string>({
      query: (genre) => ({
        url: `/asset/${genre}`,
        method: 'GET'
      }),
      transformResponse: (response: { data: Artwork[] }) => {
        return response.data;
      }
    }),
    artworkDetailByArtist: builder.query<ArtworkDetailByArtist, string>({
      query: (artistId) => ({
        url: `/artworks/${artistId}`,
        method: 'GET'
      }),
      transformResponse: (response: { data: ArtworkDetailByArtist }) => {
        return response.data;
      }
    })
  })
});

export const {
  useArtistListQuery,
  useArtistDetailQuery,
  useArtworkListByGenreQuery,
  useArtworkDetailByArtistQuery
} = apiSlice;
