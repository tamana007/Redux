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
    calculateTotal:(state)=>{
//       state.cart.total=3000;
// console.log('from reducer',state.total);
let amount=0;
let total=0;
state.cartItems.forEach((item=>{amount+=item.amount

total+=item.amount*item.price
})
)
state.amount=amount;
state.total=total;
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
        if(state.amount===0){
          state.cartItems=[]
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
export const { clearCart, increment, remove,decrement,calculateTotal } = cartSlice.actions;
// export const {}=createSlice.actions;
