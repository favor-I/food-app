import React from 'react'

const Button = ({text, btnClassName}) => {
  return (
    <button className={btnClassName}>{text}</button>
  )
}

export default Button