import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: 'Subscriptions',
  initialState: {
    data: []
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const rootSliceAction = rootSlice.actions
export const rootSliceReducer = rootSlice.reducer