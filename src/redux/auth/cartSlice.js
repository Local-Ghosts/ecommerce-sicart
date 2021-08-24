import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mycart=[],
    totalPrice=0,
};
const cartSlices = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItemToCart:(state, action) => {
            state.mycart.push(action.item);
            state.totalPrice += action.amount;
        },
        removeItemFromCart:(state, action) => {
           state.mycart.splice(state) 
        }
    }
})