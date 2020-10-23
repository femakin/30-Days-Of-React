import React, { Component } from "react";
import Hexa from "./Hexa";
import Hexxa from "./Hexxa";
import Home from "./Home";
import Number from "./Number";
import "./style.css";
import Subscribe from "./Subscribe";
import User from "./User";
import Bargroup from './Bargroup';

export class App extends Component {
  render() {
    const Skills = [
      "HTML",
      "CSS",
      "Sass",
      "JS",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "Python",
      "Flask",
      "Django",
      "Numpy",
      "Pandas",
      "Data Analysis",
      "MYSQL",
      "GraphQL",
      "D3js",
      "Gatsby",
      "Docker",
      "Heroku",
      "Git",
    ];
    const Data = {
      firstname: "Femi Tosin",
      role: "Web Developer",
      country: "Nigeria",
      date: new Date(),
    };

    const numbers = [];
    for (let i = 0; i <= 31; i++) {
      numbers.push(i);
      if (i % 2 === 0) {
      }
    }

    return (
      <div>
        <Home />
        <Subscribe />
        <User Skills={Skills} Data={Data} />
        <Hexa />

        <div className="container">
          <div className="child">
            <div className="ul">
              <ul>
                <Number className="block" numbers={numbers} />
              </ul>
            </div>
            <div className="hexadiv">

            {new Array(32).fill(0).map((item, i) => {
              return (
                <Hexxa key={i} hexaColor={this.hexaColor} className="block" />
              );
            })}
            </div>
          </div>
        </div>
        <div className="bar">
          <Bargroup />
        </div>
      </div>
    );
  }
}

export default App;
