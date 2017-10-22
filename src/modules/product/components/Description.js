import React from 'react'
import renderHTML from 'react-render-html'

let placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

const Description = ({data, type, active}) => {
  return (
    <div>
      {data === null ? <p>{placeholder}</p> :
         type === 'short' ?
           renderHTML(data.description_short[active].value) :
           renderHTML(data.description[active].value)}
    </div>
  )
}

export default Description
