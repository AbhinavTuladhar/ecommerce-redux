import { FC } from "react"

interface NavbarProps {
  toggleDarkMode: () => void
}

const NavBar: FC<NavbarProps> = ({ toggleDarkMode }) => {
  const navItems = [
    'Home', 'About', 'Service', 'Product', 'Contact'
  ]

  return (
    <nav className='relative w-full flex items-center justify-between py-4 px-9 border-transparent border-b dark:border-slate-950 shadow-2xl dark:shadow-none'>
      <h1 className='text-4xl font-bold'> LOGO </h1>
      <ul className='flex gap-x-6'>
        {navItems.map((nav, index) => (
          <li key={index} className='first:font-bold hover:cursor-pointer'>
            {nav}
          </li>
        ))}
      </ul>
      <button onClick={toggleDarkMode}>
        dark
      </button>
      {/* <span>
        Cart (0)
      </span> */}
    </nav>
  )
}

export default NavBar