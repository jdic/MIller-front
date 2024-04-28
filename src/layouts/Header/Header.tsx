import { Theme } from '../../components/UX/Theme/Theme'
import { FaServer } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Input } from '../../components/UI/Input'
import { setIp, getIp } from '../../utils/ip'

export const Header = () =>
{
  const [showInput, setShowInput] = useState(false)

  const handleShowInput = () => setShowInput((prev) => !prev)
  const handleAddress = (address: string) => setIp(address)

  return (
    <header className="flex-jb-aic py-2 px-4">
      <div className="title text-light-title-primary dark:text-dark-title-primary">
        <h1 className="text-2xl font-semibold">Miller 🍆</h1>
      </div>
      <div className="flex items-center text-xl">
        <span>
          <div onClick={handleShowInput}>
            <FaServer />
          </div>
          {showInput && (
            <div className="absolute right-[15%] top-[40px] w-[40%] rounded-md p-2 bg-light-button-background-secondary">
              <p className="text-base font-medium">Target</p>
              <Input 
                className="w-full rounded-md text-base px-1"
                placeholder={getIp()}
                onChange={handleAddress}
              />
            </div>
          )}
        </span>
        <Link to="https://www.github.com/jdic/Miller" className="px-2" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Link>
        <Theme />
      </div>
    </header>
  )
}