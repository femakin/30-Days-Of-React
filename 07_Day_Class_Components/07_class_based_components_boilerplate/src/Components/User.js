import React, { Component } from 'react'

export class User extends Component {

    // constructor(props) {
    //   super(props)
    
     
    // }
    
  render() {
    const {Skills} = this.props;
    // const {Data} = this.props;
    const {
        firstname,
        role,
        country,
        date
      } = this.props.Data

 
  const Skills_ = Skills.map(
    (skill, i) =><button key={i} className="user_skills">{skill} </button>
      );
      const image = require("../images/asabeneh.jpg")
    return (
        <div className="user">
            <div className="user_element">
        <img src={image} alt={"react"} className="user_image" />
    <h3 className="user_name">{firstname}</h3>
        <span className="user_title">{role}, {country}</span>
        </div>
        <h3 className="skills">Skills</h3> 
            {Skills_}
            <div><span>{date.toString()}</span></div>
    {/* <span>{date}</span> */}
        </div>
    //   {Skills_}
      
    )
  }
}

export default User
