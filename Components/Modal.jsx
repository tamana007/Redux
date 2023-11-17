import React from 'react'

function Modal() {
  return (
    <aside className='modal-container'>
      <div className='modal'> <h4>Remove all Items from your shopping cart</h4>
      <div className='btn-container'>
        <button type='btn' className=' btn confirm-btn'>CONFIRM</button>
        <button className='btn clear-btn'>CANCEL</button>
      </div>
      </div>
    </aside>
  )
}

export default Modal