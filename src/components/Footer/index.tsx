import { Container, FooterSection, Link, Links, Title } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="globalContainer">
      <FooterSection>
        <Title>Categorias</Title>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <Title>Acesso Rápido</Title>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em breve</Link>
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
