import React from 'react'

export default function Subscribe() {
  return (
    <div className="subscribe">
    <div className="subscribe_content">
     <h1>SUBSCRIBE</h1>
      <p className="subscribe_par"> Sign up with your emal address to receive news and update.</p>
      <div className="subscribe_input">
      <input placeholder="First name" disabled/>
      <input placeholder="Last name" disabled/>
      <input placeholder="Email" disabled/>  
      </div>
  </div>
  <button className="subscribe_button">Subscribe</button>
    </div>
  )
}
