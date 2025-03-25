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
  const { data: onSaleGames } = useGetOnSaleGamesQuery()
  const { data: comingSoonGames } = useGetComingSoonQuery()

  if (onSaleGames && comingSoonGames) {
    return (
      <>
        <Banner />
        <ProductList games={onSaleGames} title="Promoções" background="gray" />
        <ProductList
          games={comingSoonGames}
          title="Em Breve"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
