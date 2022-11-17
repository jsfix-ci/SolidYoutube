import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'root',
  initialState: {},
  reducers: {
    sRoot: () => {},
  },
})

export const rootSliceAction = rootSlice.actions
export const rootSliceReducer = rootSlice.reducer
