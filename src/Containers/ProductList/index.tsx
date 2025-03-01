import Product from '../../components/Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="globalContainer">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.co/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
