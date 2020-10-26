import React, { Component } from 'react'

export class Home extends Component {
constructor(props) {
  super(props)

  this.state = {
    color_black: true
  }
}
changeBackground = () => {
    this.setState({color_black: !this.state.color_black})
  };
  render() {
    let bgColor = this.state.color_black ? "black" : "white"
    const Skills = [
        "HTML",
        "CSS",
        "Sass",
        "JS",
        "React",
        "Redux",
        "Node",
        "MongoDB",
        "Python",
        "Flask",
        "Django",
        "Numpy",
        "Pandas",
        "Data Analysis",
        "MYSQL",
        "GraphQL",
        "D3js",
        "Gatsby",
        "Docker",
        "Heroku",
        "Git",
      ];
      const buttonStyles = {
        backgroundColor: "#61dbfb",
        padding: 10,
        border: "none",
        borderRadius: 5,
        margin: 3,
        cursor: "pointer",
        fontSize: 18,
        color: "white",
        marginTop: 30
      };
      const image = require("../images/asabeneh.jpg");

    //   const background ={
    //       backgroundColor: "black"
    //   }
        
    return (
        <div>
        <div className="user" style={{backgroundColor: bgColor}}>
          <div className="user_element">
            <img src={image} alt={"react"} className="user_image" />
            <h3 className="user_name">Femi Tosin</h3>
            <span className="user_title">Web Developer, Nigeria</span>
          </div>
          <h3 className="skills">Skills</h3>
          {Skills.map((skill, i) => (
            <button key={i} className="user_skills">
              {skill}{" "}
            </button>
          ))}{" "}
          <span>Joined on {new Date().toString()}</span>
          <button onClick={this.changeBackground} style={buttonStyles}>ChangeBackground</button>
        </div>
  
        <div>
           
        </div>
      </div>
    )
  }
}

export default Home



