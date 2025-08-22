import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchaseResponse = {
  orderId: string
}

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://start-select-api.vercel.app'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'api/destaque'
    }),
    getOnSaleGames: builder.query<Game[], void>({
      query: () => 'jsons/promocoes.json'
    }),
    getComingSoon: builder.query<Game[], void>({
      query: () => 'jsons/em-breve.json'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'jsons/acao.json'
    }),
    getSportgames: builder.query<Game[], void>({
      query: () => 'jsons/esportes.json'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'jsons/simulacao.json'
    }),
    getFightingGames: builder.query<Game[], void>({
      query: () => 'jsons/luta.json'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'jsons/rpg.json'
    }),
    getGameDetails: builder.query<Game, string>({
      query: (id) => `api/jogos/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'api/checkout',
        method: 'POST',
        body
      })
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
  useGetGameDetailsQuery,
  usePurchaseMutation
} = api

export default api
