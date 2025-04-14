import { Image, Prices, Title } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { convertToBRL } from '../../utils/utils'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="globalContainer">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{convertToBRL(game.prices.old)}</span> <br />
            por apenas {convertToBRL(game.prices.current)}
          </Prices>
        </div>
        <Button
          variant="secondary"
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
