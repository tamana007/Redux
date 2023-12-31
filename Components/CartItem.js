import React from 'react'
import { ChevronDown,ChevronUp } from '../icons'
// import { Dispatch } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, remove} from '../features/cart/cartSlice';

function CartItem({img,title,price,amount,id}) {
  const dispatch=useDispatch();
  const myamount=useSelector((state)=>state.cart.amount)
  console.log('here is amount:',amount);
  // const amout=dispatch
  // const amountValue=useSelector((store)=>store.CartItem.amount)

  
  return (
    <article className='cart-item'>
      <img src={img} alt={title}/>
      <div>
<h4>{title}</h4>
<h4 className='item-price'>{price}</h4>
<button onClick={()=>{dispatch(remove(id))}} className='remove-btn' >remove</button>
      </div>
      <div>
        <button onClick={()=>dispatch(increment(id))} className='amount-btn'><ChevronUp/></button>
        <p className='amount'>{amount}</p>
        
      <div><button onClick={()=>{if(amount===1){dispatch(remove(id))}else dispatch(decrement(id))}} className='amount-btn'><ChevronDown/></button>
      </div></div>
    </article>
  )
}

export default CartItem