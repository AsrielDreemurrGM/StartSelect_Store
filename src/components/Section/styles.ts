import styled from 'styled-components'

import { colors } from '../../styles/styles'
import { Card } from '../../components/Product/styles'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? colors.black : colors.gray};
  }

  p {
    max-width: 640px;
    font-size: 14px;
    line-height: 22px;
  }
`

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
