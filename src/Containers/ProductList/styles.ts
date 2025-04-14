import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, colors } from '../../styles/styles'
import { Card } from '../../components/Product/styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading' | 'background'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.$background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.$background === 'gray' ? colors.black : colors.gray};
  }
`

export const List = styled.ul`
  display: grid;
  margin-top: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
