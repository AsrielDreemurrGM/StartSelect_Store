import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .globalContainer {
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Prices = styled.p`
  margin-top: 24px;
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`
