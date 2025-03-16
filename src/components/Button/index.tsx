import { NormalButton, LinkButton } from './styles'

export type Props = {
  children: string
  title: string
  onClick?: () => void
  to?: string
  type: 'button' | 'link'
  variant?: 'primary' | 'secondary'
}

const Button = ({
  children,
  title,
  onClick,
  to,
  type,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <NormalButton
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
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
