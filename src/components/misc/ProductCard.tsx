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
    <article className="rounded-lg border border-transparent shadow-lg dark:shadow-slate-900">
      <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-between gap-y-2 py-8">
        <img src={image} alt={title} className="max-h-40 max-w-52" />
        <h2 className="line-clamp-2 text-center font-bold fluid-text-xl">{title}</h2>
        <p className="fluid-text-lg">${price}</p>
        <div className="flex w-full items-center justify-center gap-x-4 px-4 sm:justify-between sm:gap-x-0">
          <NavLink
            to={`/product/${id}`}
            className="text-blue-500 duration-300 hover:cursor-pointer hover:text-red-500 hover:underline"
          >
            View details
          </NavLink>
          <AddToCartButton id={id} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
