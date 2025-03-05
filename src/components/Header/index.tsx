import { Link } from 'react-router-dom'

import { CartLink, HeaderBar, LinkItem, Links, Logo } from './styles'

import logoImg from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <Logo src={logoImg} alt="STARTSELECT" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
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
