import React from 'react'
import Home from '../Components/Home'
import Subscribe from '../Components/Subscribe'
import User from '../Components/User'
import Hexa from '../Components/Hexa'
export default function App() {

  const data = {
    Title: 'Subscribe',
    Paragraph: 'Sign up with your emall address to receive news and update.',
    Input1: <input placeholder="First name"  color="black"/>,
    Input2: <input placeholder="Last name" disabled/>,
    Input3: <input placeholder="Email" disabled/> 
  }


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
      <Home   
      images = {[
        {
          id: 1,
          imageUrl: require("../images/js_logo.png")
        },
        {
            id: 2,
            imageUrl: require("../images/css_logo.png")
          },
          {
            id: 3,
            imageUrl: require("../images/html_logo.png")
          },
          {
            id: 4,
            imageUrl: require("../images/react_logo.png")
          }
      ]}
      />

<Subscribe   

data={data}
/>
<Hexa   hexaColor={hexaColor}/>
<User/>
    </div>
  )
}
