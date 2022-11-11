import { createSlice } from "@reduxjs/toolkit";
import { decrementAction, incrementAction } from "../actions/counter.action";

export const additionSlice = createSlice({
    name: 'additionSlice',
    initialState:{value1: 0},
    extraReducers: (builder) => {
        builder.addCase(incrementAction.fulfilled,(state, action) => {
            state.value1 = action.payload
        });
        builder.addCase(decrementAction.fulfilled,(state, action) => {
            state.value1 = action.payload
        })
    }
}).reducer;