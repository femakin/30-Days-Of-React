import React, { Component } from 'react'

export class App extends Component {
  state = {
    screenWidth: `${window.innerWidth}`,
    screenHeight: `${window.innerHeight}`,
  }

onMouseEnterHendler = (e)=>{
  const elem = e.target
  const elemGeometryObject = elem.getBoundingClientRect()
  const newX = Math.floor(Math.random() * (this.state.screenWidth - elemGeometryObject.width))
  const newY = Math.floor(Math.random() * (this.state.screenHeight - elemGeometryObject.height))
  elem.style.left = `${newX}px`
  elem.style.top = `${newY}px`
}

  render() {
    const styles = {
      mainScreen: {
        position: 'relative',
        width: `${this.state.screenWidth}px`,
        height: `${this.state.screenHeight}px`
      },
     
      movingObj: {
        width: "410px",
        height: "70px",
        backgroundColor: "#60DBFC",
        fontSize: 40,
        lineHeight: 1,
        fontWeight: '700',
        padding: '1rem 2rem',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0
      }
    }
    return (
      <div style={styles.mainScreen}>
        <div style={styles.movingObj} onMouseEnter={this.onMouseEnterHendler}>
          30 Days Of React
          Day 11 Task(Using Event)
        </div>
      </div>
    )
  }
}

export default App
