import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0,
    toggleCounter : false
}

export const counterSlice =  createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        toggle(state){
            state.toggleCounter = !state.toggleCounter
        }
    }
})

export const counterActions =  counterSlice.actions




