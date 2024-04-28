import { SpeedProps } from '../../dtos/Speed'
import React from 'react'

export const Speed: React.FC<SpeedProps> = ({ speed, className = '', percentage = false }) =>
{
  return (
    <span className={`font-medium block text-light-speed dark:text-dark-speed ${className}`}>
      {speed}
      {percentage ? (<span className="text-sm">%</span>) : null}
    </span>
  )
}