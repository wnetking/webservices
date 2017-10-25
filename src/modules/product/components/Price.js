import React from 'react'
import { connect } from 'react-redux'

const Price = ({price, combinations, currencies}) => {
  let {data, fetching, active} = currencies

  return (
    <div>
      {fetching && combinations.fetching && data === null  ? <span>00</span> :
        <span>
         {((combinations.product.data === null ? 0 : parseFloat(combinations.product.data.price) + 
           (combinations.data === null || typeof combinations.data === "undefined"
            ? 0 : parseFloat(combinations.data.price)))  * 
           parseFloat(data[active].conversion_rate)).toFixed(2)}
           &nbsp;{data[active].iso_code}
        </span>   
         }
    </div>
  )
}
function mapStateToProps ({currencies,combinations}) {
  return {
    currencies: currencies,
    combinations: combinations,
  }
}

export default connect(mapStateToProps)(Price)
