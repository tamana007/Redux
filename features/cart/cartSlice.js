import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import {cartItems} from '../../cartItems'


const initialState={
  cartItems:cartItems,
  amount:2,
  total:0,
  isLoading:true
}

const cartSlice=createSlice({
  name:'cart',
  initialState,
  reducers:{
    clearCart:(state)=>{
      // console.log('clearcart reducr called');
    state.cartItems=[];
  },
  increment:(state)=>{
    state.amount+=1
    console.log(state.amount);

  }
  }
 


})
// console.log(cartSlice);
// export const cartReducer= cartSlice.reducer;
export const cartReducer = cartSlice.reducer;
export const {clearCart,increment} =cartSlice.actions;
// export const {}=createSlice.actions;

