import ProductList from '../../Containers/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportgamesQuery,
  useGetFightingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportgamesQuery()
  const { data: fightingGames, isLoading: isLoadingFighting } =
    useGetFightingGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductList
        games={fightingGames}
        title="Luta"
        background="black"
        id="fighting"
        isLoading={isLoadingFighting}
      />
      <ProductList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
