import SectionCardTitle from '@/components/misc/SectionCardTitle'
import { CartSelector } from '@/features/cart/cartSlice'
import { useAppSelector } from '@/hooks/reduxHooks'
import CartItemRow from './CardItemRow'

const ItemList = () => {
  const cartItems = useAppSelector(CartSelector)

  return (
    <section className="proper-border rounded-lg">
      <SectionCardTitle>Items List</SectionCardTitle>
      <div className="divide-y divide-gray-300 dark:divide-gray-700">
        {cartItems.map((item, index) => (
          <CartItemRow item={item} key={index} />
        ))}
      </div>
    </section>
  )
}

export default ItemList
