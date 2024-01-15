import { FC, useState } from 'react'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { DarkSelector, toggleDarkMode } from '@/features/dark/darkSlice'
import { CartSelector } from '@/features/cart/cartSlice'
import findTotalItems from '@/helpers/findTotalItems'

const NavBar: FC = () => {
  const darkModeEnabled = useAppSelector(DarkSelector)
  const cart = useAppSelector(CartSelector)
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(true)

  const navItems = ['Home', 'About', 'Service', 'Product', 'Contact']

  const totalCartItems = findTotalItems(cart)

  const handleThemeChange = () => {
    dispatch(toggleDarkMode())
  }

  return (
    <nav className="relative flex flex-wrap border-b border-transparent shadow-lg dark:border-slate-950 dark:shadow-none">
      <div className="mx-auto flex w-container flex-wrap items-center justify-between py-4">
        <h1 className="font-bold fluid-text-4xl">
          <NavLink to="/"> LOGO </NavLink>
        </h1>
        <ul
          className={`${
            isOpen
              ? 'order-last flex w-full flex-col gap-y-2 text-center xs:order-none xs:w-auto xs:flex-row'
              : 'hidden'
          } flex-wrap gap-x-6 xs:flex xs:flex-row`}
        >
          {navItems.map((nav, index) => (
            <li key={index} className="first:font-bold hover:cursor-pointer">
              {nav}
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-x-2">
          <button onClick={handleThemeChange}>
            <FaSun className={`${darkModeEnabled ? 'hidden' : 'block'} h-6 w-6`} />
            <FaMoon className={`${darkModeEnabled ? 'block' : 'hidden'} h-6 w-6`} />
          </button>
          <NavLink to="/cart" className="hidden xs:block">
            Cart ({totalCartItems})
          </NavLink>
          <GiHamburgerMenu
            className="block h-6 w-6 hover:cursor-pointer xs:hidden"
            onClick={() => setIsOpen((state) => !state)}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
