import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { cartItems } from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // console.log('clearcart reducr called');
      state.cartItems = [];
    },
    remove: (state, action) => {
      state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload)
      console.log('rremoved');
    },
    decrement:(state,action)=>{
      state.cartItems=state.cartItems.map((item)=>{
        if(item.id===action.payload){
          return {...item,amount:item.amount-1}
        }
        
        return item
      })
    },
    increment: (state,action) => {
      // console.log(action.payload);

      const updated = state.cartItems.map((item) => {
        if(item.id === action.payload){
          return {...item, amount: item.amount +1}
        }
        return item;
      })

      return {...state, cartItems:updated}
    },
  },
});
// console.log(cartSlice);
// export const cartReducer= cartSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const { clearCart, increment, remove,decrement } = cartSlice.actions;
// export const {}=createSlice.actions;
