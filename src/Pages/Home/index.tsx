import Banner from '../../components/Banner'
import ProductList from '../../Containers/ProductList'
import Game from '../../models/Game'

import diablo from '../../assets/images/diablo.png'
import resident from '../../assets/images/resident.png'
import starWars from '../../assets/images/star-wars.png'
import zelda from '../../assets/images/zelda.png'
import fifa23 from '../../assets/images/fifa23.png'
import streetFighter from '../../assets/images/street-fighter.png'

const promotions: Game[] = [
  {
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    id: 1,
    image: resident,
    infos: ['-10%', 'R$ 199,90'],
    system: 'Windows',
    title: 'Resident Evil 4 - Remake'
  },
  {
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    id: 2,
    image: starWars,
    infos: ['-50%', 'R$ 99,90'],
    system: 'Windows',
    title: 'Star Wars Jedi: Survivor'
  },
  {
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    id: 3,
    image: diablo,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Diablo IV'
  },
  {
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    id: 4,
    image: zelda,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Switch',
    title: 'The Legend of Zelda - TOK'
  }
]

const comingSoon: Game[] = [
  {
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    id: 6,
    image: starWars,
    infos: ['26/07'],
    system: 'Windows',
    title: 'Star Wars Jedi: Survivor'
  },
  {
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    id: 5,
    image: streetFighter,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Street Fighter 6'
  },
  {
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    id: 8,
    image: zelda,
    infos: ['20/03'],
    system: 'Switch',
    title: 'The Legend of Zelda - TOK'
  },
  {
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    id: 7,
    image: fifa23,
    infos: ['10/08'],
    system: 'PS5',
    title: 'FIFA 23'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promotions} title="Promoções" background="gray" />
    <ProductList games={comingSoon} title="Em Breve" background="black" />
  </>
)

export default Home
