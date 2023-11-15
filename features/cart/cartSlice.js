import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import {cartItems} from '../../cartItems'


const initialState={
  cartItems:[],
  amount:0,
  total:0,
  isLoading:true
}

const cartSlice=createSlice({
  name:'cart',
  initialState,
 


})
// console.log(cartSlice);
// export const cartReducer= cartSlice.reducer;
export const cartReducer = cartSlice.reducer;
