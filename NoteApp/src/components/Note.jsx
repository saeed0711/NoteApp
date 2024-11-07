import React from 'react'
import { useState } from 'react';
import './Note.css'
import Popup from './Popup'

export default function Note() {

  const [showPopup, setShowPopup] = useState(false);
 
  const handletoggle = () => {
    setShowPopup(!showPopup)
    
  };
  return (
    <div className='main'>
    <div class="left">
        <div class="heading"><h2>Pocket Notes</h2></div>
        <div class="group">hello
        <div className='btn'> <button id="bt" onClick={handletoggle}>+</button></div>
        </div>
    </div>
    <div class="right">
    <div className="img">
        <img src="/src/assets/main.png" alt="bad me ana" />
    </div>
    <div className="dis">
        <h2 id='h2'>Pocket Notes</h2>
        <p>Send and receive messages without keeping your phone online.
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>
    {showPopup && <Popup toggle={handletoggle}/>}
    </div>
   </div>  
  )
}
