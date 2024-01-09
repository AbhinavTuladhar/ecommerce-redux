import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: string,
  name: string,
  image: string,
  price: number,
  quantity: number
}

const initialState: Array<CartItem> = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
})

export default cartSlice.reducer

export const CartSelector = (state: RootState) => state.cart