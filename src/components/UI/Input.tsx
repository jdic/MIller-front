import React from 'react'
import { InputProps } from '../../dtos/Input'

export const Input: React.FC<InputProps> = ({ className = '', type = 'text', placeholder = '', onChange }) =>
{
  return (
    <input
      className={` ${className}`}    
      type={type}
      onChange={(e) => onChange ? onChange(e.target.value) : () => {}}
      placeholder={placeholder}
    />
  )
}