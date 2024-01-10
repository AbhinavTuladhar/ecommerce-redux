import { FC } from "react"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { DarkSelector, toggleDarkMode } from '@/features/dark/darkSlice'
import { CartSelector } from "@/features/cart/cartSlice";
import findTotalItems from "@/helpers/findTotalItems";

const NavBar: FC = () => {
  const darkModeEnabled = useAppSelector(DarkSelector)
  const cart = useAppSelector(CartSelector)
  const dispatch = useAppDispatch()

  const navItems = [
    'Home', 'About', 'Service', 'Product', 'Contact'
  ]

  const totalCartItems = findTotalItems(cart)

  const handleThemeChange = () => {
    dispatch(toggleDarkMode())
  }

  return (
    <nav className='relative border-b border-transparent shadow-lg dark:border-slate-950 dark:shadow-none'>
      <div className='flex items-center justify-between py-4 mx-auto w-container'>
        <h1 className='text-4xl font-bold'>
          <NavLink to='/'> LOGO </NavLink>
        </h1>
        <ul className='flex gap-x-6'>
          {navItems.map((nav, index) => (
            <li key={index} className='first:font-bold hover:cursor-pointer'>
              {nav}
            </li>
          ))}
        </ul>
        <div className='flex flex-row gap-x-2'>
          <button onClick={handleThemeChange}>
            <FaSun className={`${darkModeEnabled ? 'block' : 'hidden'} w-6 h-6`} />
            <FaMoon className={`${darkModeEnabled ? 'hidden' : 'block'} w-6 h-6`} />
          </button>
          <span> Cart ({totalCartItems})</span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar