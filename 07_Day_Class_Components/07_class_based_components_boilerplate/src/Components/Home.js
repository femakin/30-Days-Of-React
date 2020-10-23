import React, { Component } from 'react'

export class Home extends Component {
  render() {

    const images = [
        {
          id: 1,
          imageUrl: require("../images/js_logo.png")
        },
        {
            id: 2,
            imageUrl: require("../images/css_logo.png")
          },
          {
            id: 3,
            imageUrl: require("../images/html_logo.png")
          },
          {
            id: 4,
            imageUrl: require("../images/react_logo.png")
          }
      ];
    return (
        <div className="Image">
        <div className="Image_element">
        <h2>Front End Technologies</h2>
        {images.map((image,i) => 
                      <img className="photo"
                      src={image.imageUrl}
                      key={i} alt={image}
                      />
                  )}   
           
            </div>   
      </div>
    )
  }
}

export default Home
