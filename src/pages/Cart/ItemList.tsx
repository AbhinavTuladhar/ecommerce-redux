import { FC } from "react"
import SectionCardTitle from "@/components/misc/SectionCardTitle"
import { useAppSelector } from "@/hooks/reduxHooks"
import { CartSelector } from "@/features/cart/cartSlice"
import type { CartItem } from "@/features/cart/cartSlice"

interface RowProps {
  item: CartItem
}


const CartItemRow: FC<RowProps> = ({ item }) => {
  const { image, name, price, quantity } = item

  return (
    <div className='w-11/12 py-4 border-b border-gray-300 dark:border-slate-600 mx-auto flex flex-row gap-x-10 items-center'>
      <div className='w-2/12'><img src={image} alt={name} className='h-20 aspect-auto' /></div>
      <div className='w-6/12'>
        <h2 className='text-xl font-bold'>
          {name}
        </h2>
      </div>
      <div className='w-4/12 flex flex-col justify-between items-center gap-y-4'>
        <div className='w-full flex justify-between items-center text-lg'>
          <button> - </button>
          <span className='font-bold'> {quantity} </span>
          <button> + </button>
        </div>
        <span> {quantity} x ${price} = ${quantity * price} </span>
      </div>
    </div>
  )
}

const ItemList = () => {
  const cartItems = useAppSelector(CartSelector)

  return (
    <section className="border border-gray-300 dark:border-white">
      <SectionCardTitle>
        Items List
      </SectionCardTitle>
      {cartItems.map((item, index) => (
        <CartItemRow item={item} key={index} />
      ))}
    </section>
  )
}

export default ItemList