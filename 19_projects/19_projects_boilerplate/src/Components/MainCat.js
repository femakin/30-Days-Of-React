import React, { Component } from 'react'
import axios from "axios";

export default class MainCat extends Component {
    state = {
        img: "",
        alldata: [],
        
    };


    componentDidMount() {
        this.fetchCatDetails();
    }
    fetchCatDetails = async() => {
        const url = `https://api.thecatapi.com/v1/images/search?breed_id=${this.props.options.id}`;
        let result = []
        try {
            const response = await axios.get(url);
            result.push(response.data[0].url.length)
            // console.log(response.data[0])
            //  console.log(result)
            const img = await response.data[0].url;
           const alldata = await response.data[0]
            this.setState({
                img, alldata
            });
            console.log(alldata)
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
           
{/* {
  this.state.alldata.map((itemm, key) => (
    <div key={key}>
     {console.log(itemm)}
    </div>
     ))
} */}


            {/* <img src = { this.state.img }
            alt = ""
            loading = "lazy"
            className = "cat_img" />  */}
                      {/* <p> { name } </p> 
            <p> { origin } </p> 
            <p> { temperament } </p> 
            <p> { life_span } years </p> 
            <p> { metric } kg </p> 
            <p> { description } </p>  */}
            </div >)
    }
}

