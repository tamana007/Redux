import React from 'react'
import { CartIcon } from '../icons'

function Navbar() {
  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux Toolkit</h3>
        <div className='nav-container'><CartIcon/>
        <div className='amount-container'>
        <p className='total-amount'>0</p>
        </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar