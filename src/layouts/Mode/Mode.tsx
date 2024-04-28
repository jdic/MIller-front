import { MdAutoAwesome, MdTouchApp } from 'react-icons/md'
import { Button } from '../../components/UI/Button'
import { Buttons } from '../../dtos/Button'
import { useCallback, useState } from 'react'
import { Manual } from '../Manual/Manual'
import { Auto } from '../Auto/Auto'

export const Mode = () =>
{
  const [autoMode, setAutoMode] = useState(false)
  const [disable, setDisable] = useState(false)

  const handleMode = useCallback(() => setAutoMode((prev) => !prev), [])
  const handleSwitch = useCallback((status: boolean) => setDisable(status), [])

  return (
    <div className="h-full w-full flex flex-col">
      <div className="my-4">
        <Button
          text={autoMode ? 'Auto' : 'Manual'}
          className="m-auto"
          type={Buttons.Primary}
          icon={autoMode ? <MdAutoAwesome /> : <MdTouchApp />}
          onClick={handleMode}
          disabled={disable}
        />
      </div>

      {autoMode ? <Auto disableSwitch={handleSwitch} /> : <Manual disableSwitch={handleSwitch} /> }
    </div>
  )
}