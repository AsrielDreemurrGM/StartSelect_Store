import Banner from '../../components/Banner'
import ProductList from '../../Containers/ProductList'

import {
  useGetOnSaleGamesQuery,
  useGetComingSoonQuery
} from '../../services/api'

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
        $background="gray"
        id="on-sale"
        isLoading={isLoadingSaleGames}
      />
      <ProductList
        games={comingSoonGames}
        title="Em Breve"
        $background="black"
        id="coming-soon"
        isLoading={isLoadingComingSoonGames}
      />
    </>
  )
}

export default Home
