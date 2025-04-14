import Banner from '../../components/Banner'
import ProductList from '../../Containers/ProductList'

import {
  useGetOnSaleGamesQuery,
  useGetComingSoonQuery
} from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSaleGames } =
    useGetOnSaleGamesQuery()
  const { data: comingSoonGames, isLoading: isLoadingComingSoonGames } =
    useGetComingSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSaleGames}
      />
      <ProductList
        games={comingSoonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingComingSoonGames}
      />
    </>
  )
}

export default Home
