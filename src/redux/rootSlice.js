import Api from '../api/Api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const ListSubscriptions = createAsyncThunk('subscriptions', async() => {
  const res = await Api.getList()
  return res.data
})

export const SubscriptionsSlice = createSlice({
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

export const SubscriptionsSliceAction = SubscriptionsSlice.actions
export const SubscriptionsSliceReducer = SubscriptionsSlice.reducer