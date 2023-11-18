import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Store } from '@reduxjs/toolkit'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart,calculateTotal } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'


function CartContainer() {
 
  const {cartItems,amount,total}=useSelector((state)=>state.cart)
  // const {openModal}=useSelector((store)=>store.modal)
//  console.log('total',total)
 const dispatch=useDispatch();

 useEffect(()=>{
  dispatch(calculateTotal())
 },[cartItems]);

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
        <h4>{total.toFixed(2)} <span>${calculateTotal}</span></h4>
      </div>
      <button onClick={()=>dispatch(openModal())} className='btn clear-btn'>CLEAR BTN</button>
     </footer>

    
   </section>

)


}

export default CartContainer