import React, { ChangeEvent, useEffect, useState } from 'react'
import { TimeProps, TimeType } from '../../dtos/Time'
import { fixInput } from '../../utils/input'

export const Time: React.FC<TimeProps> = ({ onChange, start, onEnd, reset, onReset }) =>
{
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })

  const separator = `text-sm mx-1 font-semibold`
  const input = `bg-[#CCCCCC] text-center py-5 rounded-md w-[30%]`

  useEffect(() =>
  {
    let interval: any | null = null

    const handleInterval = () =>
    {
      setTime((prev) =>
      {
        const newTime = { ...prev }

        if (newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds <= 1)
        {
          clearInterval(interval!)
          if (onEnd) onEnd()
        }

        if (newTime.seconds === 0)
        {
          if (newTime.minutes === 0)
          {
            if (newTime.hours === 0)
            {
              clearInterval(interval!)

              if (onEnd) onEnd()
              return { hours: 0, minutes: 0, seconds: 0 }
            }

            else
            {
              newTime.hours -= 1
              newTime.minutes = 59
              newTime.seconds = 59
            }
          }
          
          else
          {
            newTime.minutes -= 1
            newTime.seconds = 59
          }
        } 
        
        else
        {
          newTime.seconds -= 1
        }

        return newTime
      })
    }

    if (reset)
    {
      clearInterval(interval!)
      setTime({ hours: 0, minutes: 0, seconds: 0 })
      if (onEnd) onEnd()
      if (onReset) onReset()
    }

    if (start)
    {
      interval = setInterval(handleInterval, 1000)
    }

    return () => clearInterval(interval!)
  }, [start, reset, onEnd, onReset])

  useEffect(() =>
  {
    onChange(time)
  }, [time, onChange])

  const handleChange = (event: ChangeEvent<HTMLInputElement>, type: TimeType) =>
  {
    fixInput(event, parseInt(event.target.max, 10), 3)
    const newValue = parseInt(event.target.value, 10)

    setTime((prev) =>
    ({
      ...prev,
      [type.toLowerCase()]: newValue,
    }))
  }

  return (
    <div className="w-full my-5 text-light-title-primary">
      <div className="flex justify-center items-center m-auto text-5xl">
        <input
          type="number"
          className={input}
          min={0}
          max={24}
          onChange={(e) => handleChange(e, 'Hours')}
          value={time.hours}
        />
        <span className={separator}>:</span>
        <input
          type="number"
          className={input}
          min={0}
          max={60}
          onChange={(e) => handleChange(e, 'Minutes')}
          value={time.minutes}
        />
        <span className={separator}>:</span>
        <input
          type="number"
          className={input}
          min={1}
          max={60}
          onChange={(e) => handleChange(e, 'Seconds')}
          value={time.seconds}
        />
      </div>
    </div>
  )
}