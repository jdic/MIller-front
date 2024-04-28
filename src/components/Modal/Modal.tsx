import React from 'react'
import { ModalProps } from '../../dtos/Modal'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import { Buttons } from '../../dtos/Button'

export const Modal: React.FC<ModalProps> = ({ className = '', isOpen, onClose }) =>
{
  const background = 'bg-light-button-background-secondary dark:bg-dark-background-primary'

  return (
    <div className={` flex flex-col justify-center items-center rounded-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[999] w-min-[40%] ${background} ${className}`}>
      {isOpen && (
        <>
          <Input />
          <div className="flex">
            <Button
              type={Buttons.Success}
              className="mx-2 text-xl"
              text="Submit"
            />
            <Button
              type={Buttons.Secondary}
              className="mx-2 text-xl"
              text="Close"
              onClick={onClose}
            />
          </div>
        </>
      )}
    </div>
  )
}