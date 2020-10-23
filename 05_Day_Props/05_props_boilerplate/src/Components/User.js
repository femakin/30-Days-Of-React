import React from 'react'

export default function User() {
    const Skills = [  "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node",
"MongoDB", "Python", "Flask", "Django", "Numpy", "Pandas", "Data Analysis",
"MYSQL", "GraphQL", "D3js", "Gatsby", "Docker", "Heroku", "Git"];
    const image = require("../images/asabeneh.jpg")
  return (
    <div>
      <div className="user">
        <div className="user_element">
        <img src={image} alt={"react"} className="user_image" />
        <h3 className="user_name">Femi Tosin</h3>
        <span className="user_title">Web Developer, Nigeria</span>
        </div>
        <h3 className="skills">Skills</h3> 
      {Skills.map(
    (skill, i) =><button key={i} className="user_skills">{skill} </button>
      ) } <span>Joined on Oct 16, 2020</span>
    </div>
    </div>
  )
}
