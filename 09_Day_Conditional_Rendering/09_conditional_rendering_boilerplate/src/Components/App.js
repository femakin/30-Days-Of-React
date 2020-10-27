import React, { Component } from "react";
import winter3 from "../images/winter3.jpg";
import spring from "../images/spring.jpg";
import Autumn from "../images/Autumn.jpg";
import Summer from "../images/Autumn.jpg";

import "./style.css";
import Time from "./Time";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datetime: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ datetime: new Date() });
    }, 1000);
  }

  render() {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const datee = new Date();
    let monthName = months[datee.getMonth()];
    let season = ["Winter", "Summer", "Spring", "Autumn"];
    let Season;
    if (
      monthName === "June" ||
      monthName === "July" ||
      monthName === "August"
    ) {
      Season = season[0];
    } else if (
      monthName === "September" ||
      monthName === "October" ||
      monthName === "November"
    ) {
      Season = season[2];
    } else if (
      monthName === "December" ||
      monthName === "January" ||
      monthName === "February"
    ) {
      Season = season[1];
    } else if (
      monthName === "March" ||
      monthName === "April" ||
      monthName === "May"
    ) {
      Season = season[3];
    } else {
      Season = "Not Valid";
    }

    function bg() {
      if (
        monthName === "June" ||
        monthName === "July" ||
        monthName === "August"
      ) {
        return {
          backgroundImage: "url(" + winter3 + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
      } else if (
        monthName === "September" ||
        monthName === "October" ||
        monthName === "November"
      ) {
        return {
          backgroundImage: "url(" + spring + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
      } else if (
        monthName === "December" ||
        monthName === "January" ||
        monthName === "February"
      ) {
        return {
          backgroundImage: "url(" + Summer + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
      } else if (
        monthName === "March" ||
        monthName === "April" ||
        monthName === "May"
      ) {
        return {
          backgroundImage: "url(" + Autumn + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
      } else {
        return {
          background: "orange",
        };
      }
    }

    function getDateTime() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
      if (month.toString().length === 1) {
        month = "0" + month;
      }
      if (day.toString().length === 1) {
        day = "0" + day;
      }
      if (hour.toString().length === 1) {
        hour = "0" + hour;
      }
      if (minute.toString().length === 1) {
        minute = "0" + minute;
      }
      if (second.toString().length === 1) {
        second = "0" + second;
      }
      var dateTime =
        day +
        ":" +
        month +
        ":" +
        year +
        "," +
        hour +
        ":" +
        minute +
        ":" +
        second;
      return dateTime;
    }
    

    return (
      <div>
        <div  style={bg()} className="app">
        <h2>
          Dynamically Changing Background based on the season of the
          year(Autumn, Winter, Spring, Summer).{" "}
        </h2>
        <h2>Using Meteorological temperate seasons (Southern hemisphere) </h2>
        {<h2>The Current Season of the year is {Season}</h2>}
        {<h2> {getDateTime()}</h2>}
        </div>
        <Time />
      </div>
    );
  }
}

export default App;
