import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { SubscriptionsSlice, SubscriptionsSliceReducer } from './rootSlice'

const reducers = combineReducers({
  root: SubscriptionsSlice,
})

export const store = configureStore({
  reducer: SubscriptionsSliceReducer,
})