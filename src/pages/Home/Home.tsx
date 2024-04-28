import { Header } from '../../layouts/Header/Header'
import { Mode } from '../../layouts/Mode/Mode'

export const Home = () =>
{
  return (
    <div className="h-screen flex flex-col bg-light-background-primary dark:bg-dark-background-primary text-light-paragraph dark:text-dark-paragraph">
      <Header />
      <Mode />
    </div>
  )
}