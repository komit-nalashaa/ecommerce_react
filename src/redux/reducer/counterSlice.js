import { createSlice } from "@reduxjs/toolkit";
import { incrementcartAction } from "../actions/counter.action";

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState:{value: 0},
    extraReducers: (builder) => {
        builder.addCase(incrementcartAction.fulfilled,(state, action) => {
            state.value = action.payload
        });
    }
}).reducer;