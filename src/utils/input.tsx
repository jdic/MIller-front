import { ChangeEvent } from 'react'

export const fixInput = (event: ChangeEvent<HTMLInputElement>, max: number, maxLenght: number) =>
{
  if (event.target.value.length >= maxLenght)
  {
    event.preventDefault()
    event.target.value = event.target.value.slice(0, -1)
  }

  else if (parseInt(event.target.value) > max)
  {
    event.target.value = max.toString()
  }
}