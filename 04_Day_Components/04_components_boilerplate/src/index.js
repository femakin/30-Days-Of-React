// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App'
// To get the root element from the HTML document

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App/>, rootElement)
