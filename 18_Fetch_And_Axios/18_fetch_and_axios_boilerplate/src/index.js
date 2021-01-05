import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";


class App extends Component {
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
    countryoccurence: []
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
      const [ countries, countryoccurence] = this.catbreeds();
      this.setState({
        countries,
        countryoccurence
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







  catbreeds() {
    
    const countries = (this.state.data.map((bill) => bill.origin)).sort();
    
    var countryoccurence = {};

  countries.forEach((country) => {
    if (countryoccurence[country]) {
      countryoccurence[country] += 1;
    } else {
      countryoccurence[country] = 1;
    }
  })
  
  return [countries, countryoccurence]
 
  }


  render() {
    let country_occurence = (this.state.countryoccurence);
    let sorted = Object.fromEntries(
      Object.entries(this.state.countryoccurence).sort( (a,b) => a[1] - b[1] )    
   ) 
  
  let arr = Object.keys( country_occurence ).map(function ( key ) { return country_occurence[key]; });
  
  let max = Math.max.apply( null, arr );
  function geth(obj){
    var vals = [];    
    for(var i in obj){
       vals.push(obj[i]);
    }

    var max = Math.max.apply(null, vals);

     for(var j in obj){
        if(obj[j] === max){
            return j;
        }
    }
}
 
    return (
      <div className="App">
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div >
          <p>There are {this.state.data.length} cats breeds</p>
          <p>
            On average a cat can weight about{" "}
            <span>{this.state.CatWeight}</span> Kg and live{" "}
            <span>{this.state.CatMetric}</span>{" "}
          </p>
          <div className="countries-wrapper">
            
            <h2>
              
              How many countries do have cat breeds? 
            </h2>
           {<>There are{" "}
              {Object.keys(country_occurence).length} countries in total that have cat
              breeds which are {Object.keys(this.state.countryoccurence).join(" ")}
              </>}
          
          </div>
       
<h2>Which country has the highest number of cat breeds?</h2>
{geth(this.state.countryoccurence)} {max}
        <h2>Arrange countries in ascending order based on the number of cat breeds they have?</h2>
        {Object.entries(sorted).join( " " )}
      
        </div>
         
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));


