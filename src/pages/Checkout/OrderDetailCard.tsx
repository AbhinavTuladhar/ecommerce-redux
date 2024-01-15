import { FC } from 'react'
import type { CartItem } from '@/features/cart/cartSlice'
import type { ProductsType } from '@/features/products/productsSlice'

interface CombinedProduct extends ProductsType, CartItem {}

interface DetailProps {
  item: CombinedProduct
}

const OrderDetailCard: FC<DetailProps> = ({ item }) => {
  const {
    image,
    name,
    price,
    quantity,
    rating: { rate },
    category,
    title,
  } = item
  return <div>OrderDetailCard</div>
}

export default OrderDetailCard
