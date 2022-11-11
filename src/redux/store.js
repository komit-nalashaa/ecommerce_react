import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { counterSlice } from "./reducer/counterSlice";
import { additionSlice } from "./reducer/additionSlice";

const middlewares = [
    ...getDefaultMiddleware ({})
]
const reducers = {
    counterSlice, additionSlice
}
export const store = configureStore({
    middleware: middlewares, 
    reducer: reducers 

})