import React from 'react'
import CartItem from './CartItem'
import { Store } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


function CartContainer() {
  // let mcartItem=useSelector((store)=>store.cartItems)
  // console.log(cartItem);
  // const cartItem=useSelector((store)=>store.cart.cartItems)
  const {cartItems,amount,total}=useSelector((store)=>store.cart)
 console.log(cartItems)

 if(amount<1){

 
  return (
    <section className='cart'>
      <header>
        <h2>Your Bag</h2>
        <h4 className='empty-cart'>is currently Empty</h4>
      </header>
    </section>
    
    
  )
}
return(
  <div>
     
     cart Container
     {/* {mcartItem.map((item)=>{return <p>hello</p> })} */}
     {/* {cartItem.map((item)=>{return <CartItem>{item.title}</CartItem>})} */}
   
     <div>{cartItems.map((item)=>{return <CartItem key={item.id}/>})}</div>

     <button className='remove-btn'>CLEAR BTN</button>
   </div>

)


}

export default CartContainer