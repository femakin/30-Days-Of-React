import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Input = ({ handlers, onClick, style, placeholder, label, id, type, name, onBlur }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} style={style} onClick={onClick} handlers={handlers} onBlur={onBlur}/>
    </div>
  )
}

const inputWithType = (CompParam) =>{
  const inputStyles = {
    backgroundColor: '#e7e7e7',
    padding: '10px 12px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: "1.25rem",
    color: 'green',
}

return (props) => {
  return <CompParam {...props} style={inputStyles} />
}



}



const TextInput = inputWithType(Input)
const NumberInput = inputWithType(Input)
const EmailInput = inputWithType(Input)
const PasswordInput = inputWithType(Input)

class App extends Component {
  render() {

    return (
    <div >
       <form className='App' >
       <TextInput   onClick={() => alert('Text. You clicked inside mу ...')} id={0} label="your name" type="text" placeholder="First Name.."/>
     <NumberInput onClick={() => alert('Text. You clicked inside mу ...')} id={1} onBlur={() =>alert('Text. Focus is lost ...')}    label="your Number" type="number" placeholder="Phone Number.."/>
      <EmailInput   label="Email" id={2} placeholder="Email" type="email"/>
      <PasswordInput label="Password" type="password" id={3} placeholder="password"/>
      </form>
    </div>
      
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)



// type: 'text',
//     style: { borderRadius: '20px', color: 'green', border: '2px solid green' },
//     hendlers: {
//       onClick: () => console.log('Text. You clicked inside mу ...'),
//       onBlur: () => console.log('Text. Fockus is lost ...')
//     },
//     placeholder: 'First name',
//     label: 'Your name',
//     id: 1