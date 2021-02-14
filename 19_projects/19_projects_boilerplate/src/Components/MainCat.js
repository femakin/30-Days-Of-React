import React, { Component } from 'react'
import axios from "axios";

export default class MainCat extends Component {
    state = {
        img: ""
        
    };


    componentDidMount() {
        this.fetchCatDetails();
    }
    fetchCatDetails = async() => {
        const url = `https://api.thecatapi.com/v1/images/search?breed_id=${this.props.options.id}`;
        try {
            const response = await axios.get(url);
            // console.log(response)
            const img = await response.data[0].url;
           
            this.setState({
                img
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const {
            options: {name, origin, temperament, life_span, weight: { metric },
                description
            }
        } = this.props;
        return (<div>
           
            <img src = { this.state.img }
            alt = ""
            loading = "lazy"
            className = "cat_img" /> 
           
            <p> { name } </p> 
            <p> { origin } </p> 
            <p> { temperament } </p> 
            <p> { life_span } years </p> 
            <p> { metric } kg </p> 
            <p> { description } </p> 
            </div >)
    }
}

