import { RootState } from "@/store";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductsType } from '@/features/products/productsSlice'

export interface CartItem {
  id: number,
  name: string,
  image: string,
  price: number,
  quantity: number
}

const initialState: Array<CartItem> = []

interface CartAddInterface {
  productId: number,
  products: Array<ProductsType>
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, payload: PayloadAction<CartAddInterface>) => {
      const { payload: { productId, products } } = payload
      const foundProduct = products.find(product => product.id === productId) as ProductsType

      // Check if the product is already in the cart. If yes, the increment quantity by 1 else set quantity to 1.
      const foundCartItem = state.find(item => item.id === productId)
      if (foundCartItem) {
        foundCartItem.quantity++
      } else {
        const newItem: CartItem = {
          id: productId,
          image: foundProduct.image,
          name: foundProduct.title,
          price: foundProduct.price,
          quantity: 1
        }
        state.push(newItem)
      }
    }
  }
})

export default cartSlice.reducer

export const { addToCart } = cartSlice.actions

export const CartSelector = (state: RootState) => state.cart