import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../api/Api'

export const fethVideo = createAsyncThunk('video/setVideo', async () => {
  const res = await Api.getVideo()
  return res.data
})
const videoSlice = createSlice({
  name: 'video',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fethVideo.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

export const videoSliceAction = videoSlice.actions
export const videoSliceReduser = videoSlice.reducer
