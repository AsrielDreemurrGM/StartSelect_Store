import {
  Banner,
  InformationWrapper,
  OldPrice,
  PriceWrapper,
  Title
} from './styles'

import Tag from '../Tag'

import hogwarts from '../../assets/images/hogwarts-background.png'
import Button from '../Button'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${hogwarts})` }}>
    <div className="globalContainer">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <InformationWrapper>
        <Title>Hogwarts Legacy</Title>
        <PriceWrapper>
          <OldPrice>R$ 290,90</OldPrice>
          Por R$ 190,90
        </PriceWrapper>
        <Button type="button" title="Adicionar ao carrinho" variant="primary">
          Adicionar ao carrinho
        </Button>
      </InformationWrapper>
    </div>
  </Banner>
)

export default Hero
