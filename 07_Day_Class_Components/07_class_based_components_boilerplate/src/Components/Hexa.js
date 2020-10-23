import React, { Component } from "react";

export class Hexa extends Component {
     hexaColor = () => {
        let str = "0123456789abcdef";
        let color = "";
        for (let i = 0; i < 6; i++) {
          let index = Math.floor(Math.random() * str.length);
          color += str[index];
        }
        return "#" + color;
      };
  render() {
    
    return (
      <div>
        <div
          className="background_div"
          style={{ backgroundColor: this.hexaColor() }}
        >
          <div className="hexa_center"> {this.hexaColor()} </div>
        </div>
        <div
          className="background_div"
          style={{ backgroundColor: this.hexaColor() }}
        >
          <div className="hexa_center"> {this.hexaColor()} </div>
        </div>
        <div
          className="background_div"
          style={{ backgroundColor: this.hexaColor ()}}
        >
          <div className="hexa_center"> {this.hexaColor()} </div>
        </div>
        <div
          className="background_div"
          style={{ backgroundColor: this.hexaColor() }}
        >
          <div className="hexa_center"> {this.hexaColor()} </div>
        </div>
        <div
          className="background_div"
          style={{ backgroundColor: this.hexaColor ()}}
        >
          <div className="hexa_center"> {this.hexaColor()} </div>
        </div>
      </div>
    );
  }
}

export default Hexa;
