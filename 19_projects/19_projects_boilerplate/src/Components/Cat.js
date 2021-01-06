import React, { Component } from "react";
import axios from "axios";
import MainCat from "./MainCat";

export default class Cat extends Component {
  state = {
    data: [],
    CatWeight: "",
    CatMetric: "",
    categories: [],
    sortcategories: [],
    element: "",
    array: "",
    countries: [],
    ncountries: {},
    countryoccurence: [],
  };

  componentDidMount() {
    this.fetchCountryData();
  }
  fetchCountryData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds";
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({
        data,
      });
      const [CatWeight, CatMetric] = this.statistics();
      this.setState({
        CatWeight,
        CatMetric,
      });
     
    } catch (error) {
      console.log(error);
    }
  };

  statistics() {
    let result1 = this.state.data.map((value, i) => {
      let metricValue = value.weight.metric.split("-");
      let Currentweightvalue = metricValue.map((value, id) => value.trim());
      let currentdata =
        metricValue.reduce((acm, current) => acm + parseInt(current), 0) /
        Currentweightvalue.length;
      return currentdata;
    });
    let CatWeight =
      Math.ceil(
        (result1.reduce((acm, current) => acm + current, 0) * 100) /
          this.state.data.length
      ) / 100;

    let result2 = this.state.data.map((value) => {
      let lifespanvalue = value.life_span
        .split("-")
        .map((value, id) => value.trim());
      let currentlifespan =
        lifespanvalue.reduce((acm, current) => acm + parseInt(current), 0) /
        lifespanvalue.length;
      return currentlifespan;
    });
    let CatMetric =
      Math.ceil(
        (result2.reduce((acm, current) => acm + current, 0) * 100) /
          this.state.data.length
      ) / 100;

    return [CatWeight, CatMetric];
  }

  render() {
    return (
      <div className="App">
        <div>
          <p>There are {this.state.data.length} cats breeds</p>
          <p>
            On average a cat can weight about{" "}
            <span>{this.state.CatWeight}</span> Kg and live{" "}
            <span>{this.state.CatMetric}</span>{" "}
          </p>
          <div className="countries-wrapper"></div>
        </div>
{
    this.state.data.map((item, id)=>(
        <MainCat options={item} key={id} />
    ))
}





      </div>
    );
  }
}




