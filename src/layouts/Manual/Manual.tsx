import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { FaArrowRotateLeft, FaArrowRotateRight } from 'react-icons/fa6'
import { Speed } from '../../components/Speed/Speed'
import { Slider } from '../../components/UI/Slider'
import { GenericModeProps } from '../../dtos/Modes'
import { sendDirection, sendSpeed, sendStatus } from '../../api/send'
import { Button } from '../../components/UI/Button'
import { Buttons } from '../../dtos/Button'
import { getEmoji } from '../../utils/getEmoji'

const isValidSpeed = (speed: number) => speed >= 2

export const Manual: React.FC<GenericModeProps> = ({ disableSwitch }) =>
{
  const [isForward, setIsForward] = useState(true)
  const [emoji, setEmoji] = useState(getEmoji())
  const [speed, setSpeed] = useState<number>(0)

  const handleSwitch = useCallback(() =>
  {
    disableSwitch(isValidSpeed(speed))
  }, [disableSwitch, speed])

  useEffect(() =>
  {
    handleSwitch()
  }, [handleSwitch, speed])

  useEffect(() =>
  {
    sendStatus(isValidSpeed(speed) ? 1 : 0)
    sendSpeed(speed)
  }, [speed])

  useEffect(() =>
  {
    sendDirection(isForward ? 1 : 0)
  }, [isForward])

  const handleSpeed = (event: ChangeEvent<HTMLInputElement>) => setSpeed(parseInt(event.target.value))
  const handleForward = () => setIsForward((prev) => !prev)
  const handleEmoji = () => setEmoji(getEmoji())

  return (
    <div className="h-full mx-7 text-center relative">
      <div className="h-[60%] flex items-center justify-center">
        <span className="text-[12rem] select-none" onClick={handleEmoji}>{emoji}</span>
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
      </div>
      <div className="absolute bottom-[20%] w-full flex justify-center">
        <Button
          icon={isForward ? <FaArrowRotateRight /> : <FaArrowRotateLeft />}
          type={Buttons.Success}
          onClick={handleForward}
        />
      </div>
    </div>
  )
}
