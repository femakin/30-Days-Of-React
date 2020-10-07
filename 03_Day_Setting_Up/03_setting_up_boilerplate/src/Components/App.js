import React from 'react'
import './Style.css'
import Home from './Home'
import User from './User'
import Subscribe from './Subscribe'


export default function app() {

  return (
      
    <div  className="Home">
      <Home/>
      <User/>
      <Subscribe/>
    </div>
  )
}

