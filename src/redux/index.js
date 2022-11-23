import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rootSliceReducer } from './rootSlice'
import { videoSliceReduser } from './videoSlice'

const reducers = combineReducers({
  root: rootSliceReducer,
  video: videoSliceReduser,
})

export const store = configureStore({
  reducer: reducers,
})
console.log(store)
