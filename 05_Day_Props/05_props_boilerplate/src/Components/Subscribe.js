import React from 'react'

export default function Hexa(props) {
    
  return (
    <div className="subscribe">
    <div className="subscribe_content">
  <h1>{props.data.Title}</h1>
  <p className="subscribe_par">{props.data.Paragraph}</p>
      <div className="subscribe_input">
      {props.data.Input1}
      {props.data.Input2}
      {props.data.Input3}
      </div>
  </div>
  <button className="subscribe_button">Subscribe</button>
    </div>
  );
}
