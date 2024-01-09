import { RootState } from "../../store";
import { createSlice } from "@reduxjs/toolkit";

interface CategoryType {
  id: string,
  name: string,
  image: string,
  creationAt: string,
  updatedAt: string
}

export interface ProductsType {
  id: string,
  title: string,
  price: number,
  description: string,
  image?: string,
  images?: string[],
  creationAt: string,
  updatedAt: string,
  category: CategoryType
}

const initialState: ProductsType[] = []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export default productsSlice.reducer

export const ProductsSelector = (state: RootState) => state.products