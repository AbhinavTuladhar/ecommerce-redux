import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductsType } from '@/features/products/productsSlice';

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const initialState: Array<CartItem> = [];

interface CartAddInterface {
  productId: number;
  products: Array<ProductsType>;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer: (state, payload: PayloadAction<CartItem>) => {
        const { payload: actualPayload } = payload;
        const foundCartItem = state.find((item) => item.id === actualPayload.id);
        if (foundCartItem) {
          foundCartItem.quantity++;
        } else {
          state.push(actualPayload);
        }
      },
      prepare: (payload: CartAddInterface) => {
        const { productId, products } = payload;
        const foundProduct = products.find((product) => product.id === productId) as ProductsType;
        const { image, title, price } = foundProduct;
        return {
          payload: {
            id: productId,
            image,
            name: title,
            price,
            quantity: 1,
          },
        };
      },
    },
    addQuantity: (state, payload: PayloadAction<number>) => {
      const foundCartItem = state.find((item) => item.id === payload.payload)!;
      foundCartItem.quantity++;
    },
    subtractQuantity: (state, payload: PayloadAction<number>) => {
      const { payload: productId } = payload;
      const foundCartItem = state.find((item) => item.id === payload.payload)!;
      // Remove the item from the cart if its quantity is 1 and the user decreases it further
      if (foundCartItem.quantity === 1) {
        return state.filter((item) => item.id !== productId);
      } else {
        foundCartItem.quantity--;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, addQuantity, subtractQuantity } = cartSlice.actions;

export const CartSelector = (state: RootState) => state.cart;
