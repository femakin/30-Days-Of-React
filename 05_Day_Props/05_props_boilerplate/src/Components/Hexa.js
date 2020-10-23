import React from 'react'

export default function Hexa(props) {
  

  return (
    <div>
      <div  className="background_div" style={{ backgroundColor: props.hexaColor() }} >
     <div className="hexa_center"> {props.hexaColor() } </div>
    </div>
    <div  className="background_div" style={{ backgroundColor: props.hexaColor() }} >
     <div className="hexa_center"> {props.hexaColor() } </div>
    </div>
    <div  className="background_div" style={{ backgroundColor: props.hexaColor() }} >
     <div className="hexa_center"> {props.hexaColor() } </div>
    </div>
    <div  className="background_div" style={{ backgroundColor: props.hexaColor() }} >
     <div className="hexa_center"> {props.hexaColor() } </div>
    </div>
    <div  className="background_div" style={{ backgroundColor: props.hexaColor() }} >
     <div className="hexa_center"> {props.hexaColor() } </div>
    </div>
    </div>
  )
}
