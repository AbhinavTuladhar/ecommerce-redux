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
    <div className='flex flex-col items-center justify-center w-11/12 py-4 mx-auto border-b border-gray-300 dark:border-slate-600 md:flex-row gap-x-10 gap-y-2'>
      <div className='md:w-2/12'><img src={image} alt={name} className='h-20 aspect-auto' /></div>
      <div className='md:w-6/12'>
        <h2 className='text-xl font-bold text-center md:text-left'>
          {name}
        </h2>
      </div>
      <div className='flex flex-col items-center justify-between md:w-4/12 gap-y-4'>
        <div className='flex items-center justify-between w-full text-lg'>
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