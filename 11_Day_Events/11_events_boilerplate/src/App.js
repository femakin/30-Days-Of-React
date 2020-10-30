import React from "react";
import { Component } from "react";

export class Hover extends Component {
  state = {
    hovered: false,
  };

  render() {
    return (
      <div
        className="app"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        {this.props.children(this.state.hovered)}
      </div>
    );
  }
}


export default function App() {
  return (
    <div className="">
      <Hover>
        {(hovered) => (
          <h2
            className="content"
            style={
              hovered
                ? {
                    backgroundColor: "blue",
                   
                    marginLeft: "29rem",
                    marginTop: "15rem",
                    marginRight: "20rem",
                  }
                : {
                    backgroundColor: "yellow",
                    // marginLeft: "20rem",
                    // marginTop: "9rem",
                  }
            }
          >
            Move Your Cursor Closer{" "}
          </h2>
        )}
      </Hover>
    </div>
  );
}
