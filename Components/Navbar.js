import React from 'react'
import { CartIcon } from '../icons'
import {useSelector} from 'react-redux'
import { store } from '../store'
import CartContainer from './CartContainer'


function Navbar() {
//  const amount=useSelector((store)=>store.cart.amount)

 //We can destructure and Access too:
 const {amount}=useSelector((store)=>store.cart)
//  console.log(amount);

 const cartItem=useSelector((store)=>store.cart.cartItems)
 console.log(cartItem)
  return (
    <>
    <nav>
      <div className='nav-center'>
        
        <h3>Redux Toolkit </h3>
        <div className='nav-container'><CartIcon/>
        <div className='amount-container'>
        <p className='total-amount'>{amount}</p>
        </div>
        
        </div>
     
        
      </div>
      
    </nav>
    
    </>
    
  )
}

export default Navbar