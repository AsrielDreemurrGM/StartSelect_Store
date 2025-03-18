import {
  Banner,
  InformationWrapper,
  OldPrice,
  PriceWrapper,
  Title
} from './styles'

import { Game } from '../../Pages/Home'

import Tag from '../Tag'
import Button from '../Button'

import { formatPrice } from '../../Containers/ProductList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="globalContainer">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <InformationWrapper>
        <Title>{game.name}</Title>
        <PriceWrapper>
          {game.prices.discount && (
            <OldPrice>De {formatPrice(game.prices.old)}</OldPrice>
          )}
          {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
        </PriceWrapper>
        {game.prices.current && (
          <Button type="button" title="Adicionar ao carrinho" variant="primary">
            Adicionar ao carrinho
          </Button>
        )}
      </InformationWrapper>
    </div>
  </Banner>
)

export default Hero
