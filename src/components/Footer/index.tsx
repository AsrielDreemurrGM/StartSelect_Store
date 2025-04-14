import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="globalContainer">
      <S.FooterSection>
        <S.Title>Categorias</S.Title>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fighting"
            >
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.Title>Acesso Rápido</S.Title>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de Promoções"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de Em Breve"
              to="/#coming-soon"
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>
        {currentYear} - &copy; StartSelect Store Todos os direitos reservados
      </p>
    </div>
  </S.Container>
)

export default Footer
