import ProductList from '../../Containers/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportgamesQuery,
  useGetFightingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportgamesQuery()
  const { data: fightingGames } = useGetFightingGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (
    actionGames &&
    sportsGames &&
    fightingGames &&
    rpgGames &&
    simulationGames
  ) {
    return (
      <>
        <ProductList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductList
          games={sportsGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductList
          games={fightingGames}
          title="Luta"
          background="black"
          id="fighting"
        />
        <ProductList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
