import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Imagedata from "./Imagedata";

class App extends Component {
  state = {
    data: [],
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
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <div>
          {this.state.data.map((item, id) => (
            <div key={id}>
              <Imagedata option={item} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
