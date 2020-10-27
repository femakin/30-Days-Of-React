import React, { Component } from "react";
import morning from "../images/morning.jpg";
import noon from "../images/noon.jpg";
import afternoon from "../images/afternoon.jpg";
import evening from "../images/evening.jpg";
export class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datetime: new Date(),
    };
  }

  render() {
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
    let myDate = new Date();
    let currentHour = myDate.getHours();
    let ampm = currentHour >= 12 ? 'pm' : 'am';
    var msg;

    if (currentHour < 12) msg = "Good Morning";
    else if (currentHour === 12) msg = "Good Day";
    else if (currentHour >= 12 && currentHour <= 17) msg = "Good Afternoon";
    else if (currentHour >= 17 && currentHour <= 24) msg = "Good Evening";
    

    function bgg() {
      let myDate = new Date();
      let currentHour = myDate.getHours();
      if (currentHour < 12) {
        return {
          backgroundImage: "url(" + morning + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
      } else if (currentHour === 12) {
        return {
          backgroundImage: "url(" + noon + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
      } else if (currentHour >= 12 && currentHour <= 17) {
        return {
          backgroundImage: "url(" + afternoon + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
      } else if (currentHour >= 17 && currentHour <= 24) {
        return {
          backgroundImage: "url(" + evening + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
      }
    }

    return (
      <div style={bgg()} className="app">
        <h2>
          Dynamically Changing background based on the time of the day(Morning,
          Noon, Evening, Night).{" "}
        </h2>
        <h2>
          {msg}, The Current Time in Nigeria: {getDateTime()}{ampm}{" "}
        </h2>
      </div>
    );
  }
}

export default Time;
