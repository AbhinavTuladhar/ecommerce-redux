import type { CartItem } from '@/features/cart/cartSlice';

const findTotalAmount = (cart: Array<CartItem>) => {
  const totalAmount = cart.reduce((acc, item) => {
    const { quantity, price } = item;
    const totalProductPrice = price * quantity;
    return acc + totalProductPrice;
  }, 0);
  return totalAmount;
};

export default findTotalAmount;
