import { NavLink } from 'react-router-dom'

const NoItemInfo = () => (
  <section className="my-4 flex flex-1 flex-col items-center justify-center gap-y-4 bg-main-green py-20 text-white">
    <h2 className="text-4xl font-bold">{`Your cart is empty! >:-(`}</h2>
    <NavLink to="/" className="text-xl">
      {' '}
      Shop now!{' '}
    </NavLink>
  </section>
)

export default NoItemInfo
