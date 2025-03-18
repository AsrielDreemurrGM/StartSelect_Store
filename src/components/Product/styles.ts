import styled from 'styled-components'
import { colors } from '../../styles/styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  position: relative;
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: fill;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
