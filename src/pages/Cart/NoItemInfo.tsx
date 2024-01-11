import { NavLink } from 'react-router-dom'

const NoItemInfo = () => (
  <section className='flex flex-col gap-y-4 py-20 flex-1 bg-main-green my-4 text-white justify-center items-center'>
    <h2 className='text-4xl font-bold'>
      {`Your cart is empty! >:-(`}
    </h2>
    <NavLink to='/' className='text-xl'> Shop now! </NavLink>
  </section>
)

export default NoItemInfo