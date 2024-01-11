import { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { DarkSelector } from '@/features/dark/darkSlice';
import { addToCart } from '@/features/cart/cartSlice';
import useProducts from '@/hooks/useProducts';

interface Props {
  id: number
}

const AddToCartButton: FC<Props> = ({ id }) => {
  const darkModeEnabled = useAppSelector(DarkSelector)
  const notify = () => toast.success('Added item to the cart!')
  const dispatch = useAppDispatch()

  const { products } = useProducts()

  const handleCartAddition = () => {
    dispatch(addToCart({ productId: id, products }))
    notify()
  }

  return (
    <>
      <button className='p-3 text-white duration-300 ease-out rounded-md bg-main-green hover:cursor-pointer hover:bg-green-600' onClick={handleCartAddition}>
        Add to cart
      </button>
      <ToastContainer theme={`${darkModeEnabled ? 'dark' : 'light'}`} autoClose={1250} />
    </>
  )
}

export default AddToCartButton