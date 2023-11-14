// import {configureStore}from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';
import{cartReducer} from './features/cart/cartSlice'
// import {cartSlice} from './features/cart/cartSlice'

export const store=configureStore({
  reducer:{
cart:cartReducer
  }
})