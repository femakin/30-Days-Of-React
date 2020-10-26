import React, { Component } from "react";
import Home from "./Home";
import Random from "../Components/Random";
import countriesData from "../data/countries";

import "./Style.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Country: countriesData[0].name,
      Capital: countriesData[0].capital,
      Currency: countriesData[0].currency,
      population: countriesData[0].population,
      flag: countriesData[0].flag,
      language: countriesData[0].languages[0],
    };
  }

  randomData() {
    const randomNumber = Math.floor(Math.random() * countriesData.length);

    return countriesData[randomNumber];
  }

  handleClick = () => {
    const generateRandomData = this.randomData();
    this.setState({
      Country: generateRandomData.name,
      Capital: generateRandomData.capital,
      Currency: generateRandomData.currency,
      population: generateRandomData.population,
      flag: generateRandomData.flag,
      languages: generateRandomData.languages[0],
    });
  };

  render() {
    return (
      <div>
        <Home />
        <Random handleClick={this.handleClick} {...this.state} />
        {console.log(countriesData[0].languages[1])}
      </div>
    );
  }
}

export default App;
