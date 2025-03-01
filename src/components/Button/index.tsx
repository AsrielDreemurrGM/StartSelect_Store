import { NormalButton, LinkButton } from './styles'

type Props = {
  children: string
  title: string
  to?: string
  type: 'button' | 'link'
  onClick?: () => void
}

const Button = ({ children, title, to, type, onClick }: Props) => {
  if (type === 'button') {
    return (
      <NormalButton type="button" title={title} onClick={onClick}>
        {children}
      </NormalButton>
    )
  }

  return (
    <LinkButton to={to as string} type="button" title={title} onClick={onClick}>
      {children}
    </LinkButton>
  )
}

export default Button
