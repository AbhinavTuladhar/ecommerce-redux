import { FC } from 'react'
import type { ProductsType } from '@/features/products/productsSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CardProps {
  product: ProductsType
}

const ProductCard: FC<CardProps> = ({ product }) => {
  const { id, title, category, price, image, rating: { rate, count } } = product

  const notify = () => toast.success('Added item to the cart!')

  return (
    <div className='flex flex-col items-center justify-between p-8 border border-green-300 rounded-lg shadow-lg dark:shadow-none gap-y-2'>
      <img src={image} alt={title} className='max-w-52 max-h-40' />
      <h2 className='text-2xl font-bold text-center line-clamp-2'>
        {title}
      </h2>
      <p className='text-xl'>
        ${price}
      </p>
      <div className='flex items-center gap-x-2'>
        <p className='text-blue-500 duration-300 hover:underline hover:text-red-500 hover:cursor-pointer'> View details </p>
        <button className='p-3 text-white duration-300 ease-out rounded-md bg-main-green hover:cursor-pointer hover:bg-green-600' onClick={notify}>
          Add to cart
          <ToastContainer theme='dark' autoClose={1250} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard