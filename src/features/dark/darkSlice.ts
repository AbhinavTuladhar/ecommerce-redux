import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = true

const darkSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    toggleDarkMode: (state) => !state
  }
})

export default darkSlice.reducer

export const { toggleDarkMode } = darkSlice.actions

export const DarkSelector = (state: RootState) => state.dark 