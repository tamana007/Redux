import React from 'react'
import CartItem from './CartItem'
import { Store } from '@reduxjs/toolkit'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'


function CartContainer() {
  // let mcartItem=useSelector((store)=>store.cartItems)
  // console.log(cartItem);
  // const cartItem=useSelector((store)=>store.cart.cartItems)
  const {cartItems,amount,total}=useSelector((store)=>store.cart)
 console.log(cartItems)
 const dispatch=useDispatch();

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
  <section className='cart'>
     <header><h2>Yur Bag</h2></header>
     
     {/* {mcartItem.map((item)=>{return <p>hello</p> })} */}
     {/* {cartItem.map((item)=>{return <CartItem>{item.title}</CartItem>})} */}
     {/* I passed data through the props for children component */}
   
     <div>{cartItems.map((item)=>{return <CartItem key={item.id}{...item}/>})}</div>
     <footer>
      <hr/>
      <div className='cart-total'>
        <h4>total <span>${total}</span></h4>
      </div>
      <button onClick={()=>dispatch(clearCart())} className='btn clear-btn'>CLEAR BTN</button>
     </footer>

    
   </section>

)


}

export default CartContainer