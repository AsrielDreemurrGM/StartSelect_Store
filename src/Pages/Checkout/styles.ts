import styled from 'styled-components'
import { colors } from '../../styles/styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive?: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }
`

export const TabButton = styled.button<TabButtonProps>`
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  border-radius: 8px;
  border: none;
  margin-right: 16px;
  margin-bottom: 24px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
