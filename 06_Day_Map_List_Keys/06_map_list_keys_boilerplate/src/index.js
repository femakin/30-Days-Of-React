// index.js
import React from 'react'
import ReactDOM from 'react-dom'
//  import Bargroup from './Components/Bargroup'
  import App from './Components/App'
// To get the root element from the HTML document

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App/>, rootElement)
