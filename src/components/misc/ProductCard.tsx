import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import type { ProductsType } from '@/features/products/productsSlice'
import AddToCartButton from './AddToCartButton'

interface CardProps {
  product: ProductsType
}

const ProductCard: FC<CardProps> = ({ product }) => {
  const { id, title, price, image } = product

  return (
    <div className="flex flex-col items-center justify-between gap-y-2 rounded-lg border border-transparent p-8 shadow-lg dark:shadow-slate-900">
      <img src={image} alt={title} className="max-h-40 max-w-52" />
      <h2 className="line-clamp-2 text-center text-2xl font-bold">{title}</h2>
      <p className="text-xl">${price}</p>
      <div className="flex items-center gap-x-2">
        <NavLink
          to={`/product/${id}`}
          className="text-blue-500 duration-300 hover:cursor-pointer hover:text-red-500 hover:underline"
        >
          {' '}
          View details{' '}
        </NavLink>
        <AddToCartButton id={id} />
      </div>
    </div>
  )
}

export default ProductCard
