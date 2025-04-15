import { useState } from 'react'

import * as S from './styles'
import Section from '../Section'

import playIcon from '../../assets/images/play-icon.png'
import zoomIcon from '../../assets/images/zoom-icon.png'
import closeIcon from '../../assets/images/close-icon.png'

type Props = {
  defaultCover: string
  gameName: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, gameName, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoomIcon
    return playIcon
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: 'item.url'
    })
  }
  return (
    <>
      <Section $background="black" title="Galeria">
        <S.Items>
          {items.map((item, index) => (
            <S.Item
              key={item.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: item.type,
                  url: item.url
                })
              }}
            >
              <img
                src={getMediaCover(item)}
                alt={`Mídia ${index + 1} de ${gameName}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(item)}
                  alt="Clique para maximizar a imagem"
                ></img>
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="globalContainer">
          <S.ModalHeader>
            <h4>{gameName}</h4>
            <S.CloseIcon
              src={closeIcon}
              alt="Ícone de fechar"
              onClick={closeModal}
            />
          </S.ModalHeader>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </S.ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Gallery
