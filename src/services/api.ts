import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSaleGames: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getComingSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportgames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightingGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGameDetails: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetComingSoonQuery,
  useGetOnSaleGamesQuery,
  useGetActionGamesQuery,
  useGetSportgamesQuery,
  useGetSimulationGamesQuery,
  useGetFightingGamesQuery,
  useGetRpgGamesQuery,
  useGetGameDetailsQuery
} = api

export default api
