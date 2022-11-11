import { createAsyncThunk } from "@reduxjs/toolkit";

export const incrementcartAction = createAsyncThunk(
    'incrementcart', async(value) =>{
    return value+1;
})

export const decrementAction = createAsyncThunk(
    'decrement', async(value1) =>{
    return value1-1;
})

export const incrementAction = createAsyncThunk(
    'increment', async(value1) =>{
    return value1+1;
})