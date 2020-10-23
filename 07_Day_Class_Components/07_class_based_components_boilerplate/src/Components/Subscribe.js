import React, { Component } from 'react'

export class subscribe extends Component {
  render() {
    return (
        <div className="subscribe">
        <div className="subscribe_content">
         <h1>SUBSCRIBE</h1>
          <p className="subscribe_par"> Sign up with your emall address to receive news and update.</p>
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
}

export default subscribe
