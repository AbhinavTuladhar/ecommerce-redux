import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '@/store'
import getInitialMode, { storageKey } from '@/helpers/getInitialMode'

const initialSystemState = getInitialMode()

const initialState: boolean = initialSystemState === 'dark'

const darkSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      // Store the opposite state
      const stateToStore = state ? 'light' : 'dark'
      localStorage.setItem(storageKey, stateToStore)
      return !state
    },
  },
})

export default darkSlice.reducer

export const { toggleDarkMode } = darkSlice.actions

export const DarkSelector = (state: RootState) => state.dark
