import { FC } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { DarkSelector } from '@/features/dark/darkSlice'
import { addToCart } from '@/features/cart/cartSlice'
import useProducts from '@/hooks/useProducts'

interface Props {
  id: number
}

const AddToCartButton: FC<Props> = ({ id }) => {
  const darkModeEnabled = useAppSelector(DarkSelector)
  const notify = () =>
    toast.success('Added item to the cart!', {
      toastId: id,
    })
  const dispatch = useAppDispatch()

  const { products } = useProducts()

  const handleCartAddition = () => {
    dispatch(addToCart({ productId: id, products }))
    notify()
  }

  return (
    <div>
      <button
        className="rounded-md bg-lightmode-green p-3 text-white duration-300 ease-out hover:cursor-pointer hover:bg-green-500 dark:bg-darkmode-green dark:hover:bg-green-600"
        onClick={handleCartAddition}
      >
        Add to cart
      </button>
      <ToastContainer theme={`${darkModeEnabled ? 'dark' : 'light'}`} autoClose={1250} />
    </div>
  )
}

export default AddToCartButton
