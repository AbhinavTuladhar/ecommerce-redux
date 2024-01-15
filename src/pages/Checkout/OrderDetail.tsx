import SectionCardTitle from '@/components/misc/SectionCardTitle'
import { useAppSelector } from '@/hooks/reduxHooks'
import { CartSelector, CartItem } from '@/features/cart/cartSlice'
import { ProductsSelector, ProductsType } from '@/features/products/productsSlice'
import OrderDetailCard from './OrderDetailCard'

interface CartProductCombined extends ProductsType, CartItem {}

const OrderDetail = () => {
  const cart = useAppSelector(CartSelector)
  const products = useAppSelector(ProductsSelector)

  // Join the carts and products on the basis of ids
  const lookupCart: CartProductCombined[] = cart.map((cartItem) => {
    const foundProduct = products.products.find((product) => product.id === cartItem.id) as ProductsType
    return { ...cartItem, ...foundProduct }
  })

  return (
    <section className="proper-border">
      <SectionCardTitle>Order Details</SectionCardTitle>
      {lookupCart.map((cartItem, index) => (
        <OrderDetailCard item={cartItem} key={index} />
      ))}
    </section>
  )
}

export default OrderDetail
