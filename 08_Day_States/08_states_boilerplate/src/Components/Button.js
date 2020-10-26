




import React from 'react'

export default function Button() {
    const Button = ({ text, onClick, style }) => (
        <button style={style} onClick={onClick}>
          {text}
        </button>
      );
  return (
    <div>
      {Button}
    </div>
  )
}
