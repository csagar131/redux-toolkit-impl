import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducer";


const store =  configureStore({
    reducer : { counter :counterSlice.reducer}
})

export default store;