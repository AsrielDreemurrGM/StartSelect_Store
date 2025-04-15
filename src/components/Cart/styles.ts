import styled from 'styled-components'

import { colors } from '../../styles/styles'
import { TagContainer } from '../Tag/styles'
import { BaseButton } from '../Button/styles'

import closeIcon from '../../assets/images/close-icon.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  z-index: 1;
  display: none;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 16px;
  background-color: ${colors.gray};

  ${BaseButton} {
    max-width: 100%;
    width: 100%;
  }

  .empty-cart {
    font-size: 14px;
    text-align: center;
    line-height: 22px;
    color: ${colors.white};
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    display: block;
    color: ${colors.lightgray};
  }
`

export const Quantity = styled(Prices)`
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  padding: 8px 0;
  border-bottom: 1px solid ${colors.lightgray};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.white};
  }

  ${TagContainer} {
    margin-top: 8px;
    margin-right: 8px;
    margin-bottom: 16px;
  }

  button {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 0;
    background-image: url(${closeIcon});
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
  }
`
