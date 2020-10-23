import React, { Component } from 'react'
import './style2.css'
export class Number extends Component {
     bg = (num)=>{
        let color;
        let colors =['yellow', 'red', 'Green']
        if(num % 2 === 0){
          color = colors[2]
        }else if (num % 2 !== 0 ) {
          color = colors[0]
      };for (let i = 2; i < num; i++) {
        if(num % i === 0){
          color = colors[1]
        } 
      }
        return color;
      }
  render() {
    const {numbers} = this.props;
    const list = numbers.map((number) => 
    <div key={number}  className="numbers"  style={{backgroundColor: this.bg(number)}}>
      
      <li  className="list">{number}</li>
    </div>
    )
    return (
      <div>
        {list}
      </div>
    )
  }
}

export default Number
