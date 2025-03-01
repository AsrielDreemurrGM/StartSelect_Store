import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { colors } from '../../styles/styles'

const BaseButton = styled.button`
  padding: 8px 16px;
  border: 2px solid ${colors.white};
  border-radius: 8px;
  background-color: transparent;
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const NormalButton = styled(BaseButton).attrs({ as: 'button' })``

export const LinkButton = styled(BaseButton).attrs({ as: Link })``
