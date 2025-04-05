import styled from 'styled-components'

import { colors } from '../../styles/styles'

export const Container = styled.div`
  background-color: ${colors.gray};
  border-radius: 8px;
  margin-bottom: 40px;
  padding: 24px;

  h2,
  h3 {
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  > h3 {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
