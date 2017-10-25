import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { ListGroupItem, ListGroup } from 'reactstrap'
import { fetchBundleRequest } from '../actions'
import Api from 'api'

class Bundle extends Component {
  componentDidMount () {
    let {fetchBundleRequest, products} = this.props

    if (Array.isArray(products)) {
      fetchBundleRequest(products.map((item) => item.id))
    }
  }

  render () {
    let {data, fetching} = this.props.product.bundle
    let {active} = this.props.languages
    let {products} = this.props

    return (
      <div>
        {fetching || !Array.isArray(products) ? null :
           <div>
             <h5>Product in pack</h5>
             <ListGroup className='mb-2'>
               {data.map((item, key) => (
                  <ListGroupItem key={key}>
                    <img
                      style={{maxWidth: 50, float: 'left'}}
                      className='mr-2'
                      src={Api.images.productImage(item.id, item.id_default_image)}
                      alt={item.name[active].value} />
                    <div style={{float: 'left'}} className='mt-2'>
                      <Link to={`/product/${item.id}-${item.link_rewrite[0].value}`}>
                      {item.name[active].value}
                      </Link>
                    </div>
                  </ListGroupItem>
                ))}
             </ListGroup>
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
    fetchBundleRequest: bindActionCreators(fetchBundleRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bundle)
