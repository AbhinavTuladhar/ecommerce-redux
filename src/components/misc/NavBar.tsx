const NavBar = () => {
  const navItems = [
    'Home', 'About', 'Service', 'Product', 'Contact'
  ]

  return (
    <nav className='px-6 py-4 flex justify-between items-center border-b border-slate-950 shadow-lg'>
      <h1 className='text-4xl font-bold'> LOGO </h1>
      <ul className='flex gap-x-6'>
        {navItems.map((nav, index) => (
          <li key={index} className='first:font-bold hover:cursor-pointer'>
            {nav}
          </li>
        ))}
      </ul>
      <span>
        Cart (0)
      </span>
    </nav>
  )
}

export default NavBar