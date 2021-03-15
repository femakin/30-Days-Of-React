import React, { Component } from "react";
import axios from "axios";
// import { Card } from "react-bootstrap";

export default class imagedata extends Component {
  state = {
    imgUrl: "",
    isMounted: false,
    loading: true
  }

  fetchCatImg = async () => {
    try {
      const url = `https://api.thecatapi.com/v1/images/search?breed_id=${this.props.options.id}`
      let response = await axios.get(url)
      const imgUrl = await response.data[0].url
      if (this.state.isMounted) {
        this.setState({
          imgUrl,
          loading: false
        })
      }

    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {

    this.setState({ isMounted: true })
    
    this.fetchCatImg()
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })
  }

  render() {
    const {
      options: {
        name,
        origin,
        temperament,
        life_span,
        weight: { metric },
        description,
      },
    } = this.props;

const catdescription = (
  <>
  <div className="center">
        <img src={this.state.imgUrl} alt="" loading="" className="img" /> <br />
    <p>Name: {name} </p>   
      <p>Origin:  {origin}  </p> 
       <p>Description: {description} </p> 
       <p>Temperament: {temperament}</p>
       <p>LifeSpan: {life_span} Years</p>
       <p>Weight: {metric} Kg</p>
      </div>
  
  </>
)

    return (
      <div className="center">
       {catdescription}
      </div>
    );
  }
}
