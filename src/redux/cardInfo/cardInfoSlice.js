import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardInfoApi = createApi({
  reducerPath: 'cardInfoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lookup.binlist.net/',
  }),
  tagTypes: ['cardInfoApi'],
  endpoints: builder => ({
    getCardInfo: builder.query({
      query: cardNumber => ({
        url: `${cardNumber}`,
        method: 'GET',
      }),
      providesTags: ['cardInfoApi'],
    }),
  }),
});

export const { useGetCardInfoQuery } = cardInfoApi;
