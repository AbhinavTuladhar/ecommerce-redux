import SectionCardTitle from '@/components/misc/SectionCardTitle'
import { useAppSelector } from '@/hooks/reduxHooks'
import { CartSelector } from '@/features/cart/cartSlice'
import CartItemRow from './CardItemRow'

const ItemList = () => {
  const cartItems = useAppSelector(CartSelector)

  return (
    <section className="proper-border">
      <SectionCardTitle>Items List</SectionCardTitle>
      {cartItems.map((item, index) => (
        <CartItemRow item={item} key={index} />
      ))}
    </section>
  )
}

export default ItemList
