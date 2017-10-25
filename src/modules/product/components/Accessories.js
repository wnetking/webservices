import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col } from 'reactstrap'
import { fetchAccessoriesRequest } from '../actions'
import {ProductMiniature} from 'modules/productlist/components'

class Accessories extends Component {
  componentDidMount () {
    let {fetchAccessoriesRequest, products} = this.props

    if (Array.isArray(products)) {
      fetchAccessoriesRequest(products.map((item) => item.id))
    }
  }

  render () {
    let {data, fetching} = this.props.product.accessories
    let {active} = this.props.languages
    let {products} = this.props

    return (
      <div>
        {fetching || !Array.isArray(products) ? null :
           <div>
             <h5>You might also like</h5>
             <Row>             
               {data.map((item, key) => (
                  <Col
                  xs='12'
                  sm='6'
                  md='4'
                  xl='3'
                  key={key}
                  className='mb-4'>
                  <ProductMiniature item={item} active={active} />
                </Col>
                ))}
            </Row>
           </div>}
      </div>
    )
  }
}

function mapStateToProps ({ product, languages }) {
  return {
    product: product,
    languages: languages
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchAccessoriesRequest: bindActionCreators(fetchAccessoriesRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accessories)
