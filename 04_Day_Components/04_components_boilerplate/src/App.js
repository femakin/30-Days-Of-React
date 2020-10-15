import React from 'react'
import './Style.css'



export default function App() {
    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
          let index = Math.floor(Math.random() * str.length)
          color += str[index]
        }
        return '#' + color
      }
  return (
    <div>
      <div  className="background_div" style={{ backgroundColor: hexaColor() }} >
     <div className="hexa_center"> {hexaColor() } </div>
    </div>
    <div  className="background_div" style={{ backgroundColor: hexaColor() }} >
     <div className="hexa_center"> {hexaColor() } </div>
    </div>
    <div  className="background_div" style={{ backgroundColor: hexaColor() }} >
     <div className="hexa_center"> {hexaColor() } </div>
    </div>
    <div  className="background_div" style={{ backgroundColor: hexaColor() }} >
     <div className="hexa_center"> {hexaColor() } </div>
    </div>
    <div  className="background_div" style={{ backgroundColor: hexaColor() }} >
     <div className="hexa_center"> {hexaColor() } </div>
    </div>
    </div>
    
  )
}
