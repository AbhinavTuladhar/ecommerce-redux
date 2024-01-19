import type { CartItem } from '@/features/cart/cartSlice'

/**
 * Find the total number of items in the cart.
 *
 * It considers the quantity rather than the array length
 * @param cart The array of cart items
 * @returns The total quantity of items in the cart.
 */
const findTotalItems = (cart: Array<CartItem>) => {
  return cart.reduce((acc, item) => acc + item.quantity, 0)
}

export default findTotalItems
