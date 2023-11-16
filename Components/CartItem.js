import React from 'react'
import { ChevronDown,ChevronUp } from '../icons'
// import { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment} from '../features/cart/cartSlice';

function CartItem({img,title,amount,price}) {
  const dispatch=useDispatch();
  const amout=dispatch
  // const amountValue=useSelector((store)=>store.CartItem.amount)

  
  return (
    <article className='cart-item'>
      <img src={img} alt={title}/>
      <div>
<h4>{title}</h4>
<h4 className='item-price'>{price}</h4>
<button className='remove-btn' >reove</button>
      </div>
      <div>
        <button onClick={()=>dispatch(increment())} className='amount-btn'><ChevronUp/></button>
        <p className='amount'>{state.amount}</p>
        
      <div><button className='amount-btn'><ChevronDown/></button>
      </div></div>
    </article>
  )
}

export default CartItem