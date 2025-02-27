import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const HeaderBar = styled.header`
  display: flex;
  padding: 24px;
  margin-bottom: 80px;
  background-color: ${colors.gray};
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: ${colors.white};
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 78px;
  height: 32px;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartLink = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
