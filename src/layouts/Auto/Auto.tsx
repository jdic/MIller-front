import { MdRefresh, MdPauseCircle, MdPlayCircle, MdPowerSettingsNew } from 'react-icons/md'
import { FaArrowRotateLeft, FaArrowRotateRight } from 'react-icons/fa6'
import { ChangeEvent, useEffect, useState } from 'react'
import { Speed } from '../../components/Speed/Speed'
import { Button } from '../../components/UI/Button'
import { Slider } from '../../components/UI/Slider'
import { GenericModeProps } from '../../dtos/Modes'
import { Time } from '../../components/Time/Time'
import { TimeObjectProps } from '../../dtos/Time'
import { sendDirection, sendSpeed, sendStatus } from '../../api/send'
import { Buttons } from '../../dtos/Button'

const isValidSpeed = (speed: number) => speed >= 5

const isReadyToStart = (isValidTime: boolean, speed: number, time: TimeObjectProps) =>
  isValidTime && isValidSpeed(speed) && (time.hours >= 1 || time.minutes >= 1 || time.seconds >= 1)

export const Auto: React.FC<GenericModeProps> = ({ disableSwitch }) =>
{
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [speed, setSpeed] = useState(0)
  const [isValidTime, setIsValidTime] = useState(false)
  const [isReady, setIsReady] = useState(speed >= 2 && isValidTime)
  const [isOperating, setIsOperating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [couldReset, setCouldReset] = useState(false)
  const [isForward, setIsForward] = useState(true)

  useEffect(() =>
  {
    setIsReady(isReadyToStart(isValidTime, speed, time))

    if (!isReady && isOperating || !isValidSpeed(speed)) setIsPaused(true)
  }, [isValidTime, speed])

  useEffect(() =>
  {
    sendStatus(!isPaused && isReady && isOperating === true ? 1 : 0)
  }, [isPaused, isReady, isOperating])

  useEffect(() =>
  {
    sendSpeed(speed)
  }, [speed])

  useEffect(() =>
  {
    sendDirection(isForward ? 1 : 0)
  }, [isForward])

  const handleForward = () => setIsForward((prev) => !prev)
  
  const handleSpeed = (event: ChangeEvent<HTMLInputElement>) =>
  {
    setSpeed(parseInt(event.target.value))

    if (!isReady && isOperating) setIsPaused(true)
  }

  const handleStart = () =>
  {
    setIsOperating(true)
    disableSwitch(true)
  }

  const handlePause = () =>
  {
    setIsPaused((prev) => !prev)
  }

  const handleStop = () =>
  {
    setIsOperating(false)
    setIsPaused(false)
    disableSwitch(false)
    setCouldReset(true)
  }

  const handleTime = (time: { hours: number, minutes: number, seconds: number }) =>
  {
    setTime(time)
    if (isNaN(time.hours) || isNaN(time.minutes) || isNaN(time.seconds)) setIsValidTime(false)
    else setIsValidTime(true)
  }

  return (
    <div className="auto h-full mx-7 text-center relative">
      <div className="h-[60%] flex items-center">
        <Time
          onEnd={handleStop}
          onChange={handleTime}
          start={isOperating && !isPaused && isReady}
          reset={couldReset}
          onReset={() => setCouldReset(false)}
        />
      </div>
      <div className="absolute bottom-[30%] w-full">
        <Speed
          className="text-5xl select-none font-medium"
          speed={speed}
          percentage
        />

        <Slider
          className="w-full"
          defaultValue={speed}
          onChange={handleSpeed}
        />

        <div className="actions flex justify-center relative">
          <div className="content absolute bottom-[-100px]">
            {!isOperating && (
              <Button
                text="Start"
                type={Buttons.Success}
                onClick={handleStart}
                icon={<MdPowerSettingsNew />}
                disabled={!isReady}
              /> 
            )}

            {isOperating && (
              <>
                <div className="flex">
                  <Button
                    text={isPaused ? 'Continue' : 'Pause'}
                    className="mx-2"
                    type={isPaused ? Buttons.Success : Buttons.Secondary}
                    onClick={handlePause}
                    icon={isPaused ? <MdPlayCircle /> : <MdPauseCircle />}
                    disabled={!isReadyToStart(isValidTime, speed, time)}
                  />

                  <Button
                    text="Clear"
                    className="mx-2"
                    type={Buttons.Danger}
                    onClick={handleStop}
                    icon={<MdRefresh />} 
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <Button
                    icon={isForward ? <FaArrowRotateRight /> : <FaArrowRotateLeft />}
                    type={Buttons.Success}
                    onClick={handleForward}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}