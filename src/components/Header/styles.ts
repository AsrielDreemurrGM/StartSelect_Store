import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  padding: 24px;
  margin-bottom: 80px;
  background-color: ${colors.gray};
  border-radius: 16px;

  h1 {
    line-height: 0;
  }

  a {
    font-weight: bold;
    color: ${colors.white};
    text-decoration: none;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
export const Logo = styled.img`
  width: 78px;
  height: 32px;
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;

    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      padding-right: 16px;
      text-align: center;
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;
  font-weight: bold;

  img {
    margin-left: 16px;
  }

  span {
    margin-left: 6px;

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const Hamburger = styled.div`
  width: 32px;
  cursor: pointer;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
