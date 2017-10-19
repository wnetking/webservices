import React, { Component } from 'react'

const Name = ({data}) => {
  return(
    <h2>{data === null ? 'Product name' : 
    data.name[0].value}</h2>
  )
}

export default Name