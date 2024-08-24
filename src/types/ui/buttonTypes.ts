export type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  isDisabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}
