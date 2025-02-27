import { Image, Prices, Title } from './styles'

import bannerImg from '../../assets/images/spider-man-banner.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="globalContainer">
      <Title>Marvel Spider-Man: Miles Morales PS4 & PS5</Title>
      <Prices>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </Prices>
    </div>
  </Image>
)

export default Banner
