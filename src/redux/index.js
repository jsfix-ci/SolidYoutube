import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rootSliceReducer } from './rootSlice'
import reducer from "./reducer";

export default configureStore({
  reducer:{
    auths: reducer
  }
})

const reducers = combineReducers({
  root: rootSliceReducer,
})

export const store = configureStore({
  reducer: reducers,
})

