import {
  Action,
  CloseIcon,
  Item,
  Items,
  Modal,
  ModalContent,
  ModalHeader
} from './styles'
import Section from '../Section'

import spiderman from '../../assets/images/spider-man-banner.png'
import hogwarts from '../../assets/images/hogwarts-background.png'
import playIcon from '../../assets/images/play-icon.png'
import zoomIcon from '../../assets/images/zoom-icon.png'
import closeIcon from '../../assets/images/close-icon.png'
import { useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/BtyBjOW8sGY?si=A7shtoKoHJlqzyUC'
  }
]

type Props = {
  defaultCover: string
  gameName: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, gameName }: Props) => {
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
      <Section background="black" title="Galeria">
        <Items>
          {mock.map((item, index) => (
            <Item
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
              <Action>
                <img
                  src={getMediaIcon(item)}
                  alt="Clique para maximizar a imagem"
                ></img>
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="globalContainer">
          <ModalHeader>
            <h4>{gameName}</h4>
            <CloseIcon
              src={closeIcon}
              alt="Ícone de fechar"
              onClick={() => closeModal()}
            />
          </ModalHeader>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
