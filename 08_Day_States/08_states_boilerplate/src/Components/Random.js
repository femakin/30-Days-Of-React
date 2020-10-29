import React, { Component } from "react";

export class Random extends Component {
  render() {
    const buttonStyles = {
      backgroundColor: "#61dbfb",
      padding: 10,
      border: "none",
      borderRadius: 5,
      margin: 3,
      cursor: "pointer",
      fontSize: 18,
      color: "white",
      marginTop: 30,
    };
    // if (this.props.languages) {
      
    // }
   
    return (
      
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "35rem" }}>
          <div className="country_flag"><img
            src={this.props.flag}
            alt="flag"
            className="card-img-top"
            style={{ padding: "30px" }}
          /></div>

          <div className="card-body">
           <div className="country_content"> 
            <h2 className="card-text"><p>Country:</p> {this.props.Country}</h2>
            <h2 className="card-text"><p>Capital:</p> {this.props.Capital}</h2>
            <h2 className="card-text"><p>Currency:</p> {this.props.Currency}</h2>
            <h2 className="card-text"><p>Population: </p>{this.props.population}</h2>
            <h2 className="card-text"><p>language(s):</p> {this.props.languages}</h2></div>

            <div className="btnn">
              {" "}
              <button
                onClick={this.props.handleClick}
                style={buttonStyles}
                className="btn btn-primary"
              >
                {" "}
                Next Country
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Random;
