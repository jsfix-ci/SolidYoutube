import { createSlice } from "@reduxjs/toolkit";


const rootSlice = createSlice({
    name: "root",
    initialState: {},
    reducers: {
        sRoot: (state, action) => {}
    }
})

export const rootSliceAction = rootSlice.actions
export const rootSliceReducer = rootSlice.reducer