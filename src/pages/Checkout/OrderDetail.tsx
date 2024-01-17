import SectionCardTitle from '@/components/misc/SectionCardTitle'
import { useAppSelector } from '@/hooks/reduxHooks'
import { CartSelector, CartItem } from '@/features/cart/cartSlice'
import { ProductsSelector, ProductsType } from '@/features/products/productsSlice'
import OrderDetailCard from './OrderDetailCard'
import findTotalAmount from '@/helpers/findTotalAmount'

interface CartProductCombined extends ProductsType, CartItem {}

const OrderDetail = () => {
  const cart = useAppSelector(CartSelector)
  const products = useAppSelector(ProductsSelector)

  // 30 is for the shipping cost
  const totalAmount = findTotalAmount(cart) + 30

  // Join the carts and products on the basis of ids
  const lookupCart: CartProductCombined[] = cart.map((cartItem) => {
    const foundProduct = products.products.find((product) => product.id === cartItem.id) as ProductsType
    return { ...cartItem, ...foundProduct }
  })

  return (
    <section className="proper-border rounded-lg">
      <SectionCardTitle>Order Details</SectionCardTitle>
      <section>
        {lookupCart.map((cartItem, index) => (
          <OrderDetailCard item={cartItem} key={index} />
        ))}
      </section>
      <div className="flex w-full items-center justify-between px-2 py-4 font-bold fluid-text-lg">
        <span>Grand total</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
    </section>
  )
}

export default OrderDetail
