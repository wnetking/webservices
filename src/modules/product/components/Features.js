import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'reactstrap'
import { fetchFeaturesRequest } from '../actions'

class Features extends Component {
  componentDidMount () {
    let {combinations, fetchFeaturesRequest} = this.props

    fetchFeaturesRequest(combinations.product.data.associations.product_features)
  }

  render () {
    let {fetching, data} = this.props.product.features

    return (
      <div>
        {fetching ?
           <div>
             Loading ...
           </div>
           :
           <Table striped className='mt-5'>
             <tbody>
               {data.map((item, key) => (
                  <tr key={key}>
                    <td>
                      {item.name[0].value}
                    </td>
                    <td>
                      {item.value[0].value}
                    </td>
                  </tr>
                ))}
             </tbody>
           </Table>}
      </div>
    )
  }
}

function mapStateToProps ({product, combinations}) {
  return {
    product: product,
    combinations: combinations
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchFeaturesRequest: bindActionCreators(fetchFeaturesRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Features)
