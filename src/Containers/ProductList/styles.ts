import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles/styles'
import { Card } from '../../components/Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? colors.black : colors.gray};
  }
`

export const List = styled.ul`
  display: flex;
  margin-top: 40px;
  grid-template-columns: repeat(1fr, 4);
  gap: 24px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
