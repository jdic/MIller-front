import { ChangeEvent } from 'react'

export interface SliderProps
{
  defaultValue?: number
  min?: number
  max?: number
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}