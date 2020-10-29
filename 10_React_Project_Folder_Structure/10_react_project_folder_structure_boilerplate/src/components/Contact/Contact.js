import React, { Component } from 'react'

export class Contact extends Component {
    constructor() {
      super();
      this.state = {
        links: [
          "/",
          "/",
          "/"
        ],
  
        icons: [
          "https://www.iconninja.com/files/178/577/79/github-icon.png",
          "https://www.iconninja.com/files/494/334/533/twitter-letter-twitter-icon.png",
          "https://www.iconninja.com/files/92/104/903/linkedin-icon.png"
        ]
      };
    }
    render() {
      const { links, icons } = this.state;
      let social = links.map((href, i) => {
        return (
          <a className="social__item" href={href} target="/">
            <img className="social__img" src={icons[i]}  alt="social"/>
          </a>
        );
      });
      return <div className="social" id="Contact">{social}</div>;
    }
  }

  export default Contact