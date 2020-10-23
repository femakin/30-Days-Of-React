import React from 'react'



export default function Numbers({ numbers }) {
  const bg = (num)=>{
    let color;
    let colors =['yellow', 'red', 'Green']
    if(num % 2 === 0){
      color = colors[2]
    }else if (num % 2 !== 0 ) {
      color = colors[0]
  };for (let i = 2; i < num; i++) {
    if(num % i === 0){
      color = colors[1]
    } 
  }
    return color;
  }

  const list = numbers.map((number) => 
  <div key={number}  className="numbers"  style={{backgroundColor: bg(number)}}>
    
    <li  className="list">{number}</li>
  </div>
  )
  return list
}

// function bkg(number){
//   if(number % 2 === 0){backgroundColor: blue}
// }


// export default function Numbers({ numbers }) {
//   const list = numbers.map((number) => 
//   <div key={number} style={{backgroundColor: number % 2 === 0 ? 'green':'yellow'}} className="numbers"><li  className="list">{number}</li></div>
//   )
//   return list
// }
