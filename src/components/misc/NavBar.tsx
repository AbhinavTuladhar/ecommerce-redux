import { FC, useState, useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '@/assets/logo.png'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { DarkSelector, toggleDarkMode } from '@/features/dark/darkSlice'
import { CartSelector } from '@/features/cart/cartSlice'
import findTotalItems from '@/helpers/findTotalItems'
import Accordion from '@/components/layouts/Accordion'

const NavBar: FC = () => {
  const darkModeEnabled = useAppSelector(DarkSelector)
  const cart = useAppSelector(CartSelector)
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  // Roll up navbar on small screens whenever location changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItemsNew = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/products', text: 'Products' },
    { to: '/contact', text: 'Contact' },
  ]

  const totalCartItems = findTotalItems(cart)

  const handleThemeChange = () => {
    dispatch(toggleDarkMode())
  }

  const navLinkStyle = 'flex items-center py-2 hover:cursor-pointer'

  const navLinks = navItemsNew.map((item, index) => (
    <li key={index} className="">
      <NavLink
        to={item.to}
        className={(options) => {
          const { isActive } = options
          return isActive ? `${navLinkStyle} font-bold` : navLinkStyle
        }}
      >
        {item.text}
      </NavLink>
    </li>
  ))

  const cartLink = (
    <NavLink
      to="/cart"
      className={(options) => {
        const { isActive } = options
        return isActive ? 'font-bold' : ''
      }}
    >
      Cart ({totalCartItems})
    </NavLink>
  )

  return (
    <nav className="relative flex flex-wrap border-b border-transparent shadow-lg dark:border-slate-950 dark:shadow-none">
      <div className="mx-auto flex w-container flex-wrap items-center justify-between py-4">
        <h1 className="font-bold fluid-text-4xl">
          <NavLink to="/">
            <img src={Logo} alt="logo" className="h-9 w-12" />
          </NavLink>
        </h1>

        {/* For large-screen links */}
        <ul className="hidden xs:flex xs:flex-row xs:gap-x-4">{navLinks}</ul>

        <div className="flex flex-row gap-x-2">
          <button onClick={handleThemeChange}>
            <FaSun className={`${darkModeEnabled ? 'hidden' : 'block'} h-6 w-6`} />
            <FaMoon className={`${darkModeEnabled ? 'block' : 'hidden'} h-6 w-6`} />
          </button>
          <span className="hidden xs:block">{cartLink}</span>
          <GiHamburgerMenu
            className="block h-6 w-6 hover:cursor-pointer xs:hidden"
            onClick={() => setIsOpen((state) => !state)}
          />
        </div>

        {/* Mobile links */}
        <div className="block w-full xs:hidden">
          <Accordion visible={isOpen}>
            <ul className="gap flex flex-col justify-center divide-y border-b">
              {navLinks}
              <li className="py-2">{cartLink}</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
