import styled from 'styled-components'

import { Props } from '.'

import { Link } from 'react-router-dom'

import { colors } from '../../styles/styles'

export const BaseButton = styled.button<Props>`
  padding: 8px 16px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  border-radius: 8px;
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const NormalButton = styled(BaseButton).attrs({ as: 'button' })``

export const LinkButton = styled(BaseButton).attrs({ as: Link })``
