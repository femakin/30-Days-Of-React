import React from "react";
import './Style.css'

const tenHighestPopulation = [
  { country: "World", population: 7693165599, percentage: 0 },
  { country: "China", population: 1377422166, percentage: 0 },
  { country: "India", population: 1295210000, percentage: 0 },
  { country: "USA", population: 323947000, percentage: 0 },
  { country: "Indonesia", population: 258705000, percentage: 0 },
  { country: "Brazil", population: 206135893, percentage: 0 },
  { country: "Pakistan", population: 194125062, percentage: 0 },
  { country: "Nigeria", population: 186988000, percentage: 0 },
  { country: "Bangladesh", population: 161006790, percentage: 0 },
  { country: "Russian", population: 146599183, percentage: 0 },
  { country: "Japan", population: 126960000, percentage: 0 },
  
];
export default function Bargroup() {

  for (var i = 0; i < tenHighestPopulation.length; i++) {
    const max = Math.max.apply(
      Math,
      tenHighestPopulation.map(function (o) {
        return o.population;
      })
    );
    // console.log(max);
    // we do the conversion here
    tenHighestPopulation[i].percentage =
      Math.round((tenHighestPopulation[i].population / max) * 100) + "%";
  }

  return (
    <div>

<div className="percent" >
      {tenHighestPopulation.map((countries, index) => (
        <div key={index}  className="details">
          <div className="country"> {countries.country}</div>
          <div className="contentWrapper">
          <div className="content"  style={{
             
             width: `${countries.percentage}`
           }}></div> 
          </div>
            
          <div className="population"> {countries.population}</div>
        </div>
      ))}
    </div>


    </div>
   
  );
}
