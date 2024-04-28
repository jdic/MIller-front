export interface TimeObjectProps
{
  hours: number
  minutes: number
  seconds: number
}

export interface TimeProps
{
  onChange: ({ hours, minutes, seconds }: TimeObjectProps) => void
  start?: boolean
  onEnd?: () => void
  reset?: boolean
  onReset?: () => void
}

export type TimeType = 'Hours' | 'Minutes' | 'Seconds'