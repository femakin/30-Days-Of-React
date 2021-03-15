import React, { Component } from "react";
import axios from "axios";
import Imagedata from "./imgaedata";
import "./style.css";
import Button from "./components/Button/Button";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
      filteredData: [],
      metricAvaregeWeight: "",
      lifeSpanAvarege: "",
      catsNumber: "",
      isMounted: false,
    };
  }

  fetchData = async (url) => {
   
    try {
      const response = await axios.get(url);
      const data = await response.data;
      if (this.state.isMounted)
        this.setState({
          data,
          filteredData: data,
          loading: false,
        });
    } catch (error) {
      console.log(error);
    }
  };





  componentDidMount() {
    this.setState({ isMounted: true });
    const url = "https://api.thecatapi.com/v1/breeds";
    this.fetchData(url);
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  
  groupBy(initialData, param) {
    const mySet = new Set(initialData.map((item) => item[param]));
    // console.log(mySet);
    const groupObj = {};
    for (let value of mySet) {
     // console.log(value)
      groupObj[value] = initialData.filter((item) => item[param] === value);
       //console.log(groupObj[value])
    }
    // console.log(groupObj);
    return groupObj;
  }

  filterData(origin) {
    const filteredData = origin
      ? this.state.data.filter((item) => {
          return item.origin === origin;
        })
      : this.state.data;
      console.log(filteredData)
    this.setState({ filteredData });
  }

  clickButtonHendler(origin) {
    return this.filterData.call(this, origin);
  }

  
  render() {
    //this.groupBy(this.state.data, "origin");
    const groupedData = this.groupBy(this.state.data, "origin");
   // console.log(Object.values(groupedData))
    const origins = Object.keys(groupedData).map((origin) => {
      const itemsNumber = groupedData[origin].length;
      // console.log(itemsNumber);
      return [origin, itemsNumber];
    });
    // this.filterData()
    // console.log(this.state.filteredData);

     // Buttons for filtering cats by country
     const filteringButtons = (
      <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        style={{ width: "65%", margin: " 20px auto" }}
        key={Date.now()}
      >
        {origins.map((item, inx) => {
          const [origin, itemsNumber] = item;
          return (
           <div className="btn">
              <Button
              origin={origin}
              itemsNumber={itemsNumber}
              clickButton={this.clickButtonHendler.bind(this)}
              key={inx + 1}
            />
           </div>
          );
        })}
        {
         <div className="btn">
            <Button
            origin={""}
            itemsNumber={this.state.data.length}
            clickButton={this.clickButtonHendler.bind(this)}
            key={Date.now()}
          />
         </div>
        }
      </div>
    );

     // Cards with cats' descriptions
     const catsDescriptions = (
      <div
        className=" "
        key={Math.random()}
      >
        {this.state.filteredData.map((cat, inx) => (
          <Imagedata options={cat} key={inx} />
        ))}
      </div>
    );



    return (
     <div className="App">
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1> 
        { [filteringButtons, catsDescriptions]}
      </div>
   
    );
  }
}
