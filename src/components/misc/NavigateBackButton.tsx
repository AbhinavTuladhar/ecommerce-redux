import { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

interface ButtonProps {
  children: ReactNode
}

const NavigateBackButton: FC<ButtonProps> = ({ children }) => {
  return (
    <NavLink to="/">
      <button className="flex items-center gap-x-2 rounded-lg bg-pink-900 px-6 py-4 font-bold text-white duration-500 fluid-text-lg hover:bg-pink-800">
        <FaArrowLeft className="h-6 w-6" />
        <span> {children} </span>
      </button>
    </NavLink>
  )
}

export default NavigateBackButton
