import { ButtonProps } from '../../dtos/Button'
import React from 'react'

export const Button: React.FC<ButtonProps> = ({ text = '', className = '', onClick, disabled, type, icon }) =>
{
  const CustomStyle = `bg-light-button-styles-${type} dark:bg-dark-button-styles-${type}`

  return (
    <button
      className={`py-[10px] px-[24px] flex items-center rounded-xl cursor-pointer text-light-button-color dark:text-dark-button-color ${disabled ? 'opacity-50' : ''} ${CustomStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}>

      {text}
      {icon && ( <span className={text ? 'pl-1' : ''}>{icon}</span> )}
    </button>
  )
}