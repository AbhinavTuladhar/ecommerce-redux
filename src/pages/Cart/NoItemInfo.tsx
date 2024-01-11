import { NavLink } from 'react-router-dom'

const NoItemInfo = () => (
  <section className="bg-lightmode-green dark:bg-darkmode-green my-4 flex flex-1 flex-col items-center justify-center gap-y-4 px-4 py-20 text-center text-white">
    <h2 className="fluid-text-4xl font-bold">
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
