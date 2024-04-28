import { ClockProps } from '../../dtos/Clock'

export const Clock: React.FC<ClockProps> = ({ className = '', onChange, disabled }) =>
{
  return (
    <input
      type="time"
      className={`m-[10%] rounded-full px-1 py-2 font-medium text-center ${className}`}
      onChange={onChange}
      disabled={disabled}
    />
  )
}