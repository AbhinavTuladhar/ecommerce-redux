import { RootState } from "@/store";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number,
  name: string,
  image: string,
  price: number,
  quantity: number
}

const initialState: Array<CartItem> = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, payload: PayloadAction<CartItem>) => {
      state.push(payload.payload)
    }
  }
})

export default cartSlice.reducer

export const { addToCart } = cartSlice.actions

export const CartSelector = (state: RootState) => state.cart