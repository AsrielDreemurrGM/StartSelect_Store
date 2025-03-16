import { Image, Prices, Title } from './styles'

import bannerImg from '../../assets/images/spider-man-banner.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="globalContainer">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Marvel Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
      <Button
        variant="secondary"
        type="link"
        to="/product"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Image>
)

export default Banner
