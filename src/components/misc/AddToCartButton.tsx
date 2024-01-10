import { FC } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '@/hooks/reduxHooks'
import { addToCart } from '@/features/cart/cartSlice';
import useProducts from '@/hooks/useProducts';
import { CartItem } from '@/features/cart/cartSlice';
import type { ProductsType } from '@/features/products/productsSlice';

interface Props {
  id: number
}

const AddToCartButton: FC<Props> = ({ id }) => {
  const notify = () => toast.success('Added item to the cart!')
  const dispatch = useAppDispatch()

  const { products } = useProducts()

  const handleCartAddition = () => {
    // Find the corresponding item in the inventory
    const foundProduct = products.find(product => product.id === id) as ProductsType
    const cartItem: CartItem = {
      id: id,
      name: foundProduct.title,
      image: foundProduct.image,
      price: foundProduct.price,
      quantity: 1
    }
    dispatch(addToCart(cartItem))
    notify()
  }

  return (
    <>
      <button className='p-3 text-white duration-300 ease-out rounded-md bg-main-green hover:cursor-pointer hover:bg-green-600' onClick={handleCartAddition}>
        Add to cart
      </button>
      <ToastContainer theme='dark' autoClose={1250} />
    </>
  )
}

export default AddToCartButton