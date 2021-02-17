import React, { Component } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';

export default class imagedata extends Component {
  state = {
    img: "",
    infodata: [],
    alldata: [],
  };
  componentDidMount() {
    this.fetchCatDetails();
  }
  fetchCatDetails = async () => {
    const info = `https://api.thecatapi.com/v1/breeds`;
    const url = `https://api.thecatapi.com/v1/images/search?breed_id=${this.props.option.id}`;
    try {
      const response = await axios.get(url);
        // console.log(response)
      const img = await response.data[0].url;
     
        //  console.log(alldata)
      this.setState({
        img
      });


      const allresult = await axios.get(url);
      const alldata = await allresult.data[0];
      console.log(alldata)
      this.setState({
        alldata,
      });



      const response1 = await axios.get(info);
      const infodata = await response1.data;
    //   console.log(infodata)
      this.setState({
        infodata,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      option: {
        name,
        origin,
        temperament,
        life_span,
        weight: { metric },
        description,
      },
    } = this.props;
    return (
      <div className="center">
          <img src={this.state.img} alt="" loading="" className="img"/> <br/>
          {name} <br/>
          {origin} <br/>
          {description}
        
        {this.state.infodata.map((item, id) => (
          <div key={id}>
            
             {/*   This line below is the line returning the error */}
             {/* {console.log(item)}  */}
          </div>
        ))}

      
      </div>
    );
  }
}
