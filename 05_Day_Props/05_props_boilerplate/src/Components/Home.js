import React from 'react'
import './Style.css'
export default function Home(props) {
    
  return (
    
    <div className="Image">
      <div className="Image_element">
      <h2>Front End Technologies</h2>
      {props.images.map((image,i) => 
                    <img className="photo"
                    src={image.imageUrl}
                    key={i} alt={image}
                    />
                )}   
         
          </div>   
    </div>
    
  )
}
