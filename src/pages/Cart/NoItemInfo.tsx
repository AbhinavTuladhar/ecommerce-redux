import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const NoItemInfo = () => (
  <section className="my-4 flex flex-1 flex-col items-center justify-center gap-y-4 bg-lightmode-green px-4 py-20 text-center text-white dark:bg-darkmode-green">
    <h2 className="font-bold fluid-text-4xl">
      <span> Your cart is empty! </span>
      <span className="whitespace-nowrap"> {`>:-(`}</span>
    </h2>
    <NavLink to="/" className="fluid-text-xl">
      <button className="flex flex-row items-center gap-x-4 rounded-lg bg-slate-600 p-4 duration-500 hover:bg-slate-500 dark:bg-slate-900 hover:dark:bg-slate-800">
        <FaArrowLeft />
        <span> Continue shopping </span>
      </button>
    </NavLink>
  </section>
)

export default NoItemInfo
