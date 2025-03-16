import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  padding-top: 16px;

  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${TagContainer} {
    margin-right: 8px;
  }

  &::after {
    opacity: 0.56;
    position: absolute;
    background-color: ${colors.black};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .globalContainer {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const InformationWrapper = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;
`

export const Title = styled.h2`
  font-size: 32px;
`

export const PriceWrapper = styled.p`
  margin: 16px 0;
  font-size: 18px;
`

export const OldPrice = styled.span`
  display: block;
  text-decoration: line-through;
`
