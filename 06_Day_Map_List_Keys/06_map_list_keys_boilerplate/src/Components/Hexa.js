import React from 'react'

export default function Hexa(props) {
   
  return (
    <div className="child_parent">
    <div  className="background_div" style={{ backgroundColor: props.hexaColor() }} >
     <div className="hexa_center"> {props.hexaColor() } </div>
    </div>
    </div>
  )
}
