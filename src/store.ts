import { configureStore } from '@reduxjs/toolkit'
import ProductsReducer from '@/features/products/productsSlice'
import CartReducer from '@/features/cart/cartSlice'
import DarkReducer from '@/features/dark/darkSlice'

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
    dark: DarkReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
