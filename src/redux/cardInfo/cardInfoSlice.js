import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardInfoApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lookup.binlist.net/',
  }),
  tagTypes: ['cardInfo'],
  endpoints: builder => ({
    getCardInfo: builder.query({
      query: cardNumber => ({
        url: `/${cardNumber}`,
        method: 'GET',
      }),
      providesTags: ['cardInfo'],
    }),
  }),
});

export const { useGetCardInfoQuery } = cardInfoApi;
