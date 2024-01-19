import { FC } from 'react'
import { MdClose } from 'react-icons/md'

import StarRating from '@/components/misc/StarRating'
import { CartItem, removeItem } from '@/features/cart/cartSlice'
import type { ProductsType } from '@/features/products/productsSlice'
import { useAppDispatch } from '@/hooks/reduxHooks'

interface CombinedProduct extends ProductsType, CartItem {}

interface DetailProps {
  item: CombinedProduct
}

const OrderDetailCard: FC<DetailProps> = ({ item }) => {
  const {
    id,
    image,
    price,
    quantity,
    rating: { rate },
    title,
  } = item

  const dispatch = useAppDispatch()

  const handleRemoval = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className="flex gap-x-4 px-2 py-4">
      <div className="w-full max-w-12">
        <img src={image} />
      </div>
      <div className="-mt-2 flex-1 space-y-1">
        <h2 className="line-clamp-3 font-bold leading-tight fluid-text-sm">{title}</h2>
        <div className="-translate-x-[12.5%] scale-75">
          <StarRating rating={rate} />
        </div>
        <span>${(price * quantity).toFixed(2)}</span>
        <div className="flex justify-between">
          <button
            className="flex items-center gap-x-0.5 text-red-500 hover:cursor-pointer"
            onClick={() => handleRemoval()}
          >
            <MdClose className="h-4 w-4" />
            <span> Remove </span>
          </button>
          <span> {quantity} pcs. </span>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailCard
