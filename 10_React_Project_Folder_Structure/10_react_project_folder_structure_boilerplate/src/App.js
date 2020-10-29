import React, { Component } from 'react'
import Header from "./components/Header/Header"
import About from './components/Aboutpage/About'
import Portfolio from './components/PortfolioPage/Portfolio'
import Contact from './components/Contact/Contact'
import Button from './components/Shared/Button'
import {buttonStyles} from '../src/Styles/button-styles'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      color_black: true
    }
  }
  changeBackground = () => {
    this.setState({color_black: !this.state.color_black})
  };
  render() {
    let bgColor = this.state.color_black ? "black" : "white"
    return (
      <div className="user" style={{backgroundColor: bgColor}}>
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
       <Button className="btn"
       text='Change Background'
       onClick={this.changeBackground}
       style={buttonStyles}
       />
      </div>
    )
  }
}

export default App
