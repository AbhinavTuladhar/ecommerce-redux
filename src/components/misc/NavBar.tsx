import { FC } from "react"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  dark: boolean,
  toggleDarkMode: () => void
}

const NavBar: FC<NavbarProps> = ({ dark, toggleDarkMode }) => {
  const navItems = [
    'Home', 'About', 'Service', 'Product', 'Contact'
  ]

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
        <button onClick={toggleDarkMode}>
          <FaSun className={`${dark ? 'block' : 'hidden'} w-6 h-6`} />
          <FaMoon className={`${dark ? 'hidden' : 'block'} w-6 h-6`} />
        </button>
      </div>
    </nav>
  )
}

export default NavBar