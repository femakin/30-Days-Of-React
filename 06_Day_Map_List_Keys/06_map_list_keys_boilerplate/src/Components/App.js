import React from "react";
import Numbers from "./Numbers";
import Hexa from "./Hexa";
import "./Style.css";
import Bargroup from "./Bargroup";

export default function App() {
  // const numbers = [1]
  const numbers = [];
  for (let i = 0; i <= 31; i++) {
    numbers.push(i);
    if (i % 2 === 0) {
    }
  }

  const hexaColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };

  return (
    <div>
      <div>
      <div className="con">
        <div className="container">
          <div className="child">
            <div className="child_content">
              <h1>30 Days Of React</h1>
              <h2>World Population</h2>
              <h3>Ten Most Populated Countries</h3>
            </div>
           
          </div>
          
        </div>
        </div>
        <div className="bar">
        <Bargroup />
        </div>
        
      </div>
      <div className="con">
      <div className="container">
        <div className="child">
          <div className="child_content">
            <h1>30 Days Of React</h1>
            <h2>Number Generator</h2>
          </div>
          <div className="ul">
            <ul>
              <Numbers className="block" numbers={numbers} />
            </ul>
          </div>

          <div className="child_content">
            <h1>30 Days Of React</h1>
            <h2>Hexadecimal Colors</h2>
          </div>
          {new Array(32).fill(0).map((item, i) => {
            return <Hexa key={i} hexaColor={hexaColor} className="block" />;
          })}
        </div>
      </div>
      </div>
    </div>
  );
}
