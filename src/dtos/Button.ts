export enum Buttons
{
  Danger = 'danger',
  Success = 'success',
  Primary = 'primary',
  Secondary = 'secondary'
}

export interface ButtonProps
{
  text?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  type: Buttons
  icon?: JSX.Element
}