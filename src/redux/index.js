import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from '../slices/userSlice'
import reducer from './reducer'
import { rootSliceReducer } from './rootSlice'

const reducers = combineReducers({
  root: rootSliceReducer,
  auths: reducer,
  user: userSlice,
})

export const store = configureStore({
  reducer: reducers,
})
