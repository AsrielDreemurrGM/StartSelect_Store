import { useDispatch } from 'react-redux'

import * as S from './styles'

import Tag from '../Tag'
import Button from '../Button'

import { add, open } from '../../store/reducers/cart'

import { convertToBRL } from '../../utils/utils'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="globalContainer">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.InformationWrapper>
          <S.Title>{game.name}</S.Title>
          <S.PriceWrapper>
            {game.prices.discount && (
              <S.OldPrice>De {convertToBRL(game.prices.old)}</S.OldPrice>
            )}
            {game.prices.current && (
              <>Por {convertToBRL(game.prices.current)}</>
            )}
          </S.PriceWrapper>
          {game.prices.current && (
            <Button
              onClick={addToCart}
              type="button"
              title="Adicionar ao carrinho"
              variant="primary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.InformationWrapper>
      </div>
    </S.Banner>
  )
}

export default Hero
