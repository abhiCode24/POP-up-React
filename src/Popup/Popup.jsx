import React from 'react'
import './Popup.css'
// import cross from '../images/close.png'
// import download from '../images/downloads.png'
// import { X ,Download } from 'lucide-react';

const Popup = ({close}) => {
    
  return (
    <div className='popup-section'>
      <div className="main-popup">
            <h1>Download free book</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, alias.</p>
            <form>
                <input
                type= 'email'
                placeholder='Enter your email'
                required
                />
                
            </form>
            <button className='btn-main' onClick={close}>close</button>
      </div>
    </div>
  )
}

export default Popup
