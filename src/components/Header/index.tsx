import { CartLink, HeaderBar, LinkItem, Links, Logo } from './styles'

import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Logo src={logo} alt="STARTSELECT" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <CartLink href="#">
      0 - Produto(s)
      <img src={cart} alt="Carrinho" />
    </CartLink>
  </HeaderBar>
)

export default Header
