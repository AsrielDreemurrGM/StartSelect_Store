import { Container, List } from './styles'
import Product from '../../components/Product'

import { convertToBRL } from '../../utils/utils'
import Loader from '../../components/Loader'

export type Props = {
  title: string
  $background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductList = ({ id, title, $background, games, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(convertToBRL(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container id={id} $background={$background}>
      <div className="globalContainer">
        <h2>{title}</h2>
        <List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  description={game.description}
                  image={game.media.thumbnail}
                  infos={getGameTags(game)}
                  system={game.details.system}
                  title={game.name}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
