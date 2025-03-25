import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import { useGetGameDetailsQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game, isLoading } = useGetGameDetailsQuery(id || '')

  if (!id) {
    return <h3>Jogo não encontrado</h3>
  }

  if (isLoading) {
    return <h4>Carregando...</h4>
  }

  if (!game) {
    return <h3>Erro ao carregar o jogo</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o jogo">
        <p>{game.description}</p>
      </Section>
      <Section background="gray" title="Mais detalhes">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        gameName={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
