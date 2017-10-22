import React from 'react'

const Name = ({data, active}) => {
  return(
    <h2>{data === null ? 'Product name' : 
    data.name[active].value}</h2>
  )
}

export default Name