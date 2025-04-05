import styled from 'styled-components'
import { colors } from '../../styles/styles'

import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0;
  margin-top: 40px;
`

export const Title = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`

export const Link = styled(HashLink)`
  text-decoration: none;
  color: ${colors.lightgray};
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
