import { SliderProps } from '../../dtos/Slider'
import React from 'react'

export const Slider: React.FC<SliderProps> = ({ defaultValue = 0, className = '', min = 0, max = 100, onChange, disabled }) =>
{
  return (
    <input
      className={`w-[90%] rounded-full bg-light-slider-background dark:bg-dark-slider-background outline-none appearance-none h-2 ${className}`}
      type="range"
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
    />
  )
}