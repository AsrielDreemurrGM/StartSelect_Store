import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Item = styled.li`
  position: relative;

  > img {
    object-fit: cover;
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
  }

  &:hover {
    cursor: pointer;
    ${Action} {
      background-color: rgba(0, 0, 0, 0.73);
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
    border: none;
  }
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const GameName = styled.h4`
  font-size: 18px;
  font-weight: bold;
`

export const CloseIcon = styled.img`
  cursor: pointer;
`
