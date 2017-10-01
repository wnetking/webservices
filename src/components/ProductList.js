import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as productsActions from '../actions/productsActions'
import ProductMiniature from './ProductMiniature'

class ProductList extends Component {
  componentDidMount() {
    let {productsActions, limit, categoryID, manufacturerID, products} = this.props

    productsActions.getFilterProductsList(limit, categoryID, manufacturerID, products);
  }

  render() {
    let { fetching, data } = this.props.productsState.productList

    return (
      <Row>
        {fetching || data === null ?
          <Col>
            <div>Loading...</div>
          </Col>
          :
          typeof  data === "undefined" ?
            <div>No products</div> :
            data.map((item, key) => (
              <Col xs="4" key={key} className="mb-4">
                <ProductMiniature item={item}/>
              </Col>
            ))
        }
      </Row>
    )
  }
}


function mapStateToProps({ productsReducer, categoryReducer }) {
  return {
    productsState: productsReducer,
    category: categoryReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    productsActions: bindActionCreators(productsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);