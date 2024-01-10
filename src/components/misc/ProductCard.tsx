import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import type { ProductsType } from '@/features/products/productsSlice'
import AddToCartButton from './AddToCartButton';

interface CardProps {
  product: ProductsType
}

const ProductCard: FC<CardProps> = ({ product }) => {
  const { id, title, price, image } = product

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
        <NavLink to={`/product/${id}`} className='text-blue-500 duration-300 hover:underline hover:text-red-500 hover:cursor-pointer'> View details </NavLink>
        <AddToCartButton id={id} />
      </div>
    </div>
  )
}

export default ProductCard