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
    addToCart: {
      reducer: (state, payload: PayloadAction<CartItem>) => {
        const { payload: actualPayload } = payload
        const foundCartItem = state.find(item => item.id === actualPayload.id)
        if (foundCartItem) {
          foundCartItem.quantity++
        } else {
          state.push(actualPayload)
        }
      },
      prepare: (payload: CartAddInterface) => {
        const { productId, products } = payload
        const foundProduct = products.find(product => product.id === productId) as ProductsType
        const { image, title, price } = foundProduct
        return {
          payload: {
            id: productId,
            image,
            name: title,
            price,
            quantity: 1
          }
        }
      },
    }
  }
})

export default cartSlice.reducer

export const { addToCart } = cartSlice.actions

export const CartSelector = (state: RootState) => state.cart