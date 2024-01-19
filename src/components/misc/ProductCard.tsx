import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import type { ProductsType } from '@/features/products/productsSlice'
import AddToCartButton from './AddToCartButton'

interface CardProps {
  product: ProductsType
}

const ProductCard: FC<CardProps> = ({ product }) => {
  const { id, title, price, image, description } = product

  return (
    <article className="proper-border rounded-lg  border shadow-xl shadow-slate-300 dark:shadow-slate-950">
      <div className="mx-auto flex h-full w-11/12 flex-col justify-between gap-y-4 py-8">
        <div className="flex flex-1 items-center">
          <img src={image} alt={title} className="mx-auto max-h-40 max-w-52" />
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold fluid-text-lg">
              <NavLink to={`/products/${id}`} className="fancy-link line-clamp-1">
                {title}
              </NavLink>
            </h3>
            <p className="line-clamp-1"> {description} </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="fluid-text-base"> ${price} </span>
            <AddToCartButton id={id} />
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
