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
    return (
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "35rem" }}>
          <img
            src={this.props.flag}
            alt="flag"
            className="card-img-top"
            style={{ padding: "30px" }}
          />

          <div className="card-body">
            <h2 className="card-text">Country: {this.props.Country}</h2>
            <h2 className="card-text">Capital: {this.props.Capital}</h2>
            <h2 className="card-text">Currency: {this.props.Currency}</h2>
            <h2 className="card-text">Population: {this.props.population}</h2>
            <h2 className="card-text">Language(s): {this.props.languages}</h2>

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
