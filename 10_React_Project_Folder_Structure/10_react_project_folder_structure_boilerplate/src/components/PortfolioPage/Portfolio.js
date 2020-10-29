import React, { Component } from 'react'

// export class Portfolio extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//         links: [
//             "http://kiraburova.github.io/ModernLook/",
//             "http://kiraburova.github.io/passion/",
//             "http://kiraburova.github.io/singolo/",
//             "https://kiraburova.github.io/Kafeinate/"
//           ],
    
//           images: [
//             "https://image.ibb.co/chE8xv/1.png",
//             "https://image.ibb.co/kR9K4a/2.png",
//             "https://image.ibb.co/n9niVF/3.png",
//             "https://image.ibb.co/i3PVAF/4.png"
//           ]
//       }
//     }
    
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default Portfolio
export class Portfolio extends Component {
    constructor() {
      super();
      this.state = {
        links: [
          "/",
          "/",
          "/",
          "/",
        ],
  
        images: [
          "https://res.cloudinary.com/femakin/image/upload/c_scale,h_300,q_100,w_400/v1603915418/dynamically_sgzttn.jpg",
          "https://res.cloudinary.com/femakin/image/upload/c_pad,h_300,w_400/v1603950507/zimbabwe_nb41it.jpg",
          "https://res.cloudinary.com/femakin/image/upload/c_pad,h_300,w_400/v1603951255/vote_swtlnx.jpg",
          "https://res.cloudinary.com/femakin/image/upload/c_scale,h_300,w_400/v1603951557/quiz_ahpnvz.jpg"
        ]
      };
    }
    render() {
      const { links, images } = this.state;
      let gallery = links.map((href, i) => {
        return (
          <a key={i} className="gallery__item" href={href} target="/" rel="noreferrer">

            <img className="gallery__img" src={images[i]} alt="gallery" />
          </a>
        );
      });
      return <div  className="gallery" id="Portfolio">{gallery}</div>;
    }
  }
  export default Portfolio