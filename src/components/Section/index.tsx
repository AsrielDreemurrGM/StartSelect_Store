import { Container, Title } from './styles'

export type Props = {
  children: JSX.Element
  $background: 'black' | 'gray'
  title: string
}

const Section = ({ title, $background, children }: Props) => (
  <Container $background={$background}>
    <div className="globalContainer">
      <Title>{title}</Title>
      {children}
    </div>
  </Container>
)

export default Section
