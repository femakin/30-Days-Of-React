import React from 'react'
const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'USA', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]
export default function Bargroup() {
    var max = 0;
    for (var j = 0; j < tenHighestPopulation.length; j++){
        if (parseInt(tenHighestPopulation[j].population, 10) > max) 
    max = tenHighestPopulation[j].population; 
          // we do the conversion here
          tenHighestPopulation[j].population = Math.round((tenHighestPopulation[j].population / max * 100)) + "%";
         const percentage = tenHighestPopulation[j].population;
        
          }

    
  return (
    <div className="percent">
    {tenHighestPopulation.map((countries, index) => (
  <div key={index}  style={{display: "flex", padding: "10px", justifyContent: "space-between"}}>  {countries.country}<div className="skills html" style={{backgroundColor: "pink", width: "40%"}}>Html</div>  <div>{countries.population}</div>   </div> 
    )) }
    </div>
  )
}
