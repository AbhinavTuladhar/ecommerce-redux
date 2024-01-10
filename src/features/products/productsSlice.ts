import { RootState } from "@/store";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductsAPI } from "@/services/productsAPI";

export interface ProductsType {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export interface ProductsState {
  loading: boolean,
  products: Array<ProductsType>,
  error: string | undefined
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await ProductsAPI.getProducts()
    return response
  }
)

const initialState: ProductsState = {
  loading: false,
  products: [],
  error: undefined
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Array<ProductsType>>) => {
      state.loading = false
      state.products = action.payload
    })
  },
  reducers: {}
})

export default productsSlice.reducer

export const ProductsSelector = (state: RootState) => state.products