const NavBar = () => {
  const navItems = [
    'Home', 'About', 'Service', 'Product', 'Contact'
  ]

  return (
    <nav className='flex items-center justify-between py-4 mx-auto border-b shadow-2xl w-container border-slate-950'>
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