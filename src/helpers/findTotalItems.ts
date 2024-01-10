import type { CartItem } from "@/features/cart/cartSlice"


const findTotalItems = (cart: Array<CartItem>) => {
  return cart.reduce((acc, item) => acc + item.quantity, 0)
}

export default findTotalItems