import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false

const darkSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    toggleDarkMode: (state) => !state,
    setDarkMode: () => true
  }
})

export default darkSlice.reducer

export const { toggleDarkMode, setDarkMode } = darkSlice.actions

export const DarkSelector = (state: RootState) => state.dark 