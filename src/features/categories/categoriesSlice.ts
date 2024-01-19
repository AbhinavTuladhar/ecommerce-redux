import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/store'
import { CategoriesAPI } from '@/services/categoriesAPI'

export interface CategoriesState {
  loading: boolean
  categories: Array<string>
  error: string | undefined
}

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await CategoriesAPI.getCategories()
  return response
})

const initialState: CategoriesState = {
  loading: false,
  categories: [],
  error: undefined,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false
      state.categories = []
      state.error = action.error.message
    })
    builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Array<string>>) => {
      state.loading = false
      state.categories = action.payload
    })
  },
  reducers: {},
})

export default categoriesSlice.reducer

export const CategoriesSelector = (state: RootState) => state.categories
