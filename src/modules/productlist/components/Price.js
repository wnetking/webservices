import React from 'react'
import { connect } from 'react-redux'

const Price = ({price,  currencies}) => {
  let {data, fetching, active} = currencies

  return (
    <div>
      {fetching ? <span>00</span> :
        <span>
         {((parseFloat(price)) * parseFloat(currencies.data[active].conversion_rate)).toFixed(2)}
           &nbsp;{data[active].iso_code}
        </span>   
         }
    </div>
  )
}
function mapStateToProps ({currencies}) {
  return {
    currencies: currencies,
  }
}

export default connect(mapStateToProps)(Price)
