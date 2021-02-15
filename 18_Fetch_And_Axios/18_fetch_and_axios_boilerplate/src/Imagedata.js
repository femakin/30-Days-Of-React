import React, { Component } from "react";
import axios from "axios";

export default class imagedata extends Component {
  state = {
    img: "",
    infodata: [],
  };
  componentDidMount() {
    this.fetchCatDetails();
  }
  fetchCatDetails = async () => {
    const info = `https://api.thecatapi.com/v1/breeds`;
    const url = `https://api.thecatapi.com/v1/images/search?breed_id=${this.props.option.id}`;
    try {
      const response = await axios.get(url);
    //   console.log(response)
      const img = await response.data[0].url;
      this.setState({
        img,
      });

      const response1 = await axios.get(info);
      const infodata = await response1.data;
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
      <div>
           <img src={this.state.img} alt="" loading="lazy" className="cat_img"/>
        <h4>{name}</h4>
        {this.state.infodata.map((item, id) => (
          <div key={id}>
              {console.log(item)}
             
          </div>
        ))}
      </div>
    );
  }
}
