import Tag from '../Tag'
import * as S from './styles'

type Props = {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }
  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product
