import { MdLightMode, MdModeNight } from 'react-icons/md'
import { useState, useEffect } from 'react'
import './_Theme.scss'

export const Theme = () =>
{
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [darkTheme, setDarkTheme] = useState(localStorage.theme === 'dark' || (!localStorage.theme && prefersDarkTheme))

  useEffect(() =>
  {
    document.documentElement.classList.toggle('dark', darkTheme)
    localStorage.theme = darkTheme ? 'dark' : 'light'
  }, [darkTheme])

  const toggleTheme = () => { setDarkTheme((prevState) => !prevState) }

  return (
    <div className="theme-switch">
      <div className="switch" onClick={toggleTheme}>
        <input type="checkbox" checked={darkTheme} onChange={toggleTheme} />
        <span className="slider round"></span>
        <span className="light text-light-button-color"><MdLightMode /></span>
        <span className="dark text-dark-title-secondary"><MdModeNight /></span>
      </div>
    </div>
  )
}