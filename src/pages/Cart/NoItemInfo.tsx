import { NavLink } from 'react-router-dom'

const NoItemInfo = () => (
  <section className="my-4 flex flex-1 flex-col items-center justify-center gap-y-4 bg-lightmode-green px-4 py-20 text-center text-white dark:bg-darkmode-green">
    <h2 className="font-bold fluid-text-4xl">
      <span> Your cart is empty! </span>
      <span className="whitespace-nowrap"> {`>:-(`}</span>
    </h2>
    <NavLink to="/" className="fluid-text-xl">
      {' '}
      Shop now!{' '}
    </NavLink>
  </section>
)

export default NoItemInfo
