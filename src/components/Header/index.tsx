import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { CartButton, HeaderBar, LinkItem, Links, Logo } from './styles'

import logoImg from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
      <CartButton onClick={openCart}>
        {items.length} - Produto(s)
        <img src={cart} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
