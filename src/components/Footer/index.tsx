import { Container, FooterSection, Link, Links, Title } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="globalContainer">
      <FooterSection>
        <Title>Categorias</Title>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">Ação</Link>
          </li>
          <li>
            <Link to="/categories#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categories#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categories#fighting">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <Title>Acesso Rápido</Title>
        <Links>
          <li>
            <Link to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        {currentYear} - &copy; StartSelect Store Todos os direitos reservados
      </p>
    </div>
  </Container>
)

export default Footer
