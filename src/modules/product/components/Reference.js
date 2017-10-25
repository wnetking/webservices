import React from 'react'

const Reference = ({data}) => {
  return (
    <h5>{data === null ? 'Reference: ' : 
    `Reference: ${data.reference}`}</h5>
  )
}

export default Reference
