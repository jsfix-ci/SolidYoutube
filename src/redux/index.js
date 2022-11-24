import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rootSliceReducer } from './rootSlice'
import reducer from './reducer'

const reducers = combineReducers({
  root: rootSliceReducer,
})

export const store = configureStore({
  reducer: reducers,
})

export default configureStore({
  reducer: {
    auths: reducer,
  },
})

