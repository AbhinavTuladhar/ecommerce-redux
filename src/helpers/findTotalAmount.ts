import type { CartItem } from '@/features/cart/cartSlice'

/**
 * Find the total price of all the items in the cart.
 * @param cart The array of cart items.
 * @returns The total price.
 */
const findTotalAmount = (cart: Array<CartItem>) => {
  const totalAmount = cart.reduce((acc, item) => {
    const { quantity, price } = item
    const totalProductPrice = price * quantity
    return acc + totalProductPrice
  }, 0)
  return totalAmount
}

export default findTotalAmount
