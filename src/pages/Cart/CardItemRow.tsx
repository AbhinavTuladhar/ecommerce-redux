import { FC } from 'react'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { addQuantity, subtractQuantity } from '@/features/cart/cartSlice'
import type { CartItem } from '@/features/cart/cartSlice'

interface RowProps {
  item: CartItem
}

const CartItemRow: FC<RowProps> = ({ item }) => {
  const dispatch = useAppDispatch()

  const { id, image, name, price, quantity } = item

  const handleIncrement = () => {
    dispatch(addQuantity(id))
  }

  const handleDecrement = () => {
    dispatch(subtractQuantity(id))
  }

  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center gap-x-10 gap-y-2 py-4 dark:border-slate-600 md:flex-row">
      <div className="md:w-2/12">
        <img src={image} alt={name} className="aspect-auto h-20" />
      </div>
      <div className="md:w-6/12">
        <h2 className="line-clamp-2 text-center text-lg font-bold leading-snug md:text-left">{name}</h2>
      </div>
      <div className="flex flex-col items-center justify-between gap-y-4 md:w-4/12">
        <div className="flex w-full items-center justify-between fluid-text-lg">
          <button onClick={handleDecrement}> - </button>
          <span className="font-bold"> {quantity} </span>
          <button onClick={handleIncrement}> + </button>
        </div>
        <span>
          {quantity} x ${price} = ${(quantity * price).toFixed(2)}
        </span>
      </div>
    </div>
  )
}

export default CartItemRow
