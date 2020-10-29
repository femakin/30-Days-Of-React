import React, { Component } from 'react'

export class About extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: "Hello! I'm Femi Akinyemi",
      text: " I'm a web developer from Nigeria. You can see some of my projects below or in my github profile."
    };
  }
  
  render() {
    return (
      <div className="about" id="About">
        <h1 className="about__title">{this.state.name}</h1>
        <p className="about__text">{this.state.text}</p>
      </div>
    );
  }
}

export default About





// class About extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Kira",
//       text: "Hello! My name is Kira and I want to be a frontend developer. You can see some of my projects below or in my codepen profile"
//     };
//   }
//   render() {
//     return (
//       <div className="about" id="About">
//         <h1 className="about__title">{this.state.name}</h1>
//         <p className="about__text">{this.state.text}</p>
//       </div>
//     );
//   }
// }