import React from 'react'
import CartItem from './CartItem'
import { Store } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


function CartContainer() {
  const cartItem=useSelector((store)=>store.cartItems)
  console.log(cartItem);

  return (
    <div>
      {cartItem.map((item)=>{return <CartItem>{item.title}</CartItem>})}
    </div>
  )

}

export default CartContainer