import { NormalButton, LinkButton } from './styles'

export type Props = {
  children: string
  title: string
  onClick?: () => void
  to?: string
  type: 'button' | 'link'
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  children,
  title,
  onClick,
  to,
  type,
  variant = 'primary',
  disabled
}: Props) => {
  if (type === 'button') {
    return (
      <NormalButton
        $variant={variant}
        type="button"
        title={title}
        onClick={onClick}
        disabled={disabled}
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
