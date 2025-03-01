import styled from 'styled-components'
import { colors } from '../../styles/styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-block;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  background-color: ${colors.green};
  color: ${colors.white};
  font-weight: bold;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
`
